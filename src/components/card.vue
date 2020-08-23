<template>
    <div @click="toBlog" class="cardwarp" :style="{width:size[0],height:size[1],}">
        <div class="img_warp">
            <img :src="info.imgurl ? info.imgurl : 'http://fp1.fghrsh.net/2019/07/19/c64e928e1c03f1eaaabea5a1d761cb09.jpg'" :alt="info.title">
        </div>
        <!-- <img :style="index%2==0 ? '': 'right:0;'" src="http://fp1.fghrsh.net/2019/07/19/c64e928e1c03f1eaaabea5a1d761cb09.jpg" alt=""> -->
        <div class="text_warp">
            <span>{{info.title}}</span>
            <span class="text_label">{{info.range}}</span>
            <div class="desc">
                {{info.desc}}
            </div>
            <div class="footer">
                <div class="icons">

                </div>
                <span class="date">
                    <i class="iconfont">&#xe654;</i>
                    {{info.date}}
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
        index:Number,
        info:Object
    },
    methods:{
        toBlog(){
            this.$router.push(`/blog/${this.info.url}`)
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
    }
    .text_warp{
        :first-child{
            font-size: 17px;
            color: #333;
        }
        .desc{
            letter-spacing: 2px;
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
            font-size: 12px;
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
            padding: 6px 0;
            bottom: 0px;
            // justify-content: center;
            align-content: center;
            align-items: center;
            .date{
                i{
                    font-size: 14px;
                    padding-top: 1px;
                    vertical-align: text-bottom;
                }
                font-size: 12px;
                line-height: 14px;
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


