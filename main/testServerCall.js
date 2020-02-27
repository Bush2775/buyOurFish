const axios = require("axios");

axios
  .post("http://localhost:3000/login", {
    firstName: "test"
  })
  .then(console.log)
  .catch(err => {
    console.error("ERRROR" + err);
  });
