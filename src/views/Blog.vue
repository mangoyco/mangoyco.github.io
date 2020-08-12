<template>
  <div class="blog_router" >
      <div v-show="directShow" class="direct">
          <div v-show="div">

          <h3>123</h3>
          <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
          </ul>
          </div>
      </div>
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
            directShow:false,
            div:false
        }
    },
    created(){
        // this.loading = true
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
                    this.directShow = true
                    // this.$nextTick(()=>{
                    //     this.div = true
                    // })
                    setTimeout(()=>{
                        this.div = true
                    },500)
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('/static/source/md.css');
.blog_router{
    padding: 30px 20% 50px;
    .blog{
        width: 100%;
        min-height: 200px;
        border-radius: 8px;
        border: 1px solid #eee;
        padding: 20px 30px;
        background-color: #fff;
        box-sizing: border-box;
    }
    .direct{
        transition: all .5s;
        position: fixed;
        right: 0;
        top: 80px;
        min-height: 100px;
        width: 19%;
        // border: 1px solid black;
        ul{
            li{
                position: relative;
            }
            li::before{
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                border-left: 1px solid #dbdbdb;
            }
        }
    }
}
</style>