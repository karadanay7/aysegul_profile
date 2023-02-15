import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeComponent.vue";
import AysegulKaradan from "../components/AysegulKaradan.vue";
import Projects from "../components/ProjectsComponent.vue";
import Blog from "../components/BlogComponent.vue";
import 'animate.css'





const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AysegulKaradan",
    name: "AysegulKaradan",
    component: AysegulKaradan,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
