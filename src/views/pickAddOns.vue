<template>
  <section id="pickAddOns" class="section">
    <h1 class="section-title">Escolha os complementos</h1>
    <p class="section-description">
      Os complementos ajudam a aprimorar sua experiência.
    </p>

    <form class="section-form">
      <label
        v-for="item in addOns"
        :for="item.id"
        :key="item.id"
        class="section-form-item"
        :class="{ active: selectedAddOns.includes(item) }"
      >
        <input
          type="checkbox"
          name="addOns"
          :id="item.id"
          :value="item"
          v-model="selectedAddOns"
          class="section-form-item-input"
        />

        <div class="section-form-item-checkbox">
          <img
            src="@/assets/images/icon-checkmark.svg"
            alt="Ícone de verificado/certo"
          />
        </div>

        <div class="section-form-item-text">
          <p class="section-form-item-text-name">{{ item.name }}</p>
          <span class="section-form-item-text-description">
            {{ item.description }}
          </span>
        </div>

        <p v-if="isYearly" class="section-form-item-price">
          +{{ item.price.yearly | formattedPrice }}<br />/ano
        </p>
        <p v-else class="section-form-item-price">
          +{{ item.price.monthly | formattedPrice }}<br />/mês
        </p>
      </label>
    </form>
  </section>
</template>

<script>
export default {
  name: "pickAddOns",
  data() {
    return {
      addOns: [
        {
          id: "onlineService",
          name: "Serviço online",
          description: "Acesso a jogos multiplayer",
          price: {
            monthly: 1,
            yearly: 10,
          },
        },
        {
          id: "largerStorage",
          name: "Armazenamento maior",
          description: "1TB extra de armazenamento",
          price: {
            monthly: 2,
            yearly: 20,
          },
        },
        {
          id: "customizableProfile",
          name: "Perfil personalizável",
          description: "Tema personalizado em seu perfil",
          price: {
            monthly: 2,
            yearly: 20,
          },
        },
      ],
      selectedAddOns: [],
    };
  },
  computed: {
    isYearly() {
      return this.$store.state.selectYourPlan.plan.periodSelected === "yearly";
    },
  },
  watch: {
    isYearly() {
      this.checkAddOns();
    },
    selectedAddOns() {
      this.checkAddOns();
    },
  },
  methods: {
    checkAddOns() {
      this.$store.commit("SET_ADDONS", this.selectedAddOns);
    },
  },
};
</script>

<style scoped>
.section-form {
  margin-top: 24px;
}
.section-form-item-input {
  display: none;
}
@media (min-width: 768px) {
  .section-form {
    margin-top: 40px;
  }
}

/* ITEMS */
.section-form-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
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
  margin-top: 12px;
}
@media (min-width: 768px) {
  .section-form-item {
    padding: 20px 24px;
    gap: 24px;
  }
  .section-form-item + .section-form-item {
    margin-top: 16px;
  }
}

/* ITEMS: CHECKBOX CUSTOM */
.section-form-item-checkbox {
  flex-shrink: 0;
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
  font-size: 14px;
  line-height: 16px;
  color: var(--c11);
}
.section-form-item-text-description {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--c7);
}
.section-form-item-price {
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.03em;
  color: var(--p3);
  text-align: right;
}
.section-form-item-price br {
  display: none;
}
@media (min-width: 768px) {
  .section-form-item-text-name {
    font-size: 16px;
    line-height: 18px;
  }
  .section-form-item-text-description {
    margin-top: 6px;
    font-size: 14px;
  }
  .section-form-item-price {
    font-size: 15px;
    line-height: 17px;
  }
}
@media (max-width: 430px) {
  .section-form-item-price br {
    display: block;
  }
}
</style>
