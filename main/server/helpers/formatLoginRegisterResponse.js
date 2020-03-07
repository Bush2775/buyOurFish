module.exports = function(auth, user) {
  console.log(user, 12222);
  console.log(user.User, 12222);
  const dataValues = user.dataValues;
  return {
    authToken: auth,
    user: {
      username: dataValues.username,
      email: dataValues.email,
      first_name: dataValues.first_name,
      last_name: dataValues.last_name
    }
  };
};
