const axios = require("axios");
const uuid = require("uuid");
const plants = require("./server/models/Plants");
const session = require("./server/models/Session");
const users = require("./server/models/User");
const tanks = require("./server/models/Build_Tanks");
// tanks.findAll({ raw: true }).then(console.log);
// console.log(uuid.v4());
axios
  .post("http://localhost:3000/addPlant", {
    build_plant_id: 3,
    build_collection_id: 1,
    quantity: 3
  })
  .then(data => console.log("sldkfj", data.data))
  .catch(err => {
    console.error("ERRROR" + JSON.stringify(err.response.data));
  });
// plants
//   .findAll({
//     raw: true
//   })
//   .then(console.log);
