export default {
  state: {
    plan: {
      name: "arcade",
      periodSelected: "monthly",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
  },
  mutations: {
    SET_PLAN(state, value) {
      state.plan = value;
    },
  },
};
