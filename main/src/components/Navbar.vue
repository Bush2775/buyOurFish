
<template>
  <div class="content-container">
    <ul>
      <li>
        <nav>
          <router-link to="/UserHome">Buy Our Fish</router-link>
        </nav>
      </li>
      <li>
        <nav>
          <router-link to="/Login">Login</router-link>
        </nav>
      </li><li>
        <nav>
          <router-link to="/Login">Logout</router-link>
        </nav>
      </li><li>
        <nav>
          <router-link to="">Aquarium Builder</router-link>
        </nav>
      </li><li>
        <nav>
          <router-link to="/UserHome">My Builds</router-link>
        </nav>
      </li><li>
        <nav>
          <router-link to="/">Registration</router-link>
        </nav>
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Navbar",
  data() {
    return {
      buttonEnabled: true,
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

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #1c1e26;
}
</style>
