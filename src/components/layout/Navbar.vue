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
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid ms-2">
      <Logo />
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <form class="d-flex ms-3">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-secondary" type="submit" fill="#FFD7D7">Search</button>
        </form>
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item ms-3">
            <router-link to="/home" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item dropdown ms-auto">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Admin</a>
            <div class="dropdown-menu dropdown-menu-end">
              <div class="dropdown-divider"></div>
              <router-link to="/login" @click="logOut" class="dropdown-item">Logout</router-link>
            </div>
          </li>
        </ul>
      </div>

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