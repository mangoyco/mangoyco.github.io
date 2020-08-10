import Vue from 'vue'

// var mask;
var creatMask = (function () { 
    var mask;
    return function (el, bol) {
        if (bol) {
            if (!mask) {
                mask = document.createElement('div')
                mask.classList.add('load_mask')
                mask.innerHTML = '<div class="mask_modal"></div>'
                mask.innerHTML += `<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#1296db">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                            </path>
                        </g>
                    </g>
                </svg>`
            }
            window.getComputedStyle(el).position === 'static' ? el.classList.add('mask_parent') : ''
            el.appendChild(mask)
            el.appended = true
        } else {
            if (el.appended) {
                el.removeChild(mask)
                el.classList.remove('mask_parent')
                delete el.appended
            }
        }
    }
}())

Vue.directive('loading', {

    bind: function (el, binding) {
        if (!binding.value) {
            return
        }
        creatMask(el, binding.value)
    },
    update(el, binding) {
        Vue.prototype.$nextTick(() => {
            creatMask(el, binding.value)
        })
        // creatMask(el, binding.value)
    }
})