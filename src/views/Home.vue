<template>
  <div class="hello">
    <div class="downcontainer">

      <div style="padding-bottom:50px">
        <Card :size="['100%','240px']" :index="index" v-for="(item,index) in [1,2,3]" :key="index" />
      </div>
      <div style="height:200px;background:#f40;">
      </div>

    </div>
  </div>
</template>

<script>
// let hh = require('@/utils/export.js')
// import * as Api from '@/api/jsonplace'
import Card from '@/components/card'

export default {
  name: 'HelloWorld',
  components:{Card},
  data () {
    return {
    }
  },
  mounted(){
    // console.log(process.env)
    // hh.name = 'chan'
    // console.log(hh)
    // hh.test()
    Api.testApi().then(res=>{
      console.log(res)
    })
    // axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
    //   console.log(res)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.downcontainer{
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 2.8fr 1fr;
  gap: 30px;
}
</style>
