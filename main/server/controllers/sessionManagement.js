const Session = require("../models/Session");
const { Op } = require("sequelize");
const uuid =  require('uuid');
// Create session token
// Get new token -- make sure old token is used in past 5 min
async function getUserBySession(authToken) {
  return Session.findOne({
    where: {
      Session_ID: authToken,
      Expiration: {
        [Op.gt]: Date.now()
      }
    }
  });
}

async function createNewSession(user_id) {
  return Session.create({
      Session_ID:
  })
}

module.exports = {
  getUserBySession
};
