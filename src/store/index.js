import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$axios = axios


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:undefined
  },
  getters: {
    warmrange(state) {
      let t = state.weather.forecast[0]
      return `${t.low.substr(3)}~${t.high.substr(3)}`.replace(/℃/g,'')
    },
    getWtype(state) {
      const arr = ['%u9634', '%u96F7', '%u96E8', '%u6674', '%u4E91', '%u98CE', '%u96EA', ]
      let t = state.weather.forecast[0].type
      let type = arr.find(e => t.indexOf(unescape(e)) !== -1)
      return {
        type,
        t
      }
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
    },
    setS() {
      return new Promise(res => {
        var w = document.createElement('script')
        w.src = '//ip.ws.126.net/ipquery?ie=utf-8'
        document.head.append(w)
        w.onload = ()=> {
          res()
        }
      })
    }
  },
  modules: {
  }
})
