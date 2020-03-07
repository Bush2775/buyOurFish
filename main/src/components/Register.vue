<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{ title }}</h1>
      <div>First Name: <input type="text" v-model="request.firstName" /></div>
      <div>Last Name: <input type="text" v-model="request.lastName" /></div>
      <div>Username: <input type="text" v-model="request.userName" /></div>
      <div>Password: <input type="text" v-model="request.password" /></div>
      <div>Password Check: <input type="text" v-model="passwordCheck" /></div>
      <div>Email: <input type="text" v-model="request.email" /></div>
      ,
      <button type="button">Register</button>
      <button type="button">Back to login</button>
      {{ request }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",

  data() {
    return {
      title: "Registration",
      passwordCheck: "",
      request: {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        passwordCheck: "",
        email: ""
      },
      response: ""
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
form {
  text-align: center;
}
</style>
