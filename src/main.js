// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import api from './request/index'
import '../src/assets/global.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$axios = axios // 挂载在vue的原型链上使用
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
