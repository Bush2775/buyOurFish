const Sequelize = require("sequelize");
const db = require("../conn/buyOurFishDB");

const buildPlants = db.define(
  "build_plants",
  {
    build_plant_id: {
      type: Sequelize.postgres.STRING,
      primaryKey: true
    },
    build_collection_id: {
      type: Sequelize.postgres.STRING
    },
    quantity: {
      type: Sequelize.postgres.INTEGER
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = buildPlants;
