<template>
  <footer
    v-if="$route.name !== 'sentWithSuccess'"
    class="footer"
    :class="{ 'two-itens': $route.name !== 'personalInfo' }"
  >
    <router-link
      v-if="$route.name !== 'personalInfo'"
      class="footer-btn-secondary"
      :to="previousRoute"
    >
      Voltar
    </router-link>

    <button
      v-if="$route.name === 'finishingUp'"
      class="footer-btn-primary"
      :class="{ disable: errorInPersonalInfo.length > 0 }"
      @click="goSentWithSuccess"
    >
      Confirmar
    </button>

    <router-link v-else class="footer-btn-primary" :to="nextRoute">
      Próxima
    </router-link>
  </footer>
</template>

<script>
export default {
  computed: {
    nextRoute() {
      let next = "/";

      switch (this.$route.name) {
        case "personalInfo":
          next = "/plan";
          break;
        case "selectYourPlan":
          next = "/addons";
          break;
        case "pickAddOns":
          next = "/summary";
          break;
      }

      return next;
    },
    previousRoute() {
      let previous = "/";

      switch (this.$route.name) {
        case "selectYourPlan":
          previous = "/";
          break;
        case "pickAddOns":
          previous = "/plan";
          break;
        case "finishingUp":
          previous = "/addons";
          break;
      }

      return previous;
    },
    errorInPersonalInfo() {
      return this.$store.getters.error;
    },
  },
  methods: {
    goSentWithSuccess() {
      localStorage.setItem("buttonClicked", "true");
      this.$router.push({ name: "sentWithSuccess" });
    },
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  background-color: var(--c0);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer.two-itens {
  justify-content: space-between;
}
.footer-btn-primary {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background-color: var(--c12);
  color: var(--c1);
  text-decoration: none;
  padding: 12px 22px;
  text-align: center;
  border-radius: 7px;
  transition: opacity 0.4s ease-in, background-color 0.3s;
  outline: none;
  border: none;
  cursor: pointer;
}
.footer-btn-primary.disable {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}
.footer-btn-secondary {
  font-size: 14px;
  line-height: 16px;
  color: var(--c6);
  text-decoration: none;
  padding: 12px 0;
}
@media (min-width: 768px) {
  .footer {
    position: initial;
    max-width: 482px;
    margin: 0 auto 16px;
    padding: 0 16px;
  }
  .footer-btn-primary {
    font-size: 16px;
    line-height: 18px;
    padding: 14px 31px 16px;
  }
  .footer-btn-primary:hover {
    background-color: var(--p1);
  }
  .footer-btn-secondary {
    font-size: 16px;
    line-height: 18px;
    padding: 15px 0;
  }
}
</style>
