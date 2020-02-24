const Sequelize = require("sequelize"); //library
const db = require("../conn/buyOurFishDB"); //connection to database

const buildTanks = db.define( 
  "BUILD_TANKS", // table name
  {
    build_tank_id: {type: Sequelize.postgres.INTEGER, primaryKey: True},
    material: {type: Sequelize.postgres.STRING},
    price: {type: Sequelize.postgres.DECIMAL},
    brand: {type: Sequelize.postgres.STRING},
    model: {type: Sequelize.postgres.STRING},
    dimensions: {type: Sequelize.postgres.STRING}
  },
  {
    freezeTableName: true, // use exact table name
    timestamps: false // gets rid of columns
  }
);

module.exports = buildTanks;
