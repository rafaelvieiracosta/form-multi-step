<template>
  <section id="sentWithSuccess" class="section">
    <div class="section-countdown">
      <svg class="section-coutdown-svg">
        <circle
          class="section-coutdown-svg-circle"
          r="42"
          cx="45"
          cy="45"
        ></circle>
      </svg>

      <img
        src="@/assets/images/icon-thank-you.svg"
        alt="Círculo cinza com um ícone de verificado no meio"
        width="80"
        height="80"
        class="section-image"
      />
    </div>

    <div class="section-text">
      <h1 class="section-text-title">Obrigado!</h1>
      <p class="section-text-description">
        Obrigado por confirmar sua inscrição! Esperamos que você se divirta
        usando nossa plataforma. Se você precisar de suporte, sinta-se à vontade
        para nos enviar um e-mail em support@loremgaming.com.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "personalInfo" });
      localStorage.setItem("buttonClicked", "false");
      location.reload();
    }, 10000);
  },
};
</script>

<style scoped>
.section {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* VERIFIED PICTURE AND COUNTDOWN */
.section-countdown {
  position: relative;
  height: 90px;
  width: 90px;
}
.section-coutdown-svg {
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  height: 90px;
  transform: rotateY(-180deg) rotateZ(-90deg);
}
.section-coutdown-svg-circle {
  stroke-dasharray: 264px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 5px;
  stroke: var(--c4);
  fill: none;
  animation: countdown 10s linear infinite forwards;
}
.section-image {
  position: absolute;
  top: 5px;
  left: 5px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
}
@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 264px;
  }
}

/* TITLE AND DESCRIPTION */
.section-text {
  margin-top: 32px;
}
.section-text-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: var(--c12);
}
.section-text-description {
  margin-top: 15px;
  font-size: 16px;
  line-height: 25px;
  color: var(--c6);
}
</style>
