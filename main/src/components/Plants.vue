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
            <th>Difficulty</th>
            <th>Color</th>
            <th>Picture</th>
            <th v-if="loggedIn"> Add </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="plant in plantArray" :key="plant.build_plant_id" id="info">
            <td>{{ plant.name }}</td>
            <td>{{ plant.water_type }}</td>
            <td>{{ plant.difficulty }}</td>
            <td>{{ plant.color }}</td>
            <td><img :src="plant.url" /></td>
            <td v-if="loggedIn"><input type="text" v-model="request.quantity" placeholder="Quantity"></input><button v-if="loggedIn">Add To Build</button></td>
            <td><img  class="imageSize" :src="plant.url" /></td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
const axios = require("axios")
export default {
  name: 'Plants',
  data () {
    return {
        title: 'Plants Available to Add',
        plantArray: [],
        loggedIn: true,
        request: {
          quantity: 0
        }
      }
    
  },
  methods: {
    addToBuild(event) {
      
    }
  },
  created() {
      //console.log("Created")
       axios
        .get("http://localhost:3000/plants")
        .then(dataResponse => {
            this.plantArray = dataResponse.data;
            
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
.imageSize {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

</style>
