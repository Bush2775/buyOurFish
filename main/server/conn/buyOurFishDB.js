const Sequelize = require("sequelize");

const db = new Sequelize("fishData", "chuck", "intersect", {
  host: "192.168.50.65",
  port: 5432,
  dialect: "postgres"
});

module.exports = db;
