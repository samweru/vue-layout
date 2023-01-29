import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import Install from "./components/Install.vue";
import Charts from "./components/Charts.vue";
import ChartsSublink from "./components/ChartsSublink.vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import { createPinia } from "pinia";

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Installation",
      component: Install,
    },
    {
      path: "/charts",
      name: "Charts",
      component: Charts,
    },
    // {
    //   path: '/charts/sublink',
    //   name: 'Charts Sublinks',
    //   component: ChartsSublink
    // }
  ],
});

const pinia = createPinia();
createApp(App).use(router).use(VueSidebarMenu).use(pinia).mount("#app");
