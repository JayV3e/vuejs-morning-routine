import Vue from "vue";
import Router from "vue-router";
import Weather from "@/components/Weather";
import AvailableTasks from "@/components/AvailableTasks";
import RunTasks from "@/components/RunTasks";
import Main from "@/components/Main";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Main",
      name: "Main",
      component: Main
    },
    {
      path: "/Weather",
      name: "Weather",
      component: Weather
    },
    {
      path: "/AvailableTasks",
      name: "AvailableTasks",
      component: AvailableTasks
    },
    {
      path: "/RunTasks",
      name: "RunTasks",
      component: RunTasks,
      props: true
    }
  ]
});
