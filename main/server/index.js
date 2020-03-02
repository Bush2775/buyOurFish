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
  console.log(req.query);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
