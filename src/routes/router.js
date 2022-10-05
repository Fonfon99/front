import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import HomePage from "../pages/home/HomePage.vue";
const routes = [
  { path: "/login", component: LoginPage },
  { path: "/home", component: HomePage},
  { path: "/", redirect: "/login"},
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from) => {
  const publicPages = ['/login'];
  if (!publicPages.includes(to.path) && !isLoggedIn()) {
    router.push("/login")
  }
});

function isLoggedIn() {
  if (localStorage.getItem("token")) {
    return true;
}}

export {router};