const plant = require("../models/Plants");

async function getAllPlants() {
  return plant.findAll();
}

module.exports = {
  getAllPlants
};
