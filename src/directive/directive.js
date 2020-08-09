import Vue from 'vue'

Vue.directive('loading', {

    inserted: function (el,binding) {
        console.log(binding,'by dic')
        el.focus()
    },
    update(el,binding){
        console.log(binding)
    }
})