<template>
  <div class="blog_warp" v-html="doms">
      
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    data(){
        return {
            doms:''
        }
    },
    created(){
        fetch('/test.md').then(res=>{
            // res.text().then(t=>{
            //     console.log(t)
            // })
            return res.text()
        }).then(t=>{
            this.doms = window.marked(t)
        })
    },
    mounted(){
        // console.log(this.$route)
    }
}
</script>

<style scoped>
.blog_warp{
    padding: 15px 200px;
}
</style>