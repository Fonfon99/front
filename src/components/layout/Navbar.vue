<script>
import Logo from '../UI/Logo.vue';
export default {
  name: "Navbar",
  components: { Logo },
  methods: {
    logOut: function () {
      localStorage.removeItem("token");
    }
  }
};

</script>

<template>
  <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
    <div class="container-fluid ms-2 ">
      <Logo />
      
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item ms-auto">
            <router-link to="/home" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item ms-auto">
            <router-link to="/login" @click="logOut" class="nav-link">Logout</router-link>
          </li>
        </ul>
      
    </div>
  </nav>

</template>
<style scoped >
</style>