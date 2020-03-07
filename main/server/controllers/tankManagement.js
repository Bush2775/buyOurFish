const buildTank = require("../models/Build_Tanks");

async function getAllTanks() {
  return buildTank.findAll();
}

module.exports = {
  getAllTanks
};
