<template>
    <div>
        <swiper :lunBoTuList="lunBoTuList" :bool="false"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../imgs/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../imgs/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../imgs/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../imgs/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../imgs/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../imgs/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
             >
        </ul> 
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            lunBoTuList:[1, 2, 3, 4]
            // lunBoTuList:[]
        }
    },
    created(){
        // this.getLunBoTu();
    },
    components:{
        swiper
    },
    methods:{
        getLunBoTu(){
            this.$http.jsonp('api/getlunbo').then(result => {
                if (result.body.status === 0){
                    this.lunBoTuList = result.body.message;
                }else{
                    Toast('获取失败！')
                }
            })
        }
    }
}
</script>

<style scoped>
    
    .mui-table-view{
        display: flex;
        flex-wrap: wrap;
    }
    .mui-col-sm-3 {
        width: 33%;
    }
    .mui-table-view .mui-table-view-cell .mui-media-body{
        font-size: 0.5rem;
        height: 0.8rem;
        line-height: 0.8rem;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
    }
    img{
        /* width: 60px; */
        width: 3rem;
    }
    .mui-media-body{
        font-size: 14px;
    }
</style>

