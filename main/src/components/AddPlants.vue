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
            <th v-if="loggedIn">Add</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="plant in plantArray" :key="plant.build_plant_id" id="info">
            <td>{{ plant.name }}</td>
            <td>{{ plant.water_type }}</td>
            <td>{{ plant.difficulty }}</td>
            <td>{{ plant.color }}</td>
            <td>
              <img class="imageSize" :src="plant.url" />
            </td>
            <td v-if="loggedIn">
              <input type="text" v-model="plant.quantity" placeholder="Quantity" />
              <button @click="addToBuild(plant)">Add To Build</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Plants",
  data() {
    return {
      title: "Plants Available to Add",
      plantArray: [],
      loggedIn: true,
      build: JSON.parse(localStorage.getItem("selectedBuild")),
      request: {
        quantity: 0
      }
    };
  },
  methods: {
    addToBuild(plant) {
      console.log(plant);
      axios.post(
        "http://localhost:3000/addPlant",
        {
          build_plant_id: plant.build_plant_id,
          build_collection_id: this.build.build_collection_id,
          quantity: plant.quantity
        },
        {
          headers: {
            Authorization: localStorage.getItem("Auth")
          }
        }
      );
    }
  },
  /*mounted() {
      if(build= null) {
        window.location.href = "/#/UserCollection"
      }
    },*/
  created() {
    //console.log("Created")
    axios
      .get("http://localhost:3000/plants")
      .then(dataResponse => {
        this.plantArray = dataResponse.data.filter(
          plant =>
            plant.water_type === this.build.water_type ||
            plant.water_type === "Fresh"
        );
      })
      .catch(err => {
        console.error("ERRROR" + err);
      });
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
span {
  text-align: left;
}
#animalTable {
  text-align: center;
}
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
.imageSize {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
