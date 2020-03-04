const sha256 = require("js-sha256");
const { QueryTypes } = require("sequelize");
const uuid = require("uuid");
const db = require("../conn/buyOurFishDB");

const userTable = require("../models/User");
const sessionController = require("./sessionManagement");
// login
async function login(loginParams) {
  const username = loginParams.username;
  const password = loginParams.password;
  const user = await userTable
    .findOne({
      where: {
        username
      }
    })
    .catch(console.error);

  if (!user) {
    throw "User not found";
  }

  if (user.password_hash !== getPasswordHash(password, user.salt)) {
    throw "Bad Authentication";
  }

  const { session_id } = await sessionController
    .createNewSession(user.user_id)
    .catch(console.log);

  return getUserResponse(session_id, user);
}

async function register(registerParams) {
  const { username, password, email, first_name, last_name } = registerParams;
  console.log(username, password, email, first_name, last_name);
  const user = await db.query(
    `Select * from "USER" where username = :username OR email = :email`,
    {
      logging: console.log,
      type: QueryTypes.SELECT,
      replacements: { username, email }
    }
  );

  console.log(user, "********");
  if (user.length > 0) {
    if (user[0].username === username) throw "Cannot use that username";
    if (user[0].email === email) throw "Cannot use that email";
    throw Error("Uncaught error");
  }

  const salt = uuid.v4().substr(0, 8);

  const newUser = await userTable.create({
    username,
    password_hash: getPasswordHash(password, salt),
    salt,
    email,
    first_name,
    last_name
  });

  const { session_id } = await sessionController
    .createNewSession(newUser.user_id)
    .catch(console.log);

  return getUserResponse(session_id, newUser);
}

function getUserResponse(session_id, user) {
  delete user.password_hash;
  delete user.salt;
  return {
    auth: session_id,
    user
  };
}

function getPasswordHash(password, salt) {
  const hash = sha256.create();
  const inputPassword = hash.update(password + salt);

  return inputPassword.hex();
}

// register
module.exports = {
  login,
  register
};
