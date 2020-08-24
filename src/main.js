import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directive/vloading'
import './assets/style/sass.scss'
// import axios from 'axios'
console.log(process.env)

Vue.config.productionTip = false

// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
