import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreatePost from "../views/CreatePost.vue";
import Profile from "../views/Profile.vue";
import PostDetail from "../views/PostDetail.vue";
import EditPost from "../views/EditPost.vue";
const isAuthenticated = () => {
  return localStorage.getItem("currentUser") !== null;
};


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
   {
    path: "/edit-post/:id",
    name: "EditPost",
    component: EditPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard for authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
