<template>
  <div id="app">
    <Header :headerH="headerH"/>
    <transition name="slide-left" mode="out-in">
      <router-view class="_routerView"/>
    </transition>
    <BackTop/>
  </div>
</template>

<script>
import Header from '@/components/hearder'
import BackTop from '@/components/toTop'

export default {
  components:{Header,BackTop},
  data(){
    return{
      headerH:null,
      fullHearer:'Home,'
    }
  },
  beforeCreate(){
  },
  created(){
    this.initH()
    this.setHbyRoute()
  },
  mounted(){
  },
  destroyed(){
  },
  methods:{
    initH(){
      if(!(this.fullHearer.includes(this.$route.name))){
        this.headerH = '60px'
      }
    },
    setHbyRoute(){
      this.$router.beforeEach((to, from, next) => {
        if(to.name === 'Blog'){
          this.headerH = '60px'
        }else{
          this.headerH = null
        }
        next();
      });
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/style.css');
// .fade-enter-active, .fade-leave-avtive {
//     transition: opacity 1s
// }
// .fade-enter, .fade-leave-to {
//     opacity: 0
// }
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
._routerView{
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

// ----- progress style
#nprogress .bar {
  // background: red !important; //自定义颜色
}
.spinner{
  display: none !important;
}
// ----- progress style

*{
  margin: 0%;
  padding: 0%;
  // scroll-behavior: smooth;
}
span,li,.textedit,.centertitlt{
  user-select: none;
}
body{
  --navlight:rgba(255,255,255,0.8);
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
*::-webkit-scrollbar  
{  
    width: 4px;  /*滚动条宽度*/
    height: 10px  /*滚动条高度*/
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
*::-webkit-scrollbar-track  
{  
    /*滚动条的背景区域的内阴影*/
    /* box-shadow:0px 1px 3px rgba(0,0,0,0.3) inset; */

    /*滚动条的背景区域的圆角*/
    /* border-radius: 10px;   */

    /*滚动条的背景颜色*/
    background-color: #fff;
}  
  
/*定义滑块 内阴影+圆角*/  
*::-webkit-scrollbar-thumb  
{  
    /*滚动条的内阴影*/
    /* box-shadow:0px 1px 3px rgba(0,0,0,0.3) inset; */

    /*滚动条的圆角*/
    /* border-radius: 10px;   */

    /*滚动条的背景颜色*/
    background-color: #49b1f5;  
} 
/* *::-webkit-scrollbar-thumb {
  background: #49b1f5;
} */

@font-face {
  font-family: 'iconfont';  /* project id 1339475 */
  src: url('//at.alicdn.com/t/font_1339475_xikc3udckb.eot');
  src: url('//at.alicdn.com/t/font_1339475_xikc3udckb.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1339475_xikc3udckb.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1339475_xikc3udckb.woff') format('woff'),
  url('//at.alicdn.com/t/font_1339475_xikc3udckb.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1339475_xikc3udckb.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// github
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {

  0%,
  100% {
    transform: rotate(0)
  }

  20%,
  60% {
    transform: rotate(-25deg)
  }

  40%,
  80% {
    transform: rotate(10deg)
  }
}

@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}
</style>
