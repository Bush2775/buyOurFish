const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const sessionManagement = require("./controllers/sessionManagement");
const userManagement = require("./controllers/userManagement");

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  userManagement.login(req.body);

  // Return auth token
  res.send("Hello World!");
});

app.get("/tanks", (req, res) => {
  console.log(req.query);
});
app.get("/fish", (req, res) => {
  console.log(req.query);
});
app.get("/plants", (req, res) => {
  res.send([
    {
      build_plant_id: 1,
      name: "Java Moss",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green"
    },
    {
      build_plant_id: 2,
      name: "Amazon Sword",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green"
    },
    {
      build_plant_id: 3,
      name: "Crypt Wendtii",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green"
    },
    {
      build_plant_id: 4,
      name: "Green Finger Algae",
      water_type: "Salt",
      difficulty: "Easy",
      color: "Green"
    },
    {
      build_plant_id: 5,
      name: "Dragon's Breath Algae",
      water_type: "Salt",
      difficulty: "Easy",
      color: "Red"
    },
    {
      build_plant_id: 6,
      name: "Chaetomorpha Algae",
      water_type: "Salt",
      difficulty: "Easy",
      color: "Geen\n"
    },
    {
      build_plant_id: 7,
      name: "Anubias",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green"
    },
    {
      build_plant_id: 8,
      name: "Cryptocoryne",
      water_type: "Fresh",
      difficulty: "East",
      color: "Green"
    },
    {
      build_plant_id: 9,
      name: "Caulerpa",
      water_type: "Salt ",
      difficulty: "Easy",
      color: "Green"
    },
    {
      build_plant_id: 10,
      name: "Mermaid Fan",
      water_type: "Salt",
      difficulty: "Medium",
      color: "Green"
    }
  ]);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
