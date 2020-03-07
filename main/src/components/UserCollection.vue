<template>
  <div class="content-container">
    <navbarcomp></navbarcomp>
    <div class="modal">
      <h1 class="title">{{title}}</h1>
      <table id="firstTable">
        <thead>
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>WaterType</th>
            <th>Number of Plants</th>
            <th>Number of Animals</th>
            </tr>
        </thead>
        <tbody>
            <tr @click= goToDetails() v-for="build in buildArray" :key="build.build_collection_id" id="info">
            <td>{{ build.name }}</td>
            <td>{{ build.description }}</td>
            <td>{{ build.water_type }}</td>
            <td>{{ build.plant_quantity }}</td>
            <td>{{ build.animal_quantity }}</td>
            </tr>
        </tbody>
      </table>
    </div> 
  </div>
</template>

<script>
const axios = require("axios")
export default {
  name: 'UserCollection',
  data () {
    return {
        title: 'Your Current Builds',
        //authenticated: true,  //this is where we will check the session token.
        buildArray: []
      }
    
  },
   /*mounted() { // will redirected users to different page if they are not authenticated.
        if(!this.authenticated) { // this can be if the user has session instead of authenticated.
            this.$router.replace({ name: "Login" });
            alert('You need to log in before you can view your personal Builds')
        }
},*/

  methods:{
    goToDetails: event => {
        window.location.href = "/#/BuildDetails";
    }
  },
  created() {
      //console.log("Created")
       axios
        .get("http://localhost:3000/collections")
        .then(dataResponse => {
            this.buildArray = dataResponse.data;
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
