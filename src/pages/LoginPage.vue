<script>
import Navbar from '../components/layout/Navbar.vue';

const methods = {
  LogIn: function () {
    console.log(this.email, this.password);
    const url = import.meta.env.VITE_LOGIN_URL
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then((res) => {
        console.log("res", (res));
        const token = res.token;
        localStorage.setItem("token", token);
        this.$router.push("/home");
      })
      .catch((err) => {
        console.error((err));
      });
  },
  SignUp: function () {
    console.log(this.email, this.password);
    const url = import.meta.env.VITE_SIGNUP_URL
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then((res) => {
        console.log("res", (res));
        this.$router.go();
      })
      .catch((err) => {
        console.error((err));
      });
},
};
export default {
  name: "LoginPage",
  data,
  methods,
  components: { Navbar }
};
function data() {
  return {
    email: '',
    password: '',
    confirmPassword: ''
  }
}
</script>
<template>
  <Navbar />
  <div class="text-center">
    <div class="card mt-5 w-50 m-auto " style="height: 50%">
      <!-- Pills navs -->
      <nav class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <div class="nav-item" role="presentation">
          <button class="nav-link active" id="tab-login" data-bs-toggle="pill" data-bs-target="#pills-login" type="button"
            role="tab" aria-controls="pills-login" aria-selected="true">Login</button>
        </div>
        <div class="nav-item" role="presentation">
          <button class="nav-link" id="tab-register" data-bs-toggle="pill" data-bs-target="#pills-register"
            role="tab" aria-controls="pills-register" aria-selected="false">Register</button>
        </div>
      </nav>
      <!-- Pills navs -->

      <!-- Pills content -->
      <div class="tab-content">
        <div class="tab-pane fade show active" id="pills-login " role="tabpanel" aria-labelledby="tab-login">
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="loginName" class="form-control" placeholder="example@example.com"
                v-model="email" />
              <label class="form-label" for="loginName">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="loginPassword" class="form-control" v-model="password" />
              <label class="form-label" for="loginPassword">Password</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="LogIn">Sign In</button>
          </form>
        </div>
        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            <!-- email input -->
            <div class="form-outline mb-4">
              <input type="text" id="registeremail" class="form-control" v-model="email"/>
              <label class="form-label" for="registeremail">email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="registerPassword" class="form-control" v-model="password"/>
              <label class="form-label" for="registerPassword">Password</label>
            </div>

            <!-- Repeat Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="registerRepeatPassword" class="form-control" v-model="confirmPassword"/>
              <label class="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-3" @click.prevent="SignUp">Sign up</button>
          </form>
        </div>
      </div>
      <!-- Pills content -->
    </div>
  </div>
  <p class="text-muted">Value: {{email}}</p>
  <p class="text-muted">Value: {{password}}</p>
</template>
<style module>
body {
  background-color: #cbcbcb9e;
  padding: 0 !important;
}

@media screen {
  .card {
    width: 50%;
    margin: 0 auto;
    justify-content: center
  }

}
</style>