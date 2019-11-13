import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import jQuery from 'jquery';
import Admin from './components/Admin.vue';
import Login from './components/Login.vue';
import EditCompany from './components/EditCompany.vue';
import EditUser from './components/EditUser.vue';
import AddCompany from './components/AddCompany.vue';
import AddUser from './components/AddUser.vue';
import Home from './components/Home.vue';
import User from './components/Users.vue';
import bankEvent from './components/bankEvent.vue';
import movieEvent from './components/movieEvent.vue';
import schoolEvent from './components/schoolEvent.vue';
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
  {path: '/admin', component: Admin},
  {path: '/add/company', component: AddCompany},
  {path: '/add/user', component: AddUser},
  {path: '/user', component: User},
  {path: '/edit/company/:id', component: EditCompany},
  {path: '/edit/user/:id', component: EditUser},
  {path: '/bankEvent', component: bankEvent},
  {path: '/movieEvent', component: movieEvent},
  {path: '/schoolevent', component: schoolEvent}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/'];
  const dispatcherPages = (['/admin', '/add/company','/bankEvent','/movieEvent','/schoolEvent'].includes(to.path));
  console.log(to.path, dispatcherPages);
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if(authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    });
  }else if(!dispatcherPages && window.localStorage.getItem('role') === "dispatcher"){
    return next({
      path: '/admin'
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
