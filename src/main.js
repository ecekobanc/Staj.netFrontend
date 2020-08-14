import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

import Login from './components/Login.vue';
import User from './components/User.vue';

const router = new VueRouter({
    routes: [
      { path: '/login', component: Login},
      { path: '/user/:username', component: User }
    ],
    mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
