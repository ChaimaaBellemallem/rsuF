import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//FORM-Wizard:
import VueFormWizard from "vue-form-wizard";
import VueFormGenerator from "vue-form-generator";
Vue.use(VueFormWizard);
Vue.use(VueFormGenerator);

//Styles:
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import"@/assets/css/style.css";
import"@/assets/css/form-wizard.css";
import "vue-form-wizard/dist/vue-form-wizard.min.css";



//js:
import "bootstrap/dist/js/bootstrap.min.js";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

