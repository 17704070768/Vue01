<template>
    <div class="goodsBox">
        <!-- <router-link to='/home/goodsinfo/1' class="goodslist" v-for="(item, i) in 7" :key='i'>
            <img src="../../imgs/huawei.jpg" alt="">
            <p class="msg1">华为（HUAWEI）荣耀6Plus16G双4G版</p>
            <div class="msg2">
                <div>
                    <span class="new tspan">￥2195</span>
                    <span class="old tspan"><del>￥2490</del></span>
                </div>
                <div class="msg3">
                    <span>热卖中</span>
                    <span>残余60件</span>
                </div>
            </div>
        </router-link> -->
        <div @click="goDetail(i)" class="goodslist" v-for="(item, i) in 7" :key='i'>
            <img src="../../imgs/huawei.jpg" alt="">
            <p class="msg1">华为（HUAWEI）荣耀6Plus16G双4G版</p>
            <div class="msg2">
                <div>
                    <span class="new tspan">￥2195</span>
                    <span class="old tspan"><del>￥2490</del></span>
                </div>
                <div class="msg3">
                    <span>热卖中</span>
                    <span>残余60件</span>
                </div>
            </div>
        </div>
       
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        goDetail(id){
            // this.$router.push({path: '/home/goodsinfo/' + id});
            this.$router.push({name: 'goodsinfo', params:{id}});
        }
    }
}
</script>

<style scoped>
    .goodsBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 3px;
    }
    .goodslist{
        padding: 2px;
        width: 49%;
        /* margin-bottom: 2px; */
        margin: 2px 1px;
        /* border: 1px solid gray; */
    }
    .goodslist img{
        width: 100%;
        
    }
    .msg1{
        font-weight: bold;
        color: black;
    }
    .msg2{
        background-color: #EFEBEF;
        padding: 5px;
    }
    .new{
        margin-right: 10px;
        color: red;
    }
    .old{
        font-size: 12px;
        color: #8E9096;
    }
    .msg3{
        color: #8E9096;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
</style>

