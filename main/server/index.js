const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const userManagement = require("./controllers/userManagement");
const collectionManagement = require("./controllers/collectionManagment");
const tankManagement = require("./controllers/tankManagement");
const animalManagement = require("./controllers/animalManagement");
const plantManagement = require("./controllers/plantManagement");
const sessionManagement = require("./controllers/sessionManagement");

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  return userManagement
    .login(req.body)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      return res.status(400).send({
        message: "FAIL TO AUTHORIZE"
      });
    });
});

app.post("/register", (req, res) => {
  return userManagement
    .register(req.body)
    .then(response => {
      return res.send(response);
    })
    .catch(err => {
      console.log("caught", err);
      res.status(400).send(err);
    });
});

app.get("/tanks", (req, res) => {
  return tankManagement
    .getAllTanks()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/collections", authUser, (req, res) => {
  const user_id = req.user_id;
  return collectionManagement
    .getBuilds(user_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/collection/:id", authUser, (req, res) => {
  const id = req.params.id;
  const user_id = req.user_id;

  return collectionManagement
    .getBuild(id, user_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post("/createCollection", authUser, (req, res) => {
  const user_id = req.user_id;
  return collectionManagement
    .createBuild(req.body, user_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/animals", (req, res) => {
  return animalManagement
    .getAllAnimals()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post("/addAnimal", authUser, (req, res) => {
  const user_id = req.user_id;
  return animalManagement
    .addAnimalToBuild(req.body, user_id)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.post("/addPlant", authUser, (req, res) => {
  const user_id = req.user_id;
  return plantManagement
    .addPlantToBuild(req.body, user_id)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.get("/plants", (req, res) => {
  return plantManagement
    .getAllPlants()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

async function authUser(req, res, next) {
  const authToken = req.headers.authorization;
  console.log(authToken);
  if (!authToken) {
    return res.status(503).send("Failed to authenticate");
  }
  await sessionManagement
    .getUserBySession(authToken)
    .then(data => {
      console.log("USER", data);
      if (!data) {
        return res.status(503).send("Failed to authenticate");
      }
      req.user_id = data.user_id;
      next();
    })
    .catch(err => {
      console.log(err);
      return res.status(503).send("Failed to authenticate");
    });
}
