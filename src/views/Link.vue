<template>
  <div>
      <Header/>
      <div style="height:500px;">
        <div v-html="content"></div>
        <p>dsadsad</p>
      </div>  
      this is Link
  </div>
</template>

<script>
import Header from '@/components/hearder'

export default {
    name:'Link',
    components:{Header},
    data(){
      return {
        content:'<h1>666</h1>'
      }
    }
}
</script>

<style>

</style>