<template>
    
    <div class="GoodsInfoBox" ref="box">
        <transition
            @before-enter='beforeEnter'
            @enter='enter'
            @after-enter='afterEnter'>
            <div class="ball" ref='ball' v-show="bollFlag"></div>
        </transition>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunBoTuList='Lunbotu' :bool='true'></swiper>
					</div>
				</div>
			</div>

			<div class="mui-card">
				<div class="mui-card-header">商品的名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        
						<p>市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="new">￥2199</span></p>
                        <p>购买数量：<numbox @getPos='getPos' @getCount='getCount'/></p>
                        <input type="submit" value="立即购买">
                        <button @click="addCar" type="button" class="mui-btn mui-btn-danger">
                            加入购物车
                        </button>
					</div>
				</div>
			</div>

			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：</p>
                        <p>库存情况：</p>
                        <p>上架时间：</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <button type="button" @click="getDesc(id)" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">图文介绍</button>
		            <button type="button" @click="getComment(id)" class="mui-btn mui-btn-warning mui-btn-block mui-btn-outlined">商品评论</button>
                </div>
			</div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            // lunbotu:[]
            Lunbotu:[1, 2, 3],
            bollFlag:false,
            count: 1,
            left: null,
            top: null,
            price: 2199
        }
    },
    created(){
        // this.getLunbotu();
    },
    components:{
        swiper,
        numbox
    },
    methods:{
        getLunbotu(){
            this.$http.jsonp('api/getthumimages/' + this.id).then(result => {
                if(result.body.status === 0){
                    this.lunbotu = result.body.message;
                }
            })
        },
        getDesc(id){
            this.$router.push({name:'goodsdesc', params:{id}})
        },
        getComment(id){
            this.$router.push({name:'goodscomment', params:{id}})
        },
        addCar(){
            this.bollFlag = !this.bollFlag;
            var goodsinfo = {
                id: this.id,
                count: this.count,
                price: this.price,
                selected: true
            };
            this.$store.commit('addToCar', goodsinfo);
        },
        beforeEnter(el){
            el.style.transform = 'translate(0, 0)';
        },
        getPos(left, top){
            this.left = left;
            this.top = top;
        },
        enter(el, done){
            el.offsetWidth;

            // 获取小球相对视窗的位置
            const ball = this.$refs.ball.getBoundingClientRect();
            // console.log(ball.top);

            // 获取购物车相对视窗的位置
            const badge = document.getElementById("badge").getBoundingClientRect();
            
            // 计算差值
            const x = badge.left - ball.left;
            const y = badge.top - ball.top;
            el.style.transform = `translate(${x}px, ${y}px)`;
            el.style.transition = 'all 1s ease';
            done();
        },
        afterEnter(el){
            this.bollFlag = !this.bollFlag;
        },
        getCount(count){
            this.count = count;
            console.log(this.count);
        }
    },
    mounted(){
            this.$refs.ball.style.left = this.left + "px";
            this.$refs.ball.style.top = this.top + "px";
            console.log(this.$refs.ball.style.top);
        }
}
</script>

<style scoped>
    .ball{
        position: absolute;
        background:red;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        z-index: 99;
    }
    .mui-card-footer{
        flex-direction: column;
    }
    .mui-btn-block{
        font-size: 0.9rem;
        text-align: center;
        line-height: 1.6rem;
        padding: 0;
        margin-bottom: 0;
        margin-top: 0.5rem;
        height: 1.6rem;
    }
    .mui-card-content-inner .new{
        font-weight: bold;
        color: red;     
        background-color: white;
    }
    .GoodsInfoBox{
        overflow: hidden;
        background-color: #C6C3C6;
        position: relative;
    }
    .mui-card-content-inner span{
        position: relative;
        display: inline-block;
        text-align: center;
        line-height: 20px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color:red;
    }
    .mui-card-footer{
        margin-bottom: 0.2rem;
    }
</style>

