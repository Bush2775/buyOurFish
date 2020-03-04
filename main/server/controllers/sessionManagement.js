const Session = require("../models/Session");
const { Op } = require("sequelize");
const uuid = require("uuid");
const addMinutesToDate = require("../helpers/addMinutestToDate");
// Create session token
// Get new token -- make sure old token is used in past 5 min
async function getUserBySession(authToken) {
  return Session.findOne({
    where: {
      session_id: authToken,
      expiration: {
        [Op.gt]: new Date()
      }
    }
  });
}

async function createNewSession(user_id) {
  return Session.create({
    session_id: uuid.v4(),
    user_id,
    expiration: addMinutesToDate(new Date(), 5)
  });
}

module.exports = {
  getUserBySession,
  createNewSession
};
