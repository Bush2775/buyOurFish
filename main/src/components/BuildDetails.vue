<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      <div id="contentDetails">
        <div>
          <h3>Name:</h3>
          {{ collection.name}}
        </div>
        <br />

        <div>
          <h3>Build Description:</h3>
          {{ collection.description}}
        </div>
        <br />

        <div>
          <h3>Build Watertype:</h3>
          {{ collection.water_type}}
        </div>
        <br />

        <div>
          <h3>Tank Info:</h3>
          <table id="firstTable">
            <thead>
              <tr>
                <th>Volume</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Dimensions</th>
                <th>Material</th>
                <th>Model</th>
                <th>Picture</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ tank.volume }}</td>
                <td>{{ tank.brand }}</td>
                <td>{{ tank.price }}</td>
                <td>{{ tank.dimensions }}</td>
                <td>{{ tank.material }}</td>
                <td>{{ tank.model }}</td>
                <td>
                  <img class="imageSize" :src="tank.url" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div>
          <h3>Animal Info:</h3>
          <table id="firstTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Water Type</th>
                <th>Size</th>
                <th>Color</th>
                <th>Argression</th>
                <th>Picture</th>
                <th>
                  <button>
                    <router-link to="/AddAnimals">Add Fish</router-link>
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="animals in animalArray"
                :key="'animal' + animals.build_animal_id"
                id="info"
              >
                <td>{{ animals.name }}</td>
                <td>{{ animals.quantity }}</td>
                <td>{{ animals.water_type }}</td>
                <td>{{ animals.size}}</td>
                <td>{{ animals.color}}</td>
                <td>{{ animals.aggression }}</td>
                <td>
                  <img class="imageSize" :src="animals.url" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div>
          <h3>Plant Info:</h3>
          <table id="firstTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Water Type</th>
                <th>Difficulty</th>
                <th>Color</th>
                <th>Picture</th>
                <th>
                  <button>
                    <router-link to="/AddPlants">Add Plants</router-link>
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="plant in plantArray" :key="'plant' + plant.build_plant_id" id="info">
                <td>{{ plant.name }}</td>
                <td>{{ plant.quantity }}</td>
                <td>{{ plant.water_type }}</td>
                <td>{{ plant.difficulty}}</td>
                <td>{{ plant.color}}</td>
                <td>
                  <img class="imageSize" :src="plant.url" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
const axios = require("axios");
const handleError = require("../helpers/handleErrorResponse");
export default {
  name: "UserCollection",
  data() {
    return {
      title: "Build Details",
      build: JSON.parse(localStorage.getItem("selectedBuild")),
      authenticated: true,
      plantArray: [],
      animalArray: [],
      collection: {},
      tank: {}
    };
  },
  mounted() {
    // will redirected users to different page if they are not authenticated.
    /*if(!this.authenticated) { // this can be if the user has session instead of authenticated.
      title: "Build Details",
      plantArray: [],
      animalArray: [],
      collection: {},
      tank: {}
    };
  },
  /*mounted() { // will redirected users to different page if they are not authenticated.
        if(!this.authenticated) { // this can be if the user has session instead of authenticated.
            this.$router.replace({ name: "Login" });
            alert('You need to log in before you can view your personal Builds')
        }*/
  },

  methods: {},
  created() {
    //console.log("Created")
    axios
      .get(
        "http://localhost:3000/collection/" + this.build.build_collection_id,
        {
          headers: {
            Authorization: localStorage.getItem("Auth")
          }
        }
      ) //will be the call that steven sets up.
      .then(dataResponse => {
        console.log(dataResponse.data, "***");
        const { data } = dataResponse;
        this.plantArray = data.plants;
        this.animalArray = data.animals;
        this.tank = data.tank;
        this.collection = data.build;
      })
      .catch(err => {
        handleError(err);
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
#contentDetails {
  text-align: left;
  border: 3px solid #44475c;
}

.imageSize {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
