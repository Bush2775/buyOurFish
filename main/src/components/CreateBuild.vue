<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{ title }}</h1>
      
      <div>
        Name of Build:
        <input type="text" v-model="request.buildName" />
      </div>
       <br>
      <div>
        Description:
        <input type="text" v-model="request.description" />
      </div>
       <br>
      <div>
        <select @change="handleWaterTypeSelect">
          <option value="Fresh">Fresh water</option>
          <option value="Salt">Salt water</option>
        </select>
      </div>
       <br>
      <div>
        <select @change="handleTankSelect">
          <option v-for="tanks in tanksArray" :key="tanks.build_tank_id" id="info" :value="tanks.build_tank_id">
            {{tanks.volume}} gallon, {{tanks.material}}, {{tanks.brand}}</option>
        </select>
      </div>
       <br>
      <button type="button" @click="handleClick">Create</button>
    </div>
    {{tanksArray}}
  </div>
</template>

<script>
const axios = require("axios");
const handleError = require("../helpers/handleErrorResponse");
export default {
  name: "createBuild",

  data() {
    return {
      title: "Create Build",
      tanksArray: [],
      response: "",
      request: {
        water_type: "",
        build_tank_id: 1,
        buildName: "",
        description: ""
      }
    };
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
          window.location.href = "/#/userCollection";
        })
        .catch(err => {
          handleError(err);
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
