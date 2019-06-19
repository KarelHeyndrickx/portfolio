<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "app",
  components: {
    HomePage
  },
  title:"Karel Heyndrickx - E-portfolio",
  created(){
     var link = document.createElement('meta');
    link.setAttribute('name', 'viewport');
    link.setAttribute('content','width=device-width, initial-scale=1.0')
    link.content = document.location;
    document.getElementsByTagName('head')[0].appendChild(link);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700");
#app {
  font-family: "Montserrat", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  overflow-y: hidden;
}
</style>
