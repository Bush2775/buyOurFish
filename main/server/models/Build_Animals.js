const { Sequelize, QueryTypes } = require("sequelize");
const db = require("../conn/buyOurFishDB");

const buildAnimals = db.define(
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

async function getAnimalFromBuild(build_id) {
  return db.query(
    `SELECT a.*, ba.quantity
FROM "BUILD_COLLECTION" bc
LEFT JOIN "BUILD_ANIMALS" ba on ba.build_collection_id = bc.build_collection_id
LEFT JOIN "ANIMALS" a on a.build_animal_id = ba.build_animal_id
where bc.build_collection_id = :build_id`,
    {
      raw: true,
      replacements: { build_id },
      type: QueryTypes.SELECT
    }
  );
}

module.exports = {
  buildAnimals,
  getAnimalFromBuild
};
