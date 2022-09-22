<script>
import LoginVue from './components/Login.vue'; 
import Navbar from './components/Navbar.vue'; 
import Home from './components/Home.vue';
  export default {
    name: "App",
    components: {
    LoginVue,
    Navbar,
    Home,
}
  }
</script>

<template>
  <router-view></router-view>
</template>

  
<style lang="scss">
  $primary-color: #FD2D01;
  $secondary-color: #FFD7D7;
  $tertiary-color: #4E5166;
  
</style>
