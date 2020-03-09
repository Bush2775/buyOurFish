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
            <th v-if="loggedIn">Add</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in animalsArray" :key="animal.build_animal_id" id="info">
            <td>{{ animal.name }}</td>
            <td>{{ animal.water_type }}</td>
            <td>{{ animal.aggression }}</td>
            <td>{{ animal.size }}</td>
            <td>{{ animal.color }}</td>
            <td>
              <img class="imageSize" :src="animal.url" />
            </td>
            <td v-if="loggedIn">
              <input type="text" v-model="animal.quantity" placeholder="Quantity" />
              <button :disabled="disabled" v-if="loggedIn" @click="addToBuild(animal)">Add To Build</button>
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
  name: "Animals",
  data() {
    return {
      title: "Animals Available to Add",
      disabled: false,
      animalsArray: [],
      loggedIn: true,
      build: JSON.parse(localStorage.getItem("selectedBuild"))
    };
  },
  methods: {
    addToBuild(animal) {
      //get animal id
      console.log(animal.build_animal_id);
      console.log(animal.quantity);
      axios
        .post("http://localhost:3000/addAnimal", {
          build_animal_id: animal.build_animal_id,
          build_collection_id: this.build.build_collection_id,
          quantity: animal.quantity
        })
        .catch(err => {
          alert("FAILED TO ADD" + err.response.data);
        });
    }
  },
  mounted() {
    if (this.build == null || this.build == "") {
      this.disabled = true;
      alert("null build");
    }
  },
  created() {
    //console.log("Created")
    axios
      .get("http://localhost:3000/animals")
      .then(dataResponse => {
        this.animalsArray = dataResponse.data;
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
