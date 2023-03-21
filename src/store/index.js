import Vue from "vue";
import Vuex from "vuex";

import personalInfo from "./personalInfo.js";
import selectYourPlan from "./selectYourPlan.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    personalInfo,
    selectYourPlan,
  },
});
