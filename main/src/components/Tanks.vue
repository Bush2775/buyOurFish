<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      <table id="firstTable">
        <thead>
            <tr>
            <th>Material</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Dimensions</th>
            <th>Volume</th>
            <th>URL</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tanks in tanksArray" :key="tanks.build_tank_id" id="info">
            <td>{{ tanks.material }}</td>
            <td>{{ tanks.price }}</td>
            <td>{{ tanks.brand }}</td>
            <td>{{ tanks.model }}</td>
            <td>{{ tanks.dimensions }}</td>
            <td>{{ tanks.volume }}</td>
            <td><img  class="imageSize" :src="tanks.url" /></td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
const axios = require("axios")
export default {
  name: 'Tanks',
  data () {
    return {
        title: 'Tanks Available to Add',
        tanksArray: []
      }
    
  },
  created() {
      //console.log("Created")
       axios
        .get("http://localhost:3000/tanks")
        .then(dataResponse => {
            this.tanksArray = dataResponse.data;
            
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
