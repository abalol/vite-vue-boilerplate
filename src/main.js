import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";  // 追記

createApp(App).use(router).mount("#app");  // use(router)を追記
