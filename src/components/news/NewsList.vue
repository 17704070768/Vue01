<template>
    <ul class="mui-table-view">
		<!-- <li class="mui-table-view-cell mui-media" v-for="(item, i) in newslist" :key='i'>
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" :src="item.img_url">
				<div class="mui-media-body">
					{{item.title}}
					<p class='mui-ellipsis'>
						<span>发表时间:{{item.add_time}}</span>
						<span>点击:{{item.click}}次</span>
					</p>
				</div>
			</a>
		</li> -->
				<li class="mui-table-view-cell mui-media" v-for="(item, i) in newslist" :key='i'>
					<router-link :to='{name:"router1", params:{id:13+i}}'>
						<!-- <router-link :to='"/home/newsinfo/"+(13+i)'> -->
						<span class="span1">{{i}}</span>
						<img class="mui-media-object mui-pull-left" src="http://pic.cdhdky.com/download/20170523_145520437.jpg">
						<div class="mui-media-body">
							我的新闻{{i}}
							<p class='mui-ellipsis'>
                                <span>发表时间:2012-12-12 12:12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				

			</ul>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
	data(){
		return {
			// newslist:[],
			newslist:15
		}
	},
	created(){
		// this.getNewsList();
	},
	methods:{
		getNewsList(){
			this.$http.jsonp('api/getnewslist').then(result => {
				if(result.body.status === 0){
					this.newslist = result.body.message;
				}else{
					Toast('数据获取失败！');
				}
			})
		}
	}
}
</script>

<style scoped>
    .mui-ellipsis{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        color: blue;
    }
	.mui-table-view-cell .span1{
		position: absolute;
		width: 20px;
		height: 20px;
		text-align: center;
		background-color: yellow;
		border-radius: 50%;
	}
</style>


