<template>
  <section id="pickAddOns" class="section">
    <h1 class="section-title">Escolha os complementos</h1>
    <p class="section-description">
      Os complementos ajudam a aprimorar sua experiência.
    </p>

    <form class="section-form">
      <label
        for="onlineService"
        class="section-form-item"
        :class="{ active: addOns.includes('onlineService') }"
      >
        <input
          type="checkbox"
          name="addOns"
          id="onlineService"
          value="onlineService"
          v-model="addOns"
          class="section-form-item-input"
        />

        <div class="section-form-item-checkbox">
          <img
            src="@/assets/images/icon-checkmark.svg"
            alt="Ícone de verificado/certo"
          />
        </div>

        <div class="section-form-item-text">
          <p class="section-form-item-text-name">Serviço online</p>
          <span class="section-form-item-text-description">
            Acesso a jogos multiplayer
          </span>
        </div>

        <p v-if="isYearly" class="section-form-item-price">+R$ 10,00/ano</p>
        <p v-else class="section-form-item-price">+R$ 1,00/mês</p>
      </label>

      <label
        for="largerStorage"
        class="section-form-item"
        :class="{ active: addOns.includes('largerStorage') }"
      >
        <input
          type="checkbox"
          name="addOns"
          id="largerStorage"
          value="largerStorage"
          v-model="addOns"
          class="section-form-item-input"
        />

        <div class="section-form-item-checkbox">
          <img
            src="@/assets/images/icon-checkmark.svg"
            alt="Ícone de verificado/certo"
          />
        </div>

        <div class="section-form-item-text">
          <p class="section-form-item-text-name">Armazenamento maior</p>
          <span class="section-form-item-text-description">
            1TB extra de armazenamento
          </span>
        </div>

        <p v-if="isYearly" class="section-form-item-price">+R$ 20,00/ano</p>
        <p v-else class="section-form-item-price">+R$ 2,00/mês</p>
      </label>

      <label
        for="customizableProfile"
        class="section-form-item"
        :class="{ active: addOns.includes('customizableProfile') }"
      >
        <input
          type="checkbox"
          name="addOns"
          id="customizableProfile"
          value="customizableProfile"
          v-model="addOns"
          class="section-form-item-input"
        />

        <div class="section-form-item-checkbox">
          <img
            src="@/assets/images/icon-checkmark.svg"
            alt="Ícone de verificado/certo"
          />
        </div>

        <div class="section-form-item-text">
          <p class="section-form-item-text-name">Perfil personalizável</p>
          <span class="section-form-item-text-description">
            Tema personalizado em seu perfil
          </span>
        </div>

        <p v-if="isYearly" class="section-form-item-price">+R$ 20,00/ano</p>
        <p v-else class="section-form-item-price">+R$ 2,00/mês</p>
      </label>
    </form>
  </section>
</template>

<script>
export default {
  name: "pickAddOns",
  data() {
    return {
      addOns: [],
    };
  },
  computed: {
    isYearly() {
      return this.$store.state.selectYourPlan.plan.periodSelected === "yearly";
    },
  },
};
</script>

<style scoped>
.section-form {
  margin-top: 40px;
}
.section-form-item-input {
  display: none;
}

/* ITEMS */
.section-form-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
  border: 1px solid var(--c3);
  border-radius: 7px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.section-form-item:hover {
  border-color: var(--p1);
}
.section-form-item.active {
  border-color: var(--p1);
  background-color: var(--s1);
}
.section-form-item + .section-form-item {
  margin-top: 16px;
}

/* ITEMS: CHECKBOX CUSTOM */
.section-form-item-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid var(--c3);
  border-radius: 3px;
  transition: 0.3s ease-in-out;
}
.section-form-item-checkbox > img {
  visibility: hidden;
  transition: 0.3s ease-in-out;
}
.active .section-form-item-checkbox {
  border-color: var(--p1);
  background-color: var(--p1);
}
.active .section-form-item-checkbox > img {
  visibility: initial;
}

/* ITEMS: ALL TEXTS */
.section-form-item-text {
  flex: 1;
}
.section-form-item-text-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: var(--c11);
}
.section-form-item-text-description {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  color: var(--c7);
}
.section-form-item-price {
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.03em;
  color: var(--p3);
}
</style>
