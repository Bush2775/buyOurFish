module.exports = function(auth, user) {
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
