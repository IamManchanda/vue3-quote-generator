import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/scss/styles.scss";

const app = createApp(App).use(router);
app.mount("#app");
