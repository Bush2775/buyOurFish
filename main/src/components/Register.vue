<template>
  <div class="content-container">
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      <form @click="customHandler">
        First Name: <input type="text" v-model="firstName" />
      </form>
      <form @click="customHandler">
        Last Name: <input type="text" v-model="lastName" />
      </form>
      <form @click="customHandler">
        Username: <input type="text" v-model="userName" />
      </form>
      <form @click="customHandler">
        Password: <input type="text" v-model="password" />
      </form>
      <form @click="customHandler">
        Password Check: <input type="text" v-model="passwordCheck" />
      </form>
      <form @click="customHandler">
        Email: <input type="text" v-model="email" />
      </form>
      <form>
      <button type="button" @click="customHandler">Register</button>
      </form>
      <form>
      <button type="button" @click="customHandler">Back to login</button>
      </form>
      {{firstName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data () {
    return {
        title: 'Registration',
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        passwordCheck: '',
        email: ''
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
