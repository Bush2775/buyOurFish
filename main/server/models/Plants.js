const Sequelize = require("sequelize");
const db = require("../conn/buyOurFishDB");

const plants = db.define(
  "PLANTS",
  {
    build_plant_id: {
      type: Sequelize.postgres.STRING,
      primaryKey: true
    },
    name: { type: Sequelize.postgres.STRING },
    water_type: { type: Sequelize.postgres.STRING },
    difficulty: { type: Sequelize.postgres.STRING },
    color: { type: Sequelize.postgres.STRING },
    url: { type: Sequelize.postgres.STRING }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = plants;
