const axios = require("axios");

axios
  .post("localhost:3000/login", {
    firstName: "test"
  })
  .then(console.log)
  .catch(err => {
    console.error("ERRROR" + err);
  });
