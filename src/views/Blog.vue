<template>
  <div class="blog_router" >
      
      <div v-loading="loading" id="blog_warp" ref="blog" class="blog typo markdown-body" v-html="doms">

      </div>
      <div class="direct">
          <h3>{{mdTitle}}</h3>
          <ul>
              <li @click="articalHash(h)" :class="{active:aIndex === index}" :title="h.innerText" v-for="(h,index) in catalogs" :key="index">{{h.innerText}}</li>
          </ul>
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
            mdTitle:null,
            catalogs:[],
            aIndex:0,
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
        window.debug = ()=>{
            console.log(this.catalogs)
        }
        // for scroll
        // this.$route.meta.y = window.innerHeight - 60
    },
    methods:{
        appendMarked(){
            this.loading = true
            if(!window.hasOwnProperty('marked')){
                let reg = /\/$/
                var script = document.createElement('script')
                script.id = 'marked'
                script.src = process.env.BASE_URL.replace(reg,'') + '/static/source/marked.min.js'
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
                if(this.$route.name !== 'Blog')return
                this.doms = window.marked(res.data)
                this.$nextTick(()=>{
                    window.scrollTo(0,0)
                    this.loading = false
                    this.initCatalog()
                })
            })
        },
        initCatalog(){
            let d = document.getElementsByTagName('h1')
            this.mdTitle = (d[0] && d[0].innerText) || ''
            this.catalogs = Array.from(this.$refs.blog.querySelectorAll('h2,h3'))
            document.addEventListener('scroll',this.blogScroll)
        },
        blogScroll(e){
            let r = this.catalogs.findIndex(e=>{
                return e.getBoundingClientRect().top > 24
            })
            let active = r === 0 ? 0 : (r - 1)
            this.aIndex = active
            // console.log(r)
        },
        articalHash(h){
            if(h.scrollIntoView){
                h.scrollIntoView({
                    behavior: "smooth", 
                    block: "start"
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('~@style/md.css');
// @import url('/static/source/md.css');

.blog_router{
    display: grid;
    grid-template-columns: 1fr 2.2fr 1fr;
    gap: 50px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 0 50px;
    .blog{
        grid-column-start: 2;
        width: 100%;
        min-height: 200px;
        border-radius: 8px;
        border: 1px solid #eee;
        padding: 20px 30px;
        background-color: #fff;
        box-sizing: border-box;
    }
    .direct{
        position: fixed;
        opacity: 0;
        animation: opcity 0.5s ease 1s 1;
        animation-fill-mode: forwards;
        right: 0;
        top: 80px;
        min-height: 100px;
        width: 20%;
        ul{
            li.active{
                color: #1976d2;
                &::after{
                    content: '';
                    position: absolute;
                    top:calc(50% - 4px);
                    background-color: #1976d2 !important;
                    left: -3px;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                }
            }
            li{
                font-size: 0.5rem;
                position: relative;
                padding: 4px 8px;
                box-sizing: border-box;
                &:first-child::before{
                    top:45%;
                }
                &:last-child::before{
                    bottom: 55%;
                }
                &:hover{
                    color: #1976d2;
                    &::after{
                        content: '';
                        position: absolute;
                        top:calc(50% - 4px);
                        background-color: #1976d2;
                        left: -3px;
                        width: 7px;
                        height: 7px;
                        background-color: #dbdbdb;
                        border-radius: 50%;
                    }
                }
            }
            li::before{
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-left: 1px solid #dbdbdb;
            }
        }
    }
}

@keyframes opcity {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
</style>