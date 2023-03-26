<template>
  <section id="pickAddOns" class="section">
    <h1 class="section-title">Finalizando</h1>
    <p class="section-description">
      Verifique se tudo está OK antes de confirmar.
    </p>

    <div class="section-resume">
      <div class="section-resume-plan">
        <div class="section-resume-plan-name">
          <h2>
            {{ planData.name }} ({{
              planData.periodSelected === "yearly" ? "Anual" : "Mensal"
            }})
          </h2>
          <router-link to="/plan">Mudar</router-link>
        </div>

        <p
          v-if="planData.periodSelected === 'yearly'"
          class="section-resume-plan-price"
        >
          {{ planData.price.yearly | formattedPrice }}/ano
        </p>
        <p v-else class="section-resume-plan-price">
          {{ planData.price.monthly | formattedPrice }}/mês
        </p>
      </div>

      <div
        v-if="this.$store.state.pickAddOns.addOns.length"
        class="section-resume-addons"
      >
        <div
          v-for="item in this.$store.state.pickAddOns.addOns"
          :key="item.id"
          class="section-resume-addons-item"
        >
          <p class="section-resume-addons-item-name">
            {{ item.name }}
          </p>

          <p
            v-if="planData.periodSelected === 'yearly'"
            class="section-resume-addons-item-price"
          >
            +{{ item.price.yearly | formattedPrice }}/ano
          </p>
          <p v-else class="section-resume-addons-item-price">
            +{{ item.price.monthly | formattedPrice }}/mês
          </p>
        </div>
      </div>
    </div>

    <div v-if="planData.periodSelected === 'yearly'" class="section-total">
      <p class="section-total-text">Total (por ano)</p>
      <h3 class="section-total-price">
        +{{ totalPrice | formattedPrice }}/ano
      </h3>
    </div>

    <div v-else class="section-total">
      <p class="section-total-text">Total (por mês)</p>
      <h3 class="section-total-price">
        +{{ totalPrice | formattedPrice }}/mês
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "finishingUp",
  data() {
    return {};
  },
  computed: {
    planData() {
      return this.$store.state.selectYourPlan.plan;
    },
    totalPrice() {
      return (
        this.planData.price[this.planData.periodSelected] +
        this.$store.state.pickAddOns.addOns.reduce((acumulador, valorAtual) => {
          return acumulador + valorAtual.price[this.planData.periodSelected];
        }, 0)
      );
    },
  },
};
</script>

<style scoped>
.section-resume {
  margin-top: 24px;
  background-color: var(--c1);
  border-radius: 7px;
  padding: 20px 16px;
}
@media (min-width: 768px) {
  .section-resume {
    margin-top: 32px;
    padding: 20px 24px;
  }
}

/* NAME AND PRICE OF THE SELECTED PLAN */
.section-resume-plan {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.section-resume-plan-name h2 {
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  color: var(--c12);
}
.section-resume-plan-name a {
  display: inline-block;
  margin-top: 6px;
  font-size: 14px;
  line-height: 16px;
  color: var(--c6);
}
.section-resume-plan-price {
  font-weight: 700;
  font-size: 14px;
  color: var(--c12);
}
@media (min-width: 768px) {
  .section-resume-plan-name h2,
  .section-resume-plan-price {
    font-size: 16px;
  }
}

/* ADDONS BELOW THE PLAN */
.section-resume-addons {
  margin-top: 13px;
  padding-top: 15px;
  border-top: 1px solid var(--c3);
}
.section-resume-addons-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.section-resume-addons-item + .section-resume-addons-item {
  margin-top: 16px;
}
.section-resume-addons-item-name,
.section-resume-addons-item-price {
  font-size: 14px;
  line-height: 16px;
}
.section-resume-addons-item-name {
  color: var(--c6);
}
.section-resume-addons-item-price {
  color: var(--c12);
}
@media (min-width: 768px) {
  .section-resume-addons {
    margin-top: 25px;
    padding-top: 19px;
  }
  .section-resume-addons-item + .section-resume-addons-item {
    margin-top: 20px;
  }
}

/* TOTAL PRICE AT THE END */
.section-total {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 10px;
}
.section-total-text {
  font-size: 14px;
  line-height: 16px;
  color: var(--c6);
}
.section-total-price {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--p1);
}
@media (min-width: 768px) {
  .section-total {
    padding: 0 24px;
  }
  .section-total-price {
    font-size: 20px;
    line-height: 23px;
  }
}
</style>
