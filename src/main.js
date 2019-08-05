import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

import Router from 'vue-router'
import users from './components/Users.vue'
import registration from './components/Form.vue'
Vue.use(Router)
import store from './store'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path:'/',
      name:'registration',
      component:registration
    }
  ]
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


