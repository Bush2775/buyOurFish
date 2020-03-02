// make pull user and create hash for login user provided hash(password + user salt) === user passwordhash

const { Sequelize } = require("sequelize");
const AnimalTable = require("../models/Animals");
// login
async function login(loginParams) {
  var username = loginParams.username;
  var password = loginParams.password;
  console.log("eee");
  const resposne = await AnimalTable.findAll()
    .then(console.log)
    .catch(console.error);
  console.log(resposne);

  console.log("eee");
}

// register
module.exports = {
  login
};
