import popover from './popover.vue'

const globalCpnt = {
  install: (Vue) => {
    Vue.component(popover.name, popover)
  }
}

export default globalCpnt