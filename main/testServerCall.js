const axios = require("axios");
const uuid = require("uuid");
const plants = require("./server/models/Plants");
const session = require("./server/models/Session");
const users = require("./server/models/User");
const tanks = require("./server/models/Build_Tanks");
// tanks.findAll({ raw: true }).then(console.log);
// console.log(uuid.v4());
axios
  .post("http://localhost:3000/createCollection", {
    description: "tsdlkfjs sdlkfj sldkjfs lkdjf",
    build_tank_id: 1,
    name: "Thiss is my name",
    water_type: "Fresh"
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
