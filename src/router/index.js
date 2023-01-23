// eslint-disable-next-line quotes
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cursos from "@/views/Cursos.vue";
import Aula from "@/views/Aula.vue";
import Contato from "@/views/Contato.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  {
    path: "/curso/:curso",
    name: "curso",
    component: Aula,
  },
  {
    path: "/curso/:curso/:aula",
    name: "aula",
    component: Aula,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
