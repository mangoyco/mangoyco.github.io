<template>
  <div class="blog_router" >
      <!-- <div style="width:auto;background-color:red;height:200px">

      </div> -->
      <div v-loading="loading" id="blog_warp" ref="blog" class="blog typo markdown-body" v-html="doms">

      </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    data(){
        return {
            doms:'',
            loading:false,
        }
    },
    created(){
        this.appendMarked()
        window.debug = ()=>{
            this.loading = !this.loading
        }
    },
    mounted(){
        // for scroll
        // this.$route.meta.y = window.innerHeight - 60
    },
    methods:{
        appendMarked(){
            this.loading = true
            if(!window.hasOwnProperty('marked')){
                var script = document.createElement('script')
                script.id = 'marked'
                script.src = '/static/source/marked.min.js'
                script.onload = ()=>{
                    this.initMd()
                }
                document.body.append(script)
            }else{
                this.initMd()
            }
        },
        initMd(){
            let u = `//mangoyco.github.io/docs/${this.$route.params.pathMatch}.md`
            this.$axios.get(u).then(res=>{
                this.doms = window.marked(res.data)
                this.$nextTick(()=>{
                    window.scrollTo(0,0)
                    this.loading = false
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('/static/source/md.css');
.blog_router{
    padding: 35px 20% 50px;
    .blog{
        width: 100%;
        min-height: 200px;
        border-radius: 3%;
        padding: 0 30px;
        background-color: #fff;
    }
}
</style>