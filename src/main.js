import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import { createRouter, createWebHistory } from "vue-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import { faImage,faLink,faUser} from '@fortawesome/free-solid-svg-icons'
import {faCommentDots,faThumbsUp} from '@fortawesome/free-regular-svg-icons'

library.add(faImage,faLink,faUser,faCommentDots,faThumbsUp)

import App from "./App.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


const routes = [
  { path: "/login", component: Login },
  { path: "/home", component: Home},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)
app.mount("#app");
