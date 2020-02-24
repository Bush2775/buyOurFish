const Sequelize = require("sequelize");
const db = require("../conn/buyOurFishDB");

const animals = db.define(
  "animals",
  {
    build_animal_id: {
      type: Sequelize.postgres.STRING,
      primaryKey: true
    },
    name: { type: Sequelize.postgres.STRING },
    water_type: { type: Sequelize.postgres.STRING },
    aggression: { type: Sequelize.postgres.STRING },
    size: { type: Sequelize.postgres.STRING },
    color: { type: Sequelize.postgres.STRING }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = animals;
