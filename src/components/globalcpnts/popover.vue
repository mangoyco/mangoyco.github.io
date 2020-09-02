<template>
  <div class="pop_container">
    <slot>
      
    </slot>
    <slot name="reference"></slot>
  </div>
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
}
</style>
