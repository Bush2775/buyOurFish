const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const sessionManagement = require("./controllers/sessionManagement");
const userManagement = require("./controllers/userManagement");

const cors = require("cors");
app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  console.log("hit");
  userManagement.login(req.body);
  console.log(req.body);
  res.send("Hello World!");
});
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
