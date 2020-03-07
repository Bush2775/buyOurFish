const User = require("../models/User");
const buildPlant = require("../models/Build_Plants");
const buildAnimal = require("../models/Build_Animals");
const buildTank = require("../models/Build_Tanks");

const {
  buildCollection,
  getUserBuilds
} = require("../models/Build_Collection");

async function getBuild(build_id, user_id) {
  const build = await buildCollection.findOne({
    where: {
      user_id,
      build_collection_id: build_id
    }
  });

  if (!build) {
    throw "Unable to view this build";
  }

  //Get plants, tanks, and animals
  const tank = await buildTank.findOne({
    where: {
      build_tank_id: build.build_tank_id
    }
  });

  const plants = await buildPlant.getPlantsFromBuild(build_id);
  const animals = await buildAnimal.getAnimalFromBuild(build_id);

  return {
    build,
    tank,
    plants,
    animals
  };
}

async function getBuildDetails(user_id) {
  return getUserBuilds(user_id);
}

async function createBuild(buildParams, user_id) {
  const { name, description, water_type, build_tank_id } = buildParams;

  const validTank = buildTank.findOne({
    where: {
      build_tank_id
    }
  });

  if (!validTank) {
    throw "Tank does not exist";
  }

  return buildCollection.create({
    name,
    description,
    water_type,
    build_tank_id,
    date: new Date(),
    user_id
  });
}

module.exports = {
  getBuildDetails,
  createBuild,
  getBuild
};
