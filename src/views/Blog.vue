<template>
  <div class="blog_router" >
      <div class="blog typo markdown-body" v-html="doms">

      </div>
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
        if(!window.hasOwnProperty('marked')){
            var script = document.createElement('script')
            script.id = 'marked'
            script.src = '/static/marked.min.js'
            script.onload = ()=>{
                this.initMd()
            }
            document.body.append(script)
        }else{
            this.initMd()
        }
    },
    mounted(){
        // console.log(this.$route)
    },
    methods:{
        initMd(){
            fetch('/test.md').then(res=>{
                // res.text().then(t=>{
                //     console.log(t)
                // })
                return res.text()
            }).then(t=>{
                this.doms = window.marked(t)
            })
        }
    }
}
</script>

<style scoped>
@import url('/static/md.css');
.blog_router{
    padding: 15px 230px;
}
</style>