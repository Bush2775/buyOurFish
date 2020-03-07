<template>
  <div class="content-container">
    <div> 
      <navbarcomp></navbarcomp>
    </div> 
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      
      
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'HelloWorld',

  data () {
    return {
        title: 'Your Saved Aquarium Builds',
        //authenticated: false,  this is where we will check the session token.
      }
    
  },
  /*mounted() { // will redirected users to different page if they are not authenticated.
        if(!this.authenticated) { // this can be if the user has session instead of authenticated.
            this.$router.replace({ name: "Login" });
            alert('You need to log in before you can view your personal Builds')
        }
}*/
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
