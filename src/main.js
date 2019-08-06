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
      'en': {
        msg: {
          success_message: 'You have been successfully registered!',
          invalid_message: 'Something went wrong.Please,try again!',
          null_message: 'Empty field!',
          type_message: 'Only lettres!',
          email_message:'Incorrect Email',
          length_message1:'Enter ',
          length_message2:' symbol!',
          password_message: 'Password don\'t match!',
          accept_message: 'You mast accept terms and conditions!',
          thank_message: 'Thank you!'
        },
        title: 'Sign Up',
        header1: 'Full name',
        header2: 'Username',
        header3: 'Email',
        header4: 'Password',
        header5: 'Password Confirmation',
        accept1: 'I accept',
        accept2: ' Terms amd Condition',
        users:'Users',
        reg:'Registered',
        Reg:'Registered users',
        placeholder1:'Name...',
        placeholder2:'Username...',
        placeholder3:'Email address...'

      },
      'ru': {
        msg: {
          success_message: 'Регистрация прошла успешно!',
          invalid_message: 'Что-то пошло не так.Пожайлуста,повторите!',
          null_message: 'Пустое поле!',
          type_message: 'Только буквы!',
          email_message:'Некорректный Email!',
          length_message1:'Введите ',
          length_message2:' символов!',
          password_message: 'Пароли не совпадают!',
          accept_message: 'Вы должны принять соглашение!',
          thank_message: 'Спасибо!'
        },
        title: 'Регистрация',
        header1: 'Ф.И.О',
        header2: 'Логин',
        header3: 'Email',
        header4: 'Пароль',
        header5: 'Подтверждение пароля',
        accept1: 'Я принимаю',
        accept2: ' условия и положения',
        users:'Пользователи',
        reg:'Регистрация',
        Reg:'Зарегистрированные пользователи',
        placeholder1:'Имя...',
        placeholder2:'Логин...',
        placeholder3:'Адрес почты...'
      }
    }
})
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')


