import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FlagIcon from 'vue-flag-icon';
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(FlagIcon)

import Router from 'vue-router'
import VueI18n from 'vue-i18n';

import users from './components/Users.vue'
import registration from './components/Form.vue'
import english from './i18n/english'
import russian from './i18n/russian'

Vue.use(Router)
Vue.use(VueI18n)

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
});
const i18n = new VueI18n({
  locale: 'en',
  messages:{
      'en': english,
      'ru': russian
    }
})
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')


