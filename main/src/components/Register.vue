<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{ title }}</h1>
      <div>
        First Name:
        <input type="text" v-model="request.first_name" />
      </div>
      <div>
        Last Name:
        <input type="text" v-model="request.last_name" />
      </div>
      <div>
        Username:
        <input type="text" v-model="request.username" />
      </div>
      <div>
        Password:
        <input type="password" v-model="request.password" />
      </div>
      <div>
        Password Check:
        <input type="password" v-model="passwordCheck" />
      </div>
      <div>
        Email:
        <input type="text" v-model="request.email" />
      </div>
      <br />
      <button type="button" @click="handleClick">Register</button>
      <button type="button">Back to login</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Registration",

  data() {
    return {
      title: "Registration",
      passwordCheck: "",
      request: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: ""
      },
      response: ""
    };
  },
  methods: {
    handleClick(event) {
      console.log("hitting request", this.request);
      axios
        .post("http://localhost:3000/register", this.request)
        .then(data => {
          this.response = JSON.stringify(data);
          localStorage.setItem("Auth", data.data.authToken);
          //store user in localStorage
          localStorage.setItem("User", JSON.stringify(data.data.user));
          localStorage.setItem("loggedIn", "true");

          // window.location.href = "/#/userCollection";
        })
        .catch(err => {
          alert(err.toString());
          console.error("ERRROR" + err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  text-align: center;
}
</style>
