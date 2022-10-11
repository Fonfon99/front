<script>
import LoginPage from './pages/LoginPage.vue';; 
import Navbar from './components/layout/Navbar.vue'; 
import HomePage from './pages/Home/HomePage.vue'; 
import PostForm from './pages/Home/PostForm.vue';
import Comment from './components/Comment.vue';
import Logo from './components/UI/Logo.vue';
  export default {
    name: "App",
    components: {
    LoginPage,
    Navbar,
    HomePage,
    PostForm,
    Comment,
    Logo,
    
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
