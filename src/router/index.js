import * as vueRouter from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;
