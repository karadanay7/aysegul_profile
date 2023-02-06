import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeComponent.vue";
import AboutMe from "../components/AboutMe.vue";
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
    path: "/AboutMe",
    name: "AboutMe",
    component: AboutMe,
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
