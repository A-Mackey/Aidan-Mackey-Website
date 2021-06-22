import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from 'vue-router';
import '@mdi/font/css/materialdesignicons.css'

//Pages
import Index from './components/Index.vue';
import Projects from './components/Projects.vue';

const routes = [
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "*", redicrect: "/" },
];

Vue.config.productionTip = false

Vue.use(vueRouter);

const router = new vueRouter({
  base: "",
  routes,
  //mode: "history",
  //linkActiveClass: "active",
  //linkExactActiveClass: "exact-active",
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
