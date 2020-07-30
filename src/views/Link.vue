<template>
  <div>
      <div style="height:500px;">
        <div v-html="content"></div>
        <p>dsadsad</p>
      </div>  
      this is Link
  </div>
</template>

<script>

export default {
    name:'Link',
    components:{},
    data(){
      return {
        content:'<h1>666</h1>'
      }
    }
}
</script>

<style>

</style>