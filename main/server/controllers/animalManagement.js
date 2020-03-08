const animal = require("../models/Animals");
const { buildAnimals } = require("../models/Build_Animals");
const { buildCollection } = require("../models/Build_Collection");

async function getAllAnimals() {
  return animal.findAll();
}
async function addAnimalToBuild(request, user_id) {
  const { build_animal_id, build_collection_id, quantity } = request;

  console.log(build_animal_id, build_collection_id, quantity);
  const collection = await buildCollection.findOne({
    where: {
      build_collection_id,
      user_id
    }
  });

  if (!collection) {
    throw "Unable to update collection; couldnt find for that user";
  }

  const collectionAnimals = await buildAnimals.findOne({
    where: {
      build_animal_id,
      build_collection_id
    }
  });

  if (!collectionAnimals) {
    // Need to create
    return buildAnimals.create({
      build_animal_id,
      build_collection_id,
      quantity
    });
  } else {
    //Need to update
    return collectionAnimals.update(
      {
        quantity: quantity + collectionAnimals.quantity
      },
      {
        where: {
          build_collection_id,
          build_animal_id
        }
      }
    );
  }
}

module.exports = {
  getAllAnimals,
  addAnimalToBuild
};
