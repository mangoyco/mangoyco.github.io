<template>
  <span class="pop_container">
    <div class="pop_popover">
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
    console.log(this.$slots)
  }
}
</script>

<style lang="scss" scoped>
.pop_container{
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  .pop_popover{
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    // padding: 4px 4px;
    box-sizing: border-box;
    z-index: 100;
    top: 0;
    transform: translateY(-100%);
  }
}
</style>
