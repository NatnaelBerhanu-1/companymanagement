import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import jQuery from 'jquery';
import Admin from './components/Admin.vue';
import Login from './components/Login.vue';
import EditCompany from './components/EditCompany.vue';
import Dispatcher from './components/Dispatcher.vue';
import Add from './components/Add.vue';
import Home from './components/Home.vue';
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
window.$ = window.jQuery = jQuery;

fontawesome.library.add(brands, solid)

Vue.component('font-awesome-icon', FontAwesomeIcon);

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/dispatcher', component: Dispatcher},
  {path: '/admin', component: Admin},
  {path: '/add', component: Add},
  {path: '/edit/:id', component: EditCompany}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if(authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    });
  }

  next();
}
)


Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
