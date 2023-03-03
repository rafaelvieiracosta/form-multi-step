<template>
  <div id="app">
    <main class="main">
      <header>
        <nav>
          <ul class="navigation">
            <li class="navigation-item">
              <router-link to="/" class="navigation-item-link">
                <div class="navigation-item-link-number">1</div>
                <div class="navigation-item-link-text">
                  <span class="navigation-item-link-text-step">1ª ETAPA</span>
                  <p class="navigation-item-link-text-name">Suas informações</p>
                </div>
              </router-link>
            </li>

            <li class="navigation-item">
              <router-link to="/plan" class="navigation-item-link">
                <div class="navigation-item-link-number">2</div>
                <div class="navigation-item-link-text">
                  <span class="navigation-item-link-text-step">2ª ETAPA</span>
                  <p class="navigation-item-link-text-name">
                    Selecione o plano
                  </p>
                </div>
              </router-link>
            </li>

            <li class="navigation-item">
              <router-link to="/addons" class="navigation-item-link">
                <div class="navigation-item-link-number">3</div>
                <div class="navigation-item-link-text">
                  <span class="navigation-item-link-text-step">3ª ETAPA</span>
                  <p class="navigation-item-link-text-name">Complementos</p>
                </div>
              </router-link>
            </li>

            <li class="navigation-item">
              <router-link to="/summary" class="navigation-item-link">
                <div class="navigation-item-link-number">4</div>
                <div class="navigation-item-link-text">
                  <span class="navigation-item-link-text-step">4ª ETAPA</span>
                  <p class="navigation-item-link-text-name">Resumo</p>
                </div>
              </router-link>
            </li>
          </ul>
        </nav>
      </header>

      <router-view />

      <footer></footer>
    </main>
  </div>
</template>

<style>
@import url("../src/assets/css/style.css");

#app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--c2);
}
.main {
  display: grid;
  grid-template-columns: minmax(180px, 274px) minmax(420px, 1fr);
  column-gap: 16px;
  width: 100%;
  max-width: 940px;
  padding: 16px;
  background-color: var(--c0);
  border-radius: 15px;
}

.navigation {
  height: 568px;
  background-image: url("../src/assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  border-radius: 10px;
  overflow: hidden;
}
</style>
