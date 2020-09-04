const effects = new Map()
let currentEffect = null

function reactive(obj) {
  return new Proxy(obj, {
    get(obj, prop, proxy) {
      // debugger
      if (!effects.has(obj)) {
        effects.set(obj, new Map())
      }
      if (!effects.get(obj).has(prop)) {
        effects.get(obj).set(prop, [])
      }
      effects.get(obj).get(prop).push(currentEffect)
      return obj[prop]
    },
    set(obj, prop, val, proxy) {
      console.log(effects)
      obj[prop] = val
      if (effects.has(obj) && effects.get(obj).has(prop)) {
        effects.get(obj).get(prop).forEach(fn => {
          fn()
        });
      }
      return true
    }
  })
}

export function effect(fn) {
  currentEffect = fn
  fn()
  currentEffect = null
}

export default reactive