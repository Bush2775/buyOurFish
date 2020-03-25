import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import Login from "@/components/Login";
import UserCollection from "@/components/UserCollection";
import Plants from "@/components/Plants";
import Animals from "@/components/Animals";
import Tanks from "@/components/Tanks";
import Navbar from "@/components/Navbar";
import BuildDetails from "@/components/BuildDetails";
import createBuild from "@/components/CreateBuild";
import AddAnimals from "@/components/AddAnimals";
import AddPlants from "@/components/AddPlants";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Register",
      component: Register
    },
    {
      path: "/Logout",
      name: "Logout",
      beforeEnter: (to, from, next) => {
        localStorage.setItem("User", "");
        localStorage.setItem("loggedIn", "");
        localStorage.setItem("Auth", "");
        next({ name: "Login" });
      }
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/UserCollection",
      name: "UserCollection",
      component: UserCollection
    },
    {
      path: "/Plants",
      name: "Plants",
      component: Plants
    },
    {
      path: "/Animals",
      name: "Animals",
      component: Animals
    },
    {
      path: "/Navbar",
      name: "Navbar",
      component: Navbar
    },
    {
      path: "/Tanks",
      name: "Tanks",
      component: Tanks
    },
    {
      path: "/BuildDetails",
      name: "BuildDetails",
      component: BuildDetails
    },
    {
      path: "/CreateBuild",
      name: "Create Build",
      component: createBuild
    },
    {
      path: "/AddAnimals",
      name: "AddAnimals",
      component: AddAnimals
    },
    {
      path: "/AddPlants",
      name: "AddPlants",
      component: AddPlants
    }
  ]
});
