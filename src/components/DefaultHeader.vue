<template>
  <header class="header">
    <nav class="nav">
      <ul
        class="navigation"
        :class="{
          personalInfo: $route.name === 'personalInfo',
          selectYourPlan: $route.name === 'selectYourPlan',
          pickAddOns: $route.name === 'pickAddOns',
          finishingUp: $route.name === 'finishingUp',
        }"
      >
        <li class="navigation-item">
          <router-link to="/" class="navigation-item-link">
            <div class="navigation-item-link-number">1</div>
            <div class="navigation-item-link-text">
              <span class="navigation-item-link-text-step">ETAPA 1</span>
              <p class="navigation-item-link-text-name">Suas informações</p>
            </div>
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link to="/plan" class="navigation-item-link">
            <div class="navigation-item-link-number">2</div>
            <div class="navigation-item-link-text">
              <span class="navigation-item-link-text-step">ETAPA 2</span>
              <p class="navigation-item-link-text-name">Selecione o plano</p>
            </div>
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link to="/addons" class="navigation-item-link">
            <div class="navigation-item-link-number">3</div>
            <div class="navigation-item-link-text">
              <span class="navigation-item-link-text-step">ETAPA 3</span>
              <p class="navigation-item-link-text-name">Complementos</p>
            </div>
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link to="/summary" class="navigation-item-link">
            <div class="navigation-item-link-number">4</div>
            <div class="navigation-item-link-text">
              <span class="navigation-item-link-text-step">ETAPA 4</span>
              <p class="navigation-item-link-text-name">Resumo</p>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  grid-row: span 2;
}
.nav {
  padding: 32px 20px 34px;
}
@media (min-width: 768px) {
  .nav {
    height: 568px;
    background-image: url("../assets/images/bg-sidebar-desktop.svg");
    border-radius: 10px;
    overflow: hidden;
    padding: 40px 32px;
  }
}

/* FULL ITEMS */
.navigation {
  max-width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 16px;
}
.navigation-item-link {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
}
.navigation-item-link-number {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 33px;
  min-height: 33px;
  font-weight: 700;
  font-size: 16px;
  line-height: 7px;
  text-align: center;
  border: 1px solid var(--c1);
  border-radius: 66px;
  color: var(--c1);
  transition: 0.2s;
}
.navigation-item-link.router-link-exact-active .navigation-item-link-number {
  border-color: var(--c6);
  background: var(--c6);
}
.navigation-item-link-text {
  display: none;
}
.navigation-item-link-text-step {
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.05em;
  color: var(--c7);
}
.navigation-item-link-text-name {
  margin-top: 2px;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: var(--c1);
}
@media (min-width: 768px) {
  .navigation {
    display: initial;
  }
  .navigation-item + .navigation-item {
    margin-top: 32px;
  }
  .navigation-item-link-text {
    display: initial;
  }
}
</style>
