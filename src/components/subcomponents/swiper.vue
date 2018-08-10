<template>
    <div>
        <mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item, i) in lunBoTuList" :key='i'>
                <div class="number">{{i+1}}</div>
                <!-- <img :src="item.img_url" /> -->
                <img :src="url" :class="bool ? acT : acF"/>
            </mt-swipe-item>
		</mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{url:require("../../imgs/temp.jpg"),
            acT:'activeT',
            acF:'activeF'
        }
    },
    props:["lunBoTuList", "bool"],
    created(){
        if(this.bool){
            this.url = require("../../imgs/iphone_x.jpg")
        }
    }
}
</script>

<style scoped>
    .mint-swipe-item {
        text-align: center;
    }
    .mint-swipe{
		height: 200px;
	}
	.activeT{
        height: 100%; 
    }
    .activeF{
        width: 100%;
    }
    .mint-swipe .number{
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 50%;
        background-color: cyan;
    }
</style>

