const axios = require("axios");
const uuid = require("uuid");
const plants = require("./server/models/Plants");
const session = require("./server/models/Session");
const users = require("./server/models/User");
const tanks = require("./server/models/Build_Tanks");
// tanks.findAll({ raw: true }).then(console.log);
// console.log(uuid.v4());
axios
  .post("http://localhost:3000/register", {
    username: "ebush1",
    password: "password",
    first_name: "tim",
    email: "workslk@gmail.com",
    last_name: "smith"
  })
  .then(data => console.log("sldkfj", data))
  .catch(err => {
    console.error("ERRROR" + JSON.stringify(err.response.data));
  });
// plants
//   .findAll({
//     raw: true
//   })
//   .then(console.log);
