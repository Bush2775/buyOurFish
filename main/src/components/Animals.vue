<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      <table id="firstTable">
        <thead>
            <tr>
            <th>Name</th>
            <th>Water Type</th>
            <th>Aggression</th>
            <th>Size</th>
            <th>Color</th>
            <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="animal in animalsArray" :key="animal.build_animal_id" id="info">
            <td>{{ animal.name }}</td>
            <td>{{ animal.water_type }}</td>
            <td>{{ animal.aggression }}</td>
            <td>{{ animal.size}}</td>
            <td>{{ animal.color }}</td>
            <td>{{ animal.url }}</td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
const axios = require("axios")
export default {
  name: 'Animals',
  data () {
    return {
        title: 'Animals Available to Add',
        animalsArray: []
      }
    
  },
  created() {
      //console.log("Created")
       axios
        .get("http://localhost:3000/animals")
        .then(dataResponse => {
            this.animalsArray = dataResponse.data;
            console.log(data)
        })
        .catch(err => {
          console.error("ERRROR" + err);
        });
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
span {
    text-align: left;
}
#animalTable {
    text-align: center;
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>
