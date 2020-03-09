const { Sequelize, QueryTypes } = require("sequelize");
const db = require("../conn/buyOurFishDB");

const buildPlants = db.define(
  "BUILD_PLANTS",
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

async function getPlantsFromBuild(build_id) {
  return db.query(
    `Select * 
from "BUILD_COLLECTION" as bc
LEFT JOIN "BUILD_PLANTS" bp on bp.build_collection_id = bc.build_collection_id
LEFT JOIN "PLANTS" p on p.build_plant_id = bp.build_plant_id
where bc.build_collection_id = :build_id`,
    {
      raw: true,
      replacements: { build_id },
      type: QueryTypes.SELECT
    }
  );
}

module.exports = {
  getPlantsFromBuild,
  buildPlants
};
