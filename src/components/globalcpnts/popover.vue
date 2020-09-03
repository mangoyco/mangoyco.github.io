<template>
  <span class="pop_container">
    <span class="popover">
      <slot>

      </slot>
    </span>
    <slot name="reference"></slot>
  </span>
</template>

<script>
export default {
  name:'popover'
}
</script>

<style lang="scss" scoped>
.pop_container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  .popover{
    border: 1px solid #eee;
    background-color: #fff;
    padding: 4px 4px;
    box-sizing: border-box;
    z-index: 100;
    top: 0;
    transform: translateY(-100%) translateZ(10);
  }
}
</style>
