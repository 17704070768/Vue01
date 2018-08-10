<template>
    <div class="desc">
        <h3 class="title001">
            商品描述列表{{$route.params.id}}
        </h3>
         <img :src="url" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
            url:require('../../imgs/huawei1.jpg')
        }
    }
}
</script>

<style scoped>
    .title001{
        text-align: center;
        color: blue;
    }
    .desc img{
        width: 100%;
    }
</style>

