<template>
    <div class="box110">
        <!-- 头部 -->
        <div>
            <span v-for="(item, i) in picList" :key="item.url" @click="getPic(i)">
                {{item.title}}
            </span>
        </div>
        
        <!-- 身体 -->
       <div v-for="(item, i) in 10" :key="i"  class="pic" >
            <img :src="temp.url" alt=""/>   
            <!-- http://a1.att.hudong.com/70/67/01300542794533141335678067328.jpg -->
            <!-- <img v-lazy="'http://a1.att.hudong.com/70/67/01300542794533141335678067328.jpg'" alt=""> -->
       </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            picList:[{title:'全部', url:require('../../imgs/1.png')}, 
            {title:'家具', url:require('../../imgs/2.png')},
            {title:'设计', url:require('../../imgs/3.png')},
            {title:'影音', url:require('../../imgs/4.png')}],
            temp:{}
        }
    },
    created(){
        this.getPic(0);
    },
    methods:{
        getPic(num){
            this.temp = this.picList[num];
        },
        fullScreen(){
            // console.log(this.$refs.full1.webkitRequestFullScreen());
            this.$refs.full1.webkitRequestFullScreen();
        }
    } 
}
</script>

<style scoped>
    .box110>div{
        display: flex;

    }
    .box110>div>span{
        flex: 1;
        background-color: white;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
    }
    div>span:hover{
        color: aqua;
    }
    .pic{
        display: flex;
        flex-direction:column;
        padding: 4px 4px 0;
    }
    
    .box110 .pic>img{
        width: 100%;
        height: 200px;
        
    }
     .pic>img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    } 
</style>

 