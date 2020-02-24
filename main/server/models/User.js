const Sequelize = require("sequelize");
const db = require("../conn/buyOurFishDB");

const User = db.define(
  "USER",
  {
    user_id: {
      type: Sequelize.postgres.STRING,
      primaryKey: true
    },
    username: { type: Sequelize.postgres.STRING }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;
