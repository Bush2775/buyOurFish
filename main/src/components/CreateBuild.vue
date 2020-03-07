<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{ title }}</h1>

      <div>Name of Build: <input type="text" /></div>
      <div>Description: <input type="text" /></div>
      <div>Water Type: <input type="text" /></div>
      <!---Tank make a dropdown menu ---->
      <div><select @change="handleSelect">
        <option value="Fresh">Fresh water</option>
        <option value="Salt">Salt water</option>
      </select></div>
      <button type="button" @click="handleClick">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "createBuild",

  data() {
    return {
      title: "Create Build",
      response: ""
    };
  },
  methods: {
      handleSelect(event){
          const value = event.target.value;
          console.log(value);
      },
      handleClick(event){
          
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
