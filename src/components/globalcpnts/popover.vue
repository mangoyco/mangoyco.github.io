<template>
  <span class="pop_container">
    <div ref="popover" class="pop_popover" :class="{'hidden':hid,'show_anim':popShow,'hide_anim':!popShow}">
      <slot>

      </slot>
    </div>
    <slot name="reference"></slot>
  </span>
</template>

<script>
export default {
  name:'popover',
  props:{
    trigger:{
      type: String,
      default:'click',
      validator(val){
        return ['click', 'hover'].indexOf(val) !== -1
      }
    }
  },
  watch:{
    trigger(n,o){
      this.popShow = false
      this.removeListener()
      this.setListener()
    }
  },
  data(){
    return{
      hid:false,
      popShow:false,
      reference:undefined,
    }
  },
  mounted(){
    this.setPosition()
    this.setListener()
  },
  methods:{
    setPosition(){
      const getCS = window.getComputedStyle
      const popdom = this.$refs.popover
      this.reference = this.$slots.reference[0].elm
      let rw = parseInt(getCS(this.reference).width) / 2
      let pw = parseInt(getCS(popdom).width) / 2
      this.hid = true
      // popdom.classList.add('hidden')
      // this.popShow = false
      popdom.style.transform = `translate(-${pw - rw}px,calc(-100% - 2px))`
    },
    showTrigger(){
      this.hid = false
      this.popShow = !this.popShow
    },
    setListener(){
      const popdom = this.$refs.popover
      if(this.trigger === 'click'){
        this.reference.addEventListener('click',this.showTrigger)
      }else if(this.trigger === 'hover'){
        this.reference.addEventListener('mouseenter',this.showTrigger)
        this.reference.addEventListener('mouseleave',this.showTrigger)
      }
      if(popdom.style.animation !== undefined){
        popdom.addEventListener('animationend',()=>{
          if(!this.popShow){
            this.hid = true
          }
        })
      }
    },
    removeListener(){
      this.reference.removeEventListener('click',this.showTrigger)
      this.reference.removeEventListener('mouseenter',this.showTrigger)
      this.reference.removeEventListener('mouseleave',this.showTrigger)
    }
  },
  beforeDestroy(){
    this.removeListener()
  }
}
</script>

<style lang="scss" scoped>
.pop_container{
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  .pop_popover{
    padding-bottom: 1px;
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 100;
    top: -6px;
    transform: translateY(-100%);
    &.hidden{
      // visibility: hidden;
      display: none;
    }
    &.show_anim{
      animation: pop_show .8s ease forwards ;
    }
    &.hide_anim{
      animation: pop_hide .8s ease forwards ;
    }
    &::before{
      content: '';
      position: absolute;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 5px solid #eee;
      border-bottom: 5px solid transparent;
      top:100%;
      left: 50%;
      transform: translateX(-50%);
    }
    &::after{
      content: '';
      position: absolute;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 5px solid #fff;
      border-bottom: 5px solid transparent;
      top:calc(100% - 1px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}




@keyframes pop_show {
  from{
    margin-top: 16px;
    opacity: 0;
  };
  to{
    opacity: 1;
    margin-top: 0px;
  }
}

@keyframes pop_hide {
  from{
    margin-top: 0px;
    opacity: 1;
  };
  to{
    margin-top: 16px;
    opacity: 0;
  }
}
</style>
