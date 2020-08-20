<template>
  <div class="hello" style="position:relative">
    <div class="downcontainer">

      <div style="padding-bottom:50px">
        <Card :size="['100%','240px']" :index="index" v-for="(item,index) in cards" :key="index" :info="item"/>
      </div>
      <div class="right_warp">
        <div class="author">
          <a href="https://github.com/mangoyco" class="github-corner" aria-label="View source on GitHub">
            <svg width="60" height="60"
              viewBox="0 0 250 250" style="fill:#49b1f5; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
              aria-hidden="true">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
              <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor" class="octo-body"></path>
            </svg>
          </a>
          <div class="top">
            <img src="../assets/bg-sea3.jpg" alt="">
            <div class="top_text">
              <p>Love Yourself</p>
              <p :title="'努力不一定有钱，\n但不努力一定没事干'">努力不一定有钱，但不努力一定没事干</p>
            </div>
          </div>
          <div class="rest">
            <div class="row tips">
              <div class="flex-1 gh" >
                  <i class="iconfont">
                    <a target="blank" href="https://github.com/mangoyco">
                    &#xe691;
                    </a>
                  </i>
              </div>
              <div class="flex-1 wx" >
                <i class="iconfont">&#xe623;</i>
              </div>
              <div class="flex-1 tq">
                  <Wsvg style="width:30px;height:30px;padding-top:3px;" :type="wType.type"/>
              </div>
            </div>
            <div class="row tips_text">
              <div class="flex-1">
                <a target="blank" href="https://github.com/mangoyco">
                  github
                </a>
              </div>
              <div class="flex-1">wechat</div>
              <div v-cloak class="flex-1">{{wText + warmrange}}</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Card from '@/components/card'
import Wsvg from '@/components/svg/wsvg'
import { cardList }  from '../utils/dataShort'

export default {
  name: 'HelloWorld',
  components:{Card,Wsvg},
  filters:{
    temp(val){
      return val + '&#176;'
    }
  },
  computed:{
    wText(){
      return this.wType.t ? this.wType.t : ''
    }
  },
  data () {
    return {
      cards:cardList,
      wType:{},
      warmrange:'',
    }
  },
  created(){
    console.log(process.env)
    this.$store.dispatch('setS').then(()=>{
      this.getW()
    })
  },
  mounted(){
    this.$nextTick(()=>{
      window.scrollTo(0,localStorage.getItem('homeTop'))
      // document.documentElement.scrollTop = localStorage.getItem('homeTop')
    })
  },
  methods:{
    getW(){
      let $s = this.$store
      let localAddress = window.localAddress
      $s.dispatch('getW',localAddress).then(()=>{
        this.wType = $s.getters.getWtype
        this.warmrange = $s.getters.warmrange + '°'
      })
    },
  },
  beforeRouteLeave(to, from, next){
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem('homeTop',top)
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.downcontainer{
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 2.8fr 1fr;
  gap: 50px;
  .right_warp{
    .author{
      height: 320px;
      border: 1px solid #eeeeee;
      border-radius: 2%;
      position: sticky;
      top: 20px;
      background-color: #fff;
      .top{
        background: #fff;
        img{
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: inline-block;
          vertical-align: top;
        }
        .top_text{
          box-sizing: border-box;
          height: 48px;
          width: calc(100% - 50px);
          padding-left: 8px;
          line-height: 24px;
          font-size: 14px;
          display: inline-block;
          p:first-child{
            color: #212121;
          }
          p:last-child{
            font-size: 12px;
            color: #999;
          }
        }
        width: 100%;
        height: 30%;
        box-sizing: border-box;
        padding: 20px 15px 0;
        border-bottom: 1px solid #dbdbdb;
        // background-color: #eeeeee;
      }
    }
    .links{
      border: 1px solid #eeeeee;
      border-radius: 2%;
      height: calc(100vh - 360px);
      position: sticky;
      top: 350px;
      background-color: #fff;
    }
  }
  
}
.rest{
  background-image: url('/static/img/cat.jpg');
  // background-size: 25% 65%;
  // background-size: 60% 90%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right bottom;
  position: absolute;
  top:30%;
  bottom: 0;
  width: 100%;
  .warmrange{
    vertical-align: top;
    height: 30px;
    line-height: 33px;
  }
  .tips{
    padding: 20px 10% 0;
    .gh,.wx,.tq{
      text-align: center;
      box-sizing: border-box;
      font-size: 0;
      span{
        display: inline-block;
      }
      height: 30px;
      .iconfont{
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #666;
      }
    }
  }
  .tips_text{
    div{
      height: 14px;
    }
    text-align: center;
    padding: 5px 10% 0;
    font-size: 8px;
    color: #666;
    line-height: 14px;
  }
  a{
    color: currentColor;
  }
}
</style>
