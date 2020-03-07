
<template>
 
  <div class="content-container">
    <div>
      <h1 id=title> &lt;')))>&lt; &ensp; Buy Our Fish &ensp; >&lt;((('></h1>
    </div>
    <div v-if="loggedIn"> <!--This is if the user is logged in.-->
    <ul>
      <li>
        <nav>
          <router-link class="right" to="/Login">Logout</router-link>
        </nav>
      </li><li>
        <nav>
          <router-link class="left" to="">Aquarium Builder</router-link>
        </nav>
      </li><li>
        <nav>
          <router-link class="left" to="/UserHome">My Builds</router-link>
        </nav>
      </li>
      <li>
        <nav>
          <router-link class="left" to="/Animals">Fish</router-link>
        </nav>
      </li>
      <li>
        <nav>
          <router-link class="left" to="/Plants">Plants</router-link>
        </nav>
        <li>
        <nav>
          <router-link class="left" to="/Tanks">Aquariums</router-link>
        </nav>
      </li>
    </ul>
  </div>

  <div v-else> <!--This is if the user is logged out.-->
    <ul>
      <li>
        <nav>
          <router-link class="right" to="/Login">Login</router-link>
        </nav>
      </li>
      <li>
        <nav>
          <router-link class="right" to="/">Registration</router-link>
        </nav>
      </li>
      <li>
        <nav>
          <router-link class="left" to="/Animals">Fish</router-link>
        </nav>
      </li>
      <li>
        <nav>
          <router-link class="left" to="/Plants">Plants</router-link>
        </nav>
        <li>
        <nav>
          <router-link class="left" to="/Tanks">Aquariums</router-link>
        </nav>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Navbar",
  
  data() {
    return {
      buttonEnabled: true,
      loggedIn: false, //Need to figure out a way to update this depending on if the User is logged in or not.
      request: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    handleClick: event => {
      axios
        .post("http://localhost:3000/login", {
          firstName: "test"
        })
        .then(console.log)
        .catch(err => {
          console.error("ERRROR" + err);
        });
    }
  },
  watch: {
    request: {
      handler(val, val2) {
        this.buttonEnabled = !(val.userName.trim() && val.password.trim());
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #44475C;
}


li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.right {
  float: right
}
.left {
  float: left
}


/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #1c1e26;
}
</style>
