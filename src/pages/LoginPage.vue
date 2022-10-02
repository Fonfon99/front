<script>
import Navbar from '../components/layout/Navbar.vue';
const methods = {
  checkIdentifiers: function (event) {
    console.log(this.username, this.password);
    console.log(import.meta.env);
    const url = import.meta.env.VITE_LOGIN_URL 

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password
      })
    })
      .then((response) => response.json())
      // {
      //   console.log(response);

      //   // if (response.ok) return response.json();
      //   // throw new Error(response.statusText);
      //   })
      .then((res) => {
        console.log("res", (res));
        const token = res.token;
        localStorage.setItem("token", token);
        // if (data.status === 'success') {
        //   this.$router.push('/home');
        // } else {
        //   this.error = data.message;
        // }
      })
      .catch((err) => {
        console.error((err));
      });


    if (this.username !== "louis@louis.com") throw new Error("Invalid username");
    if (this.password !== "123456") throw new Error("Invalid password");
    this.$router.push("/home");
    // if (this.username === 'admin' && this.password === 'admin') {
    //   this.$router.push('/admin');
    // } else if (this.username === 'user' && this.password === 'user') {
    //   this.$router.push('/user');
    // } else {
    //   this.$router.push('/login');
    // }
  },
}
    export default {
    name: "LoginPage",
    data,
    methods,
    components: { Navbar }
};
function data() {
  return {
    username: '',
    password: '',
  }
}
</script>
<template>
  <Navbar/>
  <div class="text-center">
  <div class="card mt-5 w-50 m-auto " style="height: 50%">
  <!-- Pills navs -->
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>
<!-- Pills navs -->

<!-- Pills content -->
<div class="tab-content">
  <div class="tab-pane fade show active " id="pills-login " role="tabpanel" aria-labelledby="tab-login">
    <form>
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control" placeholder="example@example.com" v-model="username"/>
        <label class="form-label" for="loginName">Email or username</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" v-model="password"/>
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="checkIdentifiers">Sign in</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      <!-- Name input -->
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

      <!-- Username input -->
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      <!-- Repeat Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>
<!-- Pills content -->
</div>
</div>
<p class="text-muted">Value: {{username}}</p>
<p class="text-muted">Value: {{password}}</p>
</template>
<style module>
  body {
    background-color: #cbcbcb9e;
    padding: 0 !important;
  }
    
    @media screen  {
      .card{
        width: 50%;
        margin: 0 auto;
        justify-content: center
      }
   
  }
</style>