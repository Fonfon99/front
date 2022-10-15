<script>
import Navbar from '../components/layout/Navbar.vue';

const methods = {
  validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) {
      this.errorMessage = '';
    } else{
      this.errorMessage = 'Invalid email';
    }
  },
  switchModeToLogin() {
    this.mode = 'login';
  },
  switchModeToRegister() {
    this.mode = 'register';
  },
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
  watch: {
    email(email){
      this.validateEmail(this.email);
    }
  },
  components: { Navbar }
};
function data() {
  return {
    email: '',
    password: '',
    confirmPassword: '',
    mode: 'login',
    errorMessage: "",
  }
}
</script>
<template>
  <Navbar />
  <div class="text-center">
    <div class="card border-0 mt-5 w-50 m-auto">
      <!-- Pills navs -->
      <nav class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <div class="nav-item" role="presentation">
          <button class="nav-link active" id="tab-login" data-bs-toggle="pill" data-bs-target="#pills-login" type="button"
            role="tab" aria-controls="pills-login" aria-selected="true" @click="switchModeToLogin()">Login</button>
        </div>
        <div class="nav-item" role="presentation">
          <button class="nav-link" id="tab-register" data-bs-toggle="pill" data-bs-target="#pills-register"
            role="tab" aria-controls="pills-register" aria-selected="false" @click="switchModeToRegister()">Register</button>
        </div>
      </nav>
      <!-- Pills navs -->

      <!-- Pills content -->
      <div class="tab-content">
        <div class="tab-pane fade active show" id="pills-login " role="tabpanel" aria-labelledby="tab-login">
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <p class="text-danger">{{errorMessage}}</p>
              <input type="email" id="loginName" class="form-control w-75 mx-auto bg-light" placeholder="example@example.com"
                v-model="email" required/>
                <label class="form-label" for="loginName">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="loginPassword" class="form-control w-75 mx-auto bg-light" v-model="password" />
              <label class="form-label" for="loginPassword">Password</label>
            </div>

            <!-- Repeat Password input -->
            <div class="form-outline mb-4" v-if="mode == 'register'">
              <input type="password" id="registerRepeatPassword" class="form-control w-75 mx-auto bg-light" v-model="confirmPassword"/>
              <label class="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>

            <div v-if="mode == 'login'">Don't have an account ? <span class="card_action" @click.prevent="switchModeToRegister()">Register here</span></div>
            <div v-else>Already have an account ? <span @click.prevent="switchModeToLogin()">Log in here</span></div>

            <!-- Submit button -->
            <button :disabled="errorMessage !== ''" type="submit" class="btn btn-primary btn-block my-3" v-if="mode == 'login'" @click.prevent="LogIn">Sign In</button>
            <button :disabled="errorMessage !== ''" type="submit" class="btn btn-primary btn-block my-3" v-if="mode == 'register'" @click.prevent="SignUp">Sign up</button>
          </form>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style module>

body {
  min-height: auto ;
  padding: 0 !important;
  background-color:  #bcbdc2 !important;
}

span {
  cursor: pointer;
  color: blue;
 
}

span:hover {
  color: rgba(0, 0, 255, 0.659);
  text-decoration: none;
  
}
@media screen {
  .card {
    width: 50%;
    margin: 0 auto;
    justify-content: center
  }

}
</style>