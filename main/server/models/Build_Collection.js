const Sequelize = require("sequelize"); //library
const db = require("../conn/buyOurFishDB"); //connection to database

const buildCollection = db.define( 
  "BUILD_COLLECTION", // table name
  {
    build_collection_id: { type: Sequelize.postgres.INTEGER, primaryKey: True },
    date: { type: Sequelize.postgres.DATE },
    name: { type: Sequelize.postgres.STRING },
    description: { type: Sequelize.postgres.STRING },
    water_type: { type: Sequelize.postgres.STRING },
    user_id: { type: Sequelize.postgres.INTEGER },
    build_tank_id: { type: Sequelize.postgres.INTEGER }
  },
  {
    freezeTableName: true, // use exact table name
    timestamps: false // gets rid of columns
  }
);

module.exports = buildCollection;
