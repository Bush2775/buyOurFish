const axios = require("axios");
const uuid = require("uuid");
const plants = require("./server/models/Plants");
// console.log(uuid.v4());
// axios
//   .get("http://localhost:3000/tanks?test=1&yes=2")
//   .then(console.log)
//   .catch(err => {
//     console.error("ERRROR" + err);
//   });
// function addMinutes(date, minutes) {
// return new Date(date.getTime() + minutes * 60000);
// }
plants
  .findAll({
    raw: true
  })
  .then(console.log);
