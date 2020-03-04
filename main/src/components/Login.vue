
<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1>Login</h1>
      <div>
        Username:
        <input type="text" v-model="request.userName" />
      </div>
      <div>
        Password:
        <input type="text" v-model="request.password" />
      </div>
      <div>
        <button @click="handleClick" :disabled="buttonEnabled">Submit</button>
      </div>
      {{ request }}
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
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    handleClick: event => {
      axios
        .post("http://localhost:3000/login", {
          firstName: "test"
        })
        .then(console.log)
        .catch(err => {
          console.error("ERRROR" + err);
        });
    }
  },
  watch: {
    request: {
      handler(val, val2) {
        this.buttonEnabled = !(val.userName.trim() && val.password.trim());
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
