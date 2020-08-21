import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import api from './api';

Vue.config.productionTip = false

Vue.use(VueRouter);

import Login from './components/Login.vue';
import User from './components/User.vue';

const router = new VueRouter({
    routes: [
      { path: '/login', component: Login,
          beforeEnter: async function(to, from, next){
            try{
              let res = await api.getUsers();
              if(res.status === 200){
                next("/");
              }
              else{
                next();
              }
            }
            catch(error){
              next();
            }
          }
      },
      { 
        path: '/user/:username', component: User, 
          beforeEnter: async function(to, from, next){
            try{
              let res = await api.getUser(to.params.username);
              if(res.status === 200){
                next();
              }
              else{
                next("/login");
              }
            }
            catch(error){
              next("/login");
            }
          }  
      }
    ],
    mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
