import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from "../store/modules/auth";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      guest: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("middleware");
  if (!store.getters.loggedIn && to.meta.auth) {
    return next({
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    });
  }

  if (store.getters.loggedIn && to.meta.guest) {
    return next({
      name: "welcome",
    });
  }

  next();
});

export default router;
