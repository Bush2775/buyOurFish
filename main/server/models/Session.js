const Sequelize = require("sequelize"); //library
const db = require("../conn/buyOurFishDB"); //connection to database

const Session = db.define( //change the const name to match the table
  "SESSION", // table name
  {
    session_id: { type: Sequelize.postgres.STRING,primaryKey: true },
    user_id: { type: Sequelize.postgres.STRING },
    expiration: { type: Sequelize.postgres.DATE}
  },
  {
    freezeTableName: true, // use exact table name
    timestamps: false // gets rid of columns
  }
);

module.exports = Session;
