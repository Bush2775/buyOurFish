const express = require("express");
const app = express();
const port = 3000;
const sessionManagement = require("./controllers/sessionManagement");
const userManagement = require("./controllers/userManagement");
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/login", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
