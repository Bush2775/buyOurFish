<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1>Login</h1>
      <div>
        Username:
        <input type="text" v-model="request.username" />
      </div>
      <div>
        Password:
        <input type="text" v-model="request.password" />
      </div>
      <div>
        <button @click="handleClick">Submit</button>
      </div>
      {{ request }}
      {{ response }}
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "login",
  data() {
    return {
      buttonEnabled: true,
      request: {
        username: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    handleClick(event) {
      console.log(this.data);
      console.log("hitting request", this.request);
      axios
        .post("http://localhost:3000/login", {
          username: this.request.username,
          password: this.request.password
        })
        .then(data => {
          this.response = JSON.stringify(data);
          //set cookie
          //store user in localStorage
          localStorage.setItem("User", JSON.stringify(data.data.user));
          
          //TODO: get expiration from database
          //redirect


          //store user information

        })
        .catch(err => {
          console.error("ERRROR" + err);
        });
    }
  },
  watch: {
    request: {
      handler(val, val2) {
        this.buttonEnabled = !(val.username.trim() && val.password.trim());
      },
      deep: true
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
</style>
