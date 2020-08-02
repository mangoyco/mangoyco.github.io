<template>
    <div @click="toBlog" class="cardwarp" :style="{width:size[0],height:size[1],}">
        <div class="img_warp">
            <img src="http://fp1.fghrsh.net/2019/07/19/c64e928e1c03f1eaaabea5a1d761cb09.jpg" alt="">
        </div>
        <!-- <img :style="index%2==0 ? '': 'right:0;'" src="http://fp1.fghrsh.net/2019/07/19/c64e928e1c03f1eaaabea5a1d761cb09.jpg" alt=""> -->
        <div class="text_warp">
            <span>this is title 试试字体</span>
            <span class="text_label">range-范围单位</span>
            <div class="desc">
                balabalabalabalabalabalabalabalabalabalabalabala
                ala在重新注册自行车自行车自行车注册自行车自行车自行车注册自行车自行车自行车注册自行车自行车
            </div>
            <div class="footer">
                <div class="icons">

                </div>
                <span class="date">
                    2020-12-12
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'card',
    props:{
        size:Array,
        index:Number
    },
    methods:{
        toBlog(){
            this.$router.push('/blog/2019')
        }
    }
}
</script>
<style lang="scss" scoped>
.cardwarp{
    cursor: pointer;
    position: relative;
    .img_warp{
        height: 100%;
        width: 50%;
        position: absolute;
        overflow: hidden;
    }
    img{
        height: 100%;
        width: 100%;
        position: absolute;
        transition: all .8s;
        &:hover{
            // transition: ;
            transform: scale(1.1);
        }
    }
    .text_warp{
        :first-child{
            font-size: 17px;
            color: #333;
        }
        .desc{
            text-indent: 2em;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 80%;
            word-break: break-all;
        }
        .text_label{
            display: block;
            padding: 5px 0;
            margin-bottom: 12px;
            font-size: 14px;
            color: #bbb;
            font-family: "PingFang SC", "Lantinghei SC", "Microsoft YaHei", "HanHei SC", "Helvetica Neue", "Open Sans", Arial, "Hiragino Sans GB", '微软雅黑', 'STHeiti', "WenQuanYi Micro Hei", 'SimSun', sans-serif;
        }
        .footer{
            width: calc(100% - 30px);
            height: 16%;
            border-top: 1px solid #eee;
            // background-color: red;
            position: absolute;
            display: flex;
            bottom: 10px;
            // justify-content: center;
            align-content: center;
            align-items: center;
            .date{
                font-size: 12px;
                position: absolute;
                right: 0;
                padding-right: 20px;
            }
        }
        color: #666;
        font-family: "Microsoft Yahei", 微软雅黑, Arial, "Hiragino Sans GB", 宋体;
        padding: 20px 15px;
        box-sizing: border-box;
        // background-color: #f40;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 50%;
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


