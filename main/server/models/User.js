const Sequelize = require("sequelize");
const db = require("../conn/buyOurFishDB");

const User = db.define(
  "USER",
  {
    user_id: {
      type: Sequelize.postgres.STRING,
      primaryKey: true,
      autoIncrement: true
    },
    username: { type: Sequelize.postgres.STRING },
    password_hash: { type: Sequelize.postgres.STRING },
    salt: { type: Sequelize.postgres.STRING },
    email: { type: Sequelize.postgres.STRING },
    first_name: { type: Sequelize.postgres.STRING },
    last_name: { type: Sequelize.postgres.STRING }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;
