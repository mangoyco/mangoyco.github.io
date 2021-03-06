import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directive/vloading'
import globalc from '@/components/globalcpnts'
// import './assets/style/sass.scss'


Vue.config.productionTip = false


Vue.use(globalc)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
