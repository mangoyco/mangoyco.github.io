import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$axios = axios


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:undefined
  },
  getters:{
    getWtype(state){
      return state.weather.forecast[0].type
    }
  },
  mutations: {
    setW(state,val) {
      state.weather = val
    }
  },
  actions: {
    getW({ commit }, q) {
      return new Promise(reslove => {
        let c = encodeURI(q.city)
        Vue.prototype.$axios.get(`//wthrcdn.etouch.cn/weather_mini?city=${c}`).then(res => {
          commit('setW', res.data.data)
          reslove()
        })
      })
    }
  },
  modules: {
  }
})
