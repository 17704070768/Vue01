<template>
  <div class="box" id="box11000">
    <!-- 头部 -->
    <mt-header fixed title="姜星星的App">
		<span to="/" slot="left" @click="goback" v-show="flag">
			<mt-button icon="back">返回</mt-button>
		</span>
	</mt-header>
    <!-- 身体 -->
		<transition>
    	<router-view></router-view>
		</transition>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon iconfont icon-feiji"><div class="mui-badge" id="badge">{{$store.getters.getAllCount}}</div></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			
		</nav>
  </div>
</template>

<script>
export default {
	data(){
			return{
				flag:true
			}
		},
	methods:{
		goback(){
			this.$router.back(-1);
		}
	},
	created(){
		if(this.$route.path === '/home'){
			this.flag = false;
		}else{
			this.flag = true;
		}
	},
	watch:{
		'$route.path':function(newVal){
			if(newVal === '/home'){
				this.flag = false;
			}else{
				this.flag = true;
			}
		}
	}
}
</script>

<style>
	.mui-icon .mui-badge{
		margin-top: 0.1rem;
		border-radius: 50%;
		font-size: 0.2rem;
		margin-left: -2rem;
	}
	.mui-bar-tab .mui-tab-item .mui-icon{
		width: 100%;
		height: 100%;
	}
	.mui-bar-tab .mui-tab-item 
	.mui-icon ~ .mui-tab-label{
		font-size: 0.5rem;
		margin-top: 0.1rem;
	}
	.mui-bar .mui-icon{
		font-size: 1rem;
	}
	.mui-bar-tab{
		height: 2rem;
	}
	.mint-header {
		height: 2rem;
	}
	.mint-header-title{
		color: aqua;
		font-size: 1rem;
	}
  .box{
		padding-top: 2rem;
		/* margin-bottom: 50px; */
		padding-bottom: 50px;
		overflow-x: hidden;
		height: 100vh;
		background-color: white;
  }
	.v-enter{
		transform: translateX(100%);
		
	}
	.v-leave-to{
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease
	}
</style>



