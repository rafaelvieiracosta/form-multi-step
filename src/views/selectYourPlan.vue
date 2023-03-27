<template>
  <section id="selectYourPlan" class="section">
    <h1 class="section-title">Selecione o seu plano</h1>
    <p class="section-description">
      Você tem a opção de cobrança mensal ou anual.
    </p>

    <form class="section-form">
      <label
        v-for="item in this.plans"
        :key="item.name"
        :for="item.name"
        class="section-form-item"
        :class="{ active: plan.name === item.name }"
      >
        <img
          :src="require(`@/assets/images/icon-${item.name}.svg`)"
          :alt="item.alt"
          width="40"
          height="40"
          class="section-form-item-icon"
        />

        <div class="section-form-item-text">
          <h2 class="section-form-item-text-name">{{ item.name }}</h2>

          <transition name="simple" mode="out-in">
            <p v-if="period" key="anualy" class="section-form-item-text-price">
              {{ item.price.yearly | formattedPrice }}/ano
              <span>2 meses grátis</span>
            </p>

            <p v-else key="monthly" class="section-form-item-text-price">
              {{ item.price.monthly | formattedPrice }}/mês
            </p>
          </transition>
        </div>

        <input
          name="plan"
          :id="item.name"
          type="radio"
          :value="item"
          v-model="plan"
          class="section-form-item-input"
        />
      </label>
    </form>

    <div class="section-period" @click="period = !period">
      <p class="section-period-name" :class="{ selected: !period }">Mensal</p>

      <label for="period" class="section-period-label">
        <input
          id="period"
          name="period"
          type="checkbox"
          v-model="period"
          class="section-period-label-input"
        />
        <span class="section-period-label-slider"></span>
      </label>

      <p class="section-period-name" :class="{ selected: period }">Anual</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "selectYourPlan",
  data() {
    return {
      plans: [
        {
          name: "arcade",
          alt: "Controle de um video game com alavanca",
          price: {
            monthly: 9,
            yearly: 90,
          },
        },
        {
          name: "advanced",
          alt: "Controle de um video game com setas",
          price: {
            monthly: 12,
            yearly: 120,
          },
        },
        {
          name: "pro",
          alt: "Controle de um video game com setas e analógicos",
          price: {
            monthly: 15,
            yearly: 150,
          },
        },
      ],
      plan: {
        name: "arcade",
        alt: "Controle de um video game com alavanca",
        price: {
          monthly: 9,
          yearly: 90,
        },
      },
      period: false,
    };
  },
  computed: {
    periodSelected() {
      return this.period ? "yearly" : "monthly";
    },
  },
  watch: {
    period() {
      this.checkPlan();
    },
    plan() {
      this.checkPlan();
    },
  },
  methods: {
    checkPlan() {
      this.$store.commit("SET_PLAN", {
        ...this.plan,
        periodSelected: this.periodSelected,
      });
    },
  },
};
</script>

<style scoped>
.section-form {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.section-form-item-input {
  display: none;
}
@media (min-width: 768px) {
  .section-form {
    margin-top: 40px;
    flex-direction: row;
    gap: 18px;
  }
}

/* FORM: ITEMS */
.section-form-item {
  flex: 1;
  padding: 17px 16px 20px;
  border: 1px solid var(--c3);
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  gap: 14px;
}
.section-form-item:hover {
  border-color: var(--p1);
}
.section-form-item.active {
  border-color: var(--p1);
  background-color: var(--s1);
}
@media (min-width: 768px) {
  .section-form-item {
    display: block;
    padding: 20px 16px 17px;
  }
}

/* FORM: ITEMS TEXTS */
.section-form-item-text-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-transform: capitalize;
  color: var(--c11);
}
.section-form-item-text-price {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
  font-size: 14px;
  line-height: 16px;
  color: var(--c7);
}
.section-form-item-text-price span {
  color: var(--p3);
  font-size: 12px;
}
@media (min-width: 768px) {
  .section-form-item-text {
    margin-top: 43px;
  }
}

/* PERIOD TOGGLE INPUT */
.section-period {
  margin-top: 32px;
  background-color: var(--c1);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.section-period-name {
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.035em;
  padding: 15px;
  cursor: pointer;
  color: var(--c6);
  transition: 0.4s;
}
.section-period-name.selected {
  color: var(--c12);
}
.section-period-label-input {
  display: none;
}
.section-period-label {
  pointer-events: none;
  width: 38px;
  height: 20px;
}
.section-period-label-slider {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background-color: var(--c12);
  transition: 0.4s;
  cursor: pointer;
}
.section-period-label-slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  border-radius: 32px;
  background-color: var(--c1);
  transition: 0.4s;
}

.section-period-label-input:checked + .section-period-label-slider:before {
  left: 22px;
}
</style>
