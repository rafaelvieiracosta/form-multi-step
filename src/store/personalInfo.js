export default {
  state: {
    name: null,
    email: null,
    phone: null,
  },
  mutations: {
    SET_NAME(state, value) {
      state.name = value;
    },
    SET_EMAIL(state, value) {
      state.email = value;
    },
    SET_PHONE(state, value) {
      state.phone = value;
    },
  },
};
