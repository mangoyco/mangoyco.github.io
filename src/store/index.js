import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$axios = axios


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:{}
  },
  getters: {
    warmrange(state) {
      let t = state.weather.forecast[0]
      return `${t.tmp_min}~${t.tmp_max}°`
    },
    getWtype(state) {
      let n = new Date().getHours()
      let str = (n >= 5 && n <= 18) ? 'd' : 'n'
      const arr = ['%u9634', '%u96F7', '%u96E8', '%u6674', '%u4E91', '%u98CE', '%u96EA', ]
      let t = state.weather.forecast[0][`tqw_txt_${str}`]
      let type = arr.find(e => t.indexOf(unescape(e)) !== -1)
      return {
        type,
        t
      }
    }
  },
  mutations: {
    setW(state,val) {
      state.weather.forecast = val
    }
  },
  actions: {
    getW({ commit }, q) {
      if (process.env.NODE_ENV === 'development') {
        let mock = [{
          tmp_max: "28",
          tmp_min: "24",
          tqw_code_d: "07",
          tqw_code_n: "08",
          tqw_txt_d: "小雨",
          tqw_txt_n: "中雨",
        }]
        commit('setW', mock)
        return Promise.resolve()
      }
      let $axios = Vue.prototype.$axios
      return new Promise((reslove,reject) => {
        let c = encodeURI(q.city)
        $axios.get(`https://search.heweather.net/find?key=bdd98ec1d87747f3a2e8b1741a5af796&location=${c}group=overseas,cn&lang=zh`)
          .then(res => {
            let cid = res.data.HeWeather6[0].basic[0].cid.slice(2)
            return $axios.get(`https://apip.weatherdt.com/plugin/data?key=zpvy9iot7T&lang=zh&location=${cid}`)
          })
          .then(data => {
            commit('setW', data.data.forecast.forecast)
            reslove()
          })
          .catch(err => {
            console.log(err)
            reject(err)
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
    },
    log({ commit },obj) {
      Vue.prototype.$axios.post(process.env.VUE_APP_BASEAPI, obj, {
        headers: {
            "Content-type": "application/json;charset=utf-8",
            'tok':'qwers'
          }
        }).then(res => {
        console.log(res)
      })
    }
  },
  modules: {
  }
})
