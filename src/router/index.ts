import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Set from "@/views/Set.vue";
import Edit from "@/views/Edit.vue";
import Create from "@/views/Create.vue";
import Search from "@/views/Search.vue";
import User from '@/views/User.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/set/:id",
    name: "set",
    component: Set,
  },
  {
    path: "/set/:id/edit",
    name: "edit",
    component: Edit,
  },
  {
    path: "/set/create",
    name: "create",
    component: Create,
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
