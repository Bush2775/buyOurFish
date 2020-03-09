const plant = require("../models/Plants");
const { buildPlants } = require("../models/Build_Plants");
const { buildCollection } = require("../models/Build_Collection");

async function getAllPlants() {
  return plant.findAll();
}

async function addPlantToBuild(params, user_id) {
  const { build_plant_id, build_collection_id, quantity } = params;

  console.log(build_plant_id, build_collection_id, quantity);
  const collection = await buildCollection.findOne({
    where: {
      build_collection_id,
      user_id
    }
  });

  if (!collection) {
    throw "Unable to update collection; couldnt find for that user";
  }

  const collectionPlants = await buildPlants.findOne({
    where: {
      build_plant_id,
      build_collection_id
    }
  });

  if (!collectionPlants) {
    return buildPlants.create({
      build_plant_id,
      build_collection_id,
      quantity
    });
  } else {
    return collectionPlants.update(
      {
        quantity: quantity + collectionPlants.quantity
      },
      {
        where: {
          build_collection_id,
          build_plant_id
        }
      }
    );
  }
}
module.exports = {
  getAllPlants,
  addPlantToBuild
};
