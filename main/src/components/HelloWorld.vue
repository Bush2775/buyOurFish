<template>
  <div class="content-container">
    <div class="modal">
      <h1 class="title">{{ title }}</h1>
      <form @click="customHandler">
        First Name: <input type="text" v-model="registerState.firstName" />
      </form>
      <form @click="customHandler">
        Last Name: <input type="text" v-model="registerState.lastName" />
      </form>
      <form @click="customHandler">
        User Name: <input type="text" v-model="registerState.userName" />
      </form>
      <form @click="customHandler">
        Password: <input type="text" v-model="registerState.password" />
      </form>
      <form @click="customHandler">
        Password Check:
        <input type="text" v-model="test" />
      </form>
      <form @click="customHandler">
        Email: <input type="text" v-model="registerState[email]" />
      </form>
      <form>
        <button type="button" @click="customHandler">Register</button>
      </form>
      <form>
        <button type="button" @click="customHandler">Back to login</button>
      </form>
      {{ registerState }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      test: "",
      registerState: {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        passwordCheck: "",
        email: ""
      }
    };
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
