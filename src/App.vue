<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0%;
  padding: 0%;
}
span,li,.textedit,.centertitlt{
  user-select: none;
}
body{
  --navlight:rgba(255,255,255,0.8)
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
</style>
