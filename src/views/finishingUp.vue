<template>
  <section id="pickAddOns" class="section">
    <h1 class="section-title">Finalizando</h1>
    <p class="section-description">
      Verifique se tudo está OK antes de confirmar.
    </p>

    <div class="section-resume">
      <div class="section-resume-plan">
        <div class="section-resume-plan-name">
          <h2>{{ planData.name }} ({{ planData.periodSelected }})</h2>
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

      <div class="section-resume-addons">
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
  },
};
</script>

<style scoped>
.section-resume {
  margin-top: 32px;
  background-color: var(--c1);
  border-radius: 7px;
  padding: 20px 24px;
}
</style>
