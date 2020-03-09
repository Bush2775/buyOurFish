<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{ title }}</h1>

      <div>
        Name of Build:
        <input type="text" v-model="request.buildName" />
      </div>
      <div>
        Description:
        <input type="text" v-model="request.description" />
      </div>
      <div>
        <select @change="handleWaterTypeSelect">
          <option value="Fresh">Fresh water</option>
          <option value="Salt">Salt water</option>
        </select>
      </div>
      <div>
        <select @change="handleTankSelect">
          <option value="1">Tank 1</option>
          <option value="2">Tank 2</option>
          <option value="3">Tank 3</option>
        </select>
      </div>
      <button type="button" @click="handleClick">Create</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "createBuild",

  data() {
    return {
      title: "Create Build",
      response: "",
      request: {
        water_type: "",
        build_tank_id: 1,
        buildName: "",
        description: ""
      }
    };
  },
  methods: {
    handleWaterTypeSelect(event) {
      const waterValue = event.target.value;
      console.log(waterValue);
      this.request.water_type = waterValue;
    },
    handleTankSelect(event) {
      const tankValue = event.target.value;
      console.log(tankValue);
      this.request.build_tank_id = tankValue;
    },
    handleClick(event) {
      console.log(this.data);
      console.log("hitting request", this.request);
      axios
        .post(
          "http://localhost:3000/createCollection",
          {
            description: this.request.description,
            build_tank_id: this.request.build_tank_id,
            name: this.request.buildName,
            water_type: this.request.water_type
          },
          {
            headers: {
              Authorization: localStorage.getItem("Auth")
            }
          }
        )
        .then(data => {
          this.response = JSON.stringify(data);
        })
        .catch(err => {
          console.log("ERROR: " + err);
        });
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
