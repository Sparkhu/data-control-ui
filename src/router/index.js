import Vue from "vue";
import VueRouter from "vue-router";
import DataControl from "../views/DataControl.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "DataControl",
      path: "/",
      component: DataControl,
    },
  ],
});

export default router;
