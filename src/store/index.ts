import Vue from "vue";
import Vuex from "vuex";

//Aqui se importan los modulos
import banks from "./modules/bankModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banks,
  },
});
