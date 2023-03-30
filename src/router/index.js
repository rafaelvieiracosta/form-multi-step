import Vue from "vue";
import VueRouter from "vue-router";

import PersonalInfo from "../views/personalInfo.vue";
import SelectYourPlan from "../views/selectYourPlan.vue";
import PickAddOns from "../views/pickAddOns.vue";
import FinishingUp from "../views/finishingUp.vue";
import SentWithSuccess from "../views/sentWithSuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "personalInfo",
    component: PersonalInfo,
  },
  {
    path: "/plan",
    name: "selectYourPlan",
    component: SelectYourPlan,
  },
  {
    path: "/addons",
    name: "pickAddOns",
    component: PickAddOns,
  },
  {
    path: "/summary",
    name: "finishingUp",
    component: FinishingUp,
  },
  {
    path: "/success",
    name: "sentWithSuccess",
    component: SentWithSuccess,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("buttonClicked")) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
