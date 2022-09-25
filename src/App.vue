<script>
import LoginPage from './pages/LoginPage.vue';; 
import Navbar from './components/layout/Navbar.vue'; 
import HomePage from './pages/Home/HomePage.vue'; 
  export default {
    name: "App",
    components: {
    LoginPage,
    Navbar,
    HomePage,
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
