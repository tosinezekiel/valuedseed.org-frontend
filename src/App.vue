<template>
  <div id="app">
    <HomeNav/>
      <router-view />
    <Footer/>
  </div>
</template>

<script>
import HomeNav from "./components/HomeNav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    HomeNav, Footer
  },
  watch:{
    '$route' (to){
      document.title = to.meta.title + '  || ValuedSeed Official Site'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>