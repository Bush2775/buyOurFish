// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Navbar from "@/components/Navbar";
const appState = require("./stores/appState");
Vue.config.productionTip = false;
Vue.prototype.$authService = appState;
Vue.component("navbarcomp", Navbar);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
