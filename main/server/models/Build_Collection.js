const { Sequelize, QueryTypes } = require("sequelize"); //library
const db = require("../conn/buyOurFishDB"); //connection to database

const buildCollection = db.define(
  "BUILD_COLLECTION", // table name
  {
    build_collection_id: {
      type: Sequelize.postgres.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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

async function getUserBuilds(userID) {
  return await db.query(
    `SELECT bbc.date, 
       bbc.NAME, 
       bbc.description, 
       bbc.water_type, 
       bt.material   AS tank_material, 
       bt.price      AS tank_price, 
       bt.brand      AS tank_brand, 
       bt.model      AS tank_model, 
       bt.dimensions AS tank_dimensions, 
       bt.volume     AS tank_volume, 
       bt.url        AS tank_url, 
       sba.animal_quantity, 
       sbp.plant_quantity 
FROM   "BUILD_COLLECTION" AS bbc 
       LEFT JOIN "BUILD_TANKS" bt 
              ON bbc.build_tank_id = bt.build_tank_id 
       LEFT JOIN (SELECT Sum(bp.quantity) AS plant_quantity, 
                         bc.build_collection_id 
                  FROM   "BUILD_COLLECTION" AS bc 
                         LEFT JOIN "BUILD_PLANTS" AS bp 
                                ON bc.build_collection_id = 
                                   bp.build_collection_id 
                  GROUP  BY bc.build_collection_id) AS sbp 
              ON sbp.build_collection_id = bbc.build_collection_id 
       LEFT JOIN (SELECT Sum(ba.quantity) AS animal_quantity, 
                         bc.build_collection_id 
                  FROM   "BUILD_COLLECTION" AS bc 
                         LEFT JOIN "BUILD_ANIMALS" AS ba 
                                ON bc.build_collection_id = 
                                   ba.build_collection_id 
                  GROUP  BY bc.build_collection_id) AS sba 
              ON sba.build_collection_id = bbc.build_collection_id 
WHERE  user_id = :userID
`,
    {
      raw: true,
      replacements: { userID },
      type: QueryTypes.SELECT
    }
  );
}

async function getBuildDetails(build_id) {}

module.exports = { buildCollection, getUserBuilds };
