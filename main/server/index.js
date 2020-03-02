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
app.get("/animals", (req, res) => {
  res.send([
    {
      build_animal_id: 1,
      name: "Red Cobra Guppy",
      water_type: "Fresh",
      aggression: "Low",
      size: "Small",
      color: "Red",
      url:
        "https://www.liveaquaria.com/product/1071/red-cobra-guppy?pcatid=1071&c=830+1100+1071"
    },
    {
      build_animal_id: 5,
      name: "Bicolor Dottyback",
      water_type: "Salt",
      aggression: "Medium",
      size: "Small",
      color: "Purple and Yellow",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=15+38+143&pcatid=143"
    },
    {
      build_animal_id: 2,
      name: "Tiger Oscar",
      water_type: "Fresh",
      aggression: "Medium",
      size: "Large",
      color: "Black",
      url:
        "https://www.liveaquaria.com/product/1090/tiger-oscar?pcatid=1090&c=830+889+1090"
    },
    {
      build_animal_id: 3,
      name: "Platy",
      water_type: "Fresh",
      aggression: "Low",
      size: "Small",
      color: "Orange",
      url:
        "https://www.liveaquaria.com/product/1067/assorted-platy?pcatid=1067&c=830+1103+1067"
    },
    {
      build_animal_id: 4,
      name: "Blue Hepatus Tang",
      water_type: "Salt",
      aggression: "Medium",
      size: "Large",
      color: "Blue",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=15+2971+330&pcatid=330"
    },
    {
      build_animal_id: 6,
      name: "Electric Blue African Cichlid",
      water_type: "Fresh",
      aggression: "High",
      size: "Medium",
      color: "Blue",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=747+870+840&pcatid=840"
    },
    {
      build_animal_id: 7,
      name: "Flame Angelfish",
      water_type: "Salt",
      aggression: "Medium",
      size: "Medium",
      color: "Orange",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=15+2971+444&pcatid=444"
    },
    {
      build_animal_id: 10,
      name: "Blue Diamond Discus",
      water_type: "Fresh",
      aggression: "Low",
      size: "Large",
      color: "Blue",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=830+834+1610&pcatid=1610"
    },
    {
      build_animal_id: 9,
      name: "Snowflake Eel",
      water_type: "Salt",
      aggression: "Medium",
      size: "Large",
      color: "White",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=15+29+131&pcatid=131"
    },
    {
      build_animal_id: 8,
      name: "Ocellaris Clownfish",
      water_type: "Salt",
      aggression: "Medium",
      size: "Medium",
      color: "Orange",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=15+1500+5143+755&pcatid=755"
    }
  ]);
});
app.get("/plants", (req, res) => {
  res.send([
    {
      build_plant_id: 1,
      name: "Java Moss",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green",
      url:
        "https://www.amazon.com/Java-Moss-Portion-Oz-Cup/dp/B01200O8BO/ref=asc_df_B01200O8BO/?tag=hyprod-20&linkCode=df0&hvadid=312098493834&hvpos=&hvnetw=g&hvrand=10695665500551016286&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029857&hvtargid=pla-622585415447&psc=1"
    },
    {
      build_plant_id: 2,
      name: "Amazon Sword",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green",
      url:
        "https://www.amazon.com/Amazon-Bleheri-inches-Freshwater-Aquatic/dp/B0771CX37D/ref=sr_1_5?keywords=amazon+sword&qid=1583184000&s=pet-supplies&sr=1-5"
    },
    {
      build_plant_id: 3,
      name: "Crypt Wendtii",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green",
      url:
        "https://www.amazon.com/Potted-Cryptocoryne-Wendtii-Red-Aquarium/dp/B01M4KH8BN/ref=sr_1_5?keywords=Crypt+Wendtii&qid=1583184072&s=pet-supplies&sr=1-5"
    },
    {
      build_plant_id: 4,
      name: "Green Finger Algae",
      water_type: "Salt",
      difficulty: "Easy",
      color: "Green",
      url: "https://www.liveaquaria.com/product/3570/?pcatid=3570"
    },
    {
      build_plant_id: 5,
      name: "Dragon's Breath Algae",
      water_type: "Salt",
      difficulty: "Easy",
      color: "Red",
      url: "https://topshelfaquatics.com/product/dragons-breath-macro-algae/"
    },
    {
      build_plant_id: 10,
      name: "Mermaid Fan",
      water_type: "Salt",
      difficulty: "Medium",
      color: "Green",
      url: "https://www.liveaquaria.com/product/1739/?pcatid=1739"
    },
    {
      build_plant_id: 9,
      name: "Caulerpa",
      water_type: "Salt ",
      difficulty: "Easy",
      color: "Green",
      url:
        "https://aquariumdepot.com/fern-caulerpa-macro-algae-caulerpa-sertularioides/"
    },
    {
      build_plant_id: 8,
      name: "Cryptocoryne",
      water_type: "Fresh",
      difficulty: "East",
      color: "Green",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=768+1631+826&pcatid=826"
    },
    {
      build_plant_id: 7,
      name: "Anubias",
      water_type: "Fresh",
      difficulty: "Easy",
      color: "Green",
      url:
        "https://www.liveaquaria.com/product/prod_display.cfm?c=768+1630+815&pcatid=815"
    },
    {
      build_plant_id: 6,
      name: "Chaetomorpha Algae",
      water_type: "Salt",
      difficulty: "Easy",
      color: "Geen\n",
      url:
        "https://aquariumdepot.com/green-saltwater-macro-algae-plant-chaetomorpha-aka-chaeto-chaetomorpha-spiralis-small-excellent-for-nutrient-control-in-an-aquarium/"
    }
  ]);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
