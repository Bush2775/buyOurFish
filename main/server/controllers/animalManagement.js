const animal = require("../models/Animals");

async function getAllAnimals() {
  return animal.findAll();
}

module.exports = {
  getAllAnimals
};
