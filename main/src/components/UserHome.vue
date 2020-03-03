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
        title: 'Your Saved Aquarium Builds'
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
