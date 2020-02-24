const Sequelize = require("sequelize");
const db = require("../conn/buyOurFishDB");

const bulidAnimals = db.define(
  "build_animals",
  {
    build_animal_id: {
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

module.exports = bulidAnimals;
