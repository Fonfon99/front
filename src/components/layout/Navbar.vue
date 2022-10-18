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
  <nav class="navbar navbar-expand navbar-dark bg-dark">
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
      <!-- </div> -->
    </div>
  </nav>

</template>
<style module >
body {
  min-height: 75rem;
  padding-top: 4.5rem;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>