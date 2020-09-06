<template>
  <span class="pop_container">
    <div ref="popover" class="pop_popover">
      <slot>

      </slot>
    </div>
    <slot name="reference"></slot>
  </span>
</template>

<script>
export default {
  name:'popover',
  mounted(){
    this.setPosition()
  },
  methods:{
    setPosition(){
      const getCS = window.getComputedStyle
      const popdom = this.$refs.popover
      let rw = parseInt(getCS(this.$slots.reference[0].elm).width) / 2
      let pw = parseInt(getCS(popdom).width) / 2
      console.log(`translateX(-${pw - rw})`)
      popdom.style.transform = `translate(-${pw - rw}px,calc(-100% - 2px))`
    }
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
      // background-color: #000;
      top:calc(100% - 1px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
