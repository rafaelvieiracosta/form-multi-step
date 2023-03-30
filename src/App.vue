<template>
  <div id="app">
    <main class="main">
      <Header />

      <transition name="slider" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>

      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/DefaultHeader.vue";
import Footer from "@/components/DefaultFooter.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("../src/assets/css/style.css");

#app {
  background-color: var(--c2);
}
.main {
  background-image: url("../src/assets/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
@media (min-width: 768px) {
  #app {
    display: flex;
    justify-content: center;
    padding: 105px 20px;
  }
  .main {
    display: grid;
    grid-template-columns: minmax(249px, 274px) minmax(420px, 1fr);
    grid-template-rows: auto 64px;
    column-gap: 16px;
    width: 100%;
    max-width: 940px;
    max-height: 600px;
    padding: 16px;
    background-color: var(--c0);
    background-image: none;
    border-radius: 15px;
  }
}
</style>
