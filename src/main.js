import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import {router} from "./routes/router.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import { faImage,faLink,faUser,faTimes,faThumbsUp as fasThumbsUp,faPencil} from '@fortawesome/free-solid-svg-icons'
import {faCommentDots,faThumbsUp as farThumbsUp} from '@fortawesome/free-regular-svg-icons'
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


library.add(faImage,faLink,faUser,faCommentDots,farThumbsUp,fasThumbsUp,faTimes,faPencil);

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)
app.mount("#app");
