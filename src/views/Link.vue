<template>
  <div>
      <div style="height:500px;">
        <div v-html="content"></div>
      </div>
  </div>
</template>

<script>

export default {
    name:'Link',
    components:{},
    data(){
      return {
        content:'<h1>Watiing for coding</h1>'
      }
    },
}
</script>

<style>

</style>