<template>
    <div class="cardwarp" :style="{width:size[0],height:size[1],}">
        <img :style="index%2==0 ? '': 'right:0;'" src="http://fp1.fghrsh.net/2019/07/19/c64e928e1c03f1eaaabea5a1d761cb09.jpg" alt="">
    </div>
</template>
<script>
export default {
    name:'card',
    props:{
        size:Array,
        index:Number
    }
}
</script>
<style lang="scss" scoped>
 .cardwarp{
     position: relative;
     img{
        height: 100%;
        width: 50%;
        position: absolute;
     }
    border-radius: 8px;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
    background-color: #fff;
    transition: box-shadow 0.5s;
    overflow: hidden;
    margin-bottom: 25px;
 }
 .cardwarp:hover{
        box-shadow: 0 4px 12px 12px rgba(7,17,27,0.15);
    }
</style>


