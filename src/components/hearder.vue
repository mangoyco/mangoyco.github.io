<template>
    <div class="headcontain" :style="{height:(headerH ? headerH : '100vh') }">
       <div :class="['white-nav',{'opc-nav':navBgc,'isfixed':navfixed,'fixtop':fixtop}]">
         <span :style="navBgc ? 'color:#eee' : ''" class="nav-name">WangYC</span>

           <ul class="ullist">
             <router-link to="/" tag="li"><span class="iconfont">&#xe65a;</span>Home</router-link>
             <router-link to="/link" tag="li"><span class="iconfont">&#xe868;</span>Link</router-link>
             <!-- <li><span class="iconfont">&#xe647;</span>About</li>
             <li><span class="iconfont">&#xe612;</span>YC&M</li> -->
           </ul>

       </div>
       <div class="centertitlt">Welcome</div>
       <div v-show="!headerH" class="textedit">{{text}}|</div>
    </div>
</template>
<script>

export default {
  props:['headerH'],
  watch:{
    headerH(val){
      if(val){
        window.clearInterval(this.timer)
        this.text = ''
      }else{
        this.inputtext()
      }
    }
  },
  data(){
    return{
      text:'',
      words:"Happiness by adding those sad there the elements.",
      secwords:"Don't be sad, just think it's just a dream.",
      navBgc:true,
      lastTop:0,
      navfixed:false,
      fixtop:false,
      timer:null,
      wordkey:true
    }
  },
  mounted(){
    this.inputtext()
    window.addEventListener('scroll',this.scroll)
  },
  methods: {
    inputtext(){
      setTimeout(()=>{
        if(this.headerH !== null)return
        let num = 0
        let wordarr
        if(this.wordkey){
          wordarr = Array.from(this.words)
        }else{
          wordarr = Array.from(this.secwords)
        }
        this.timer = window.setInterval(()=>{
          if(num <= wordarr.length -1){
            this.text += wordarr[num]
            num++
          }else{
            window.clearInterval(this.timer)
            this.deltext()
          }
          // console.log(num)
        },200)
      },800)
    },
    deltext(){
      setTimeout(()=>{
        if(this.headerH !== null)return
        this.timer = window.setInterval(()=>{
          if(this.text.length == 0){
            clearInterval(this.timer)
            this.wordkey = !this.wordkey
            this.inputtext()
          }else{
            this.text = this.text.substring(0,this.text.length - 1)
          }
          // console.log('执行ing')
        },100)
      },3000)
    },
    scroll(e){
      if(this.headerH !== null)return
      let scrollTop = document.documentElement.scrollTop
      if(scrollTop - this.lastTop > 0){
        // 向下滚动
        if(this.navfixed && !this.navBgc){
          this.fixtop = true
        }
        this.navfixed = false
      }else{
        this.fixtop = false
        this.navBgc = false
        this.navfixed = true
      }
      this.lastTop = scrollTop
      if(document.documentElement.scrollTop == 0){
        this.navBgc = true
      }
      // var scrollTop = document.body.scrollTop;
      // console.log(document.documentElement.scrollTop)
    }
  },
}
</script>
<style lang="scss" scoped>
.headcontain{
  // transition: height .3s;
  font-family:'Titillium Web', Lato, PingFang SC, Hiragino Sans GB, "Microsoft JhengHei", "Microsoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
  .white-nav{
    z-index: 100;
    position: absolute;
    top: 0%;
    .nav-name{
      color: #3b3a3a;
      font-size: 18px;
      font-weight: 700;
      margin-left: 25px;
      line-height: 55px;
    }
    box-shadow: 0 5px 6px -5px rgba(133,133,133,0.6);
    transition: background-color 0.8s;
    width: 100%;
    height: 60px;
    background-color: var(--navlight);
    // opacity: 0.8;
    // background-color: rgba($color: #fff, $alpha: 0.8);
  }
  .white-nav.fixtop{
    position: fixed;
    top:-60px;
    animation: up 0.5s ease;
  }
  .white-nav.isfixed{
    position: fixed;
    top: 0%;
    animation: top 0.5s ease;
  }
  .white-nav.opc-nav li:hover{
    span{
      color:skyblue;
    }
    color:skyblue;
  }
  .white-nav.opc-nav{
    box-shadow: none;
    li,span{
      color: #eee;
    }
    background-color: rgba($color: #fff, $alpha: 0);
  }
  background-image: url('../assets/bg-sea3.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position-x: 50%;
  background-position-y: center;
  background-size: 100%;
  width: 100%;
  height:100vh;
  position: relative;
  // box-sizing: border-box;
  // display: flex;
  // justify-content: center;
  // align-self: center;
  // align-items: center;
  // align-content: center;
  .centertitlt{
    padding-top: 30vh;
    // position: absolute;
    // top: 28%;
    width: 95%;
    text-align: center;
    font-size: 32px;
    color: #eee;
    font-weight: 700;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,0.15);
    // margin: 0 auto;
  }
  .textedit{
    width: 95%;
    // position: absolute;
    // top: 38%;
    text-align: center;
    font-size: 24px;
    color: #eee;
    // margin: 0 auto;
  }
  // .btntogg{
  //   cursor: pointer;
  //   margin-left: 18px;
  //   width: 58px;
  //   height: 40px;;
  // }
    // width: 80%;
    // margin: 0% auto;
    // height: 80px;
}

.ullist{
  height: 100%;
  padding-right: 30px;
  li{
    transition: color 0.4s;
    position: relative;
    cursor: pointer;
    span{
      transition: color 0.4s;
      color:#3b3a3a;
      margin-right: 5px;
    }
    display: inline-block;
    margin-right: 15px;
  }
  display: flex;
  list-style: none;
  align-items: center;
  color:#3b3a3a;
  position: absolute;
  top: 0%;
  right: 0%;
}
li::before{
  content: '';
  position: absolute;
  bottom:-6px;
  width: 0;
  height: 3px;
  background:skyblue;
  transition: width 0.3s ease-in;
}
li:hover::before{
  // content: '';
  width:100%;
}


@keyframes up{
  from{top:0px}
  to{top:-60px}
}
@keyframes top{
  from{top: -60px}
  to{top:0}
}


@media screen and (max-width: 1000px) {
  .headcontain{
    background-size: 100% 100%;
  }
}
</style>

