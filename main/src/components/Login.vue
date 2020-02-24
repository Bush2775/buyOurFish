<template>
  <div class="content-container">
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      <form @click="customHandler">
        Username: <input type="text" v-model="userName" />
      </form>
      <form @click="customHandler">
        Password: <input type="text" v-model="password" />
      </form>
      <form>
      <button type="button" @click="customHandler">Login</button>
      </form>
      {{userName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        title: 'Login',
        userName: '',
        password: '',
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
