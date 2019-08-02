import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

import users from './Users.vue'
//import registration from './App.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: users
    }
    /*{
      path:'/',
      name:'registration',
      component:registration
    }*/
  ]
})


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')


