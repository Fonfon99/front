<script>
  import LoginVue from './components/Login.vue'; 
  
import Navbar from './components/Navbar.vue'; 
  export default {
    name: "App",
    components: {
    LoginVue,
    Navbar
}
  }
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

  
<style lang="scss">
  $primary-color: #FD2D01;
  $secondary-color: #FFD7D7;
  $tertiary-color: #4E5166;
  
</style>
