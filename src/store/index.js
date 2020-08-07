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
    getWtype(state) {
      const arr = ['%u9634', '%u96F7', '%u96E8', '%u6674', '%u4E91', '%u98CE', '%u96EA', ]
      let t = state.weather.forecast[0].type
      let type = arr.find(e => t.indexOf(unescape(e)) !== -1)
      return type
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
