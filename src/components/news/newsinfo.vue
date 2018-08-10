<template>
    <!-- <div class='box1012'>
        <h3>{{newsinfo.title}}</h3>
        <div class="jingbu">
            <p>发表时间:{{newsinfo.add_time}}</p>
            <p>点击{{newsinfo.click}}次</p>
        </div>
        
        <hr />
        <div class="zhuti" v-html="newsinfo.content"></div>
    </div> -->
    <div class='box1012'>
        <h3>新闻资讯</h3>
        <div class="jingbu">
            <p>发表时间:2012-12-12 12:12:12</p>
            <p>点击0次</p>
        </div>
        
        <hr />
        <div class="zhuti">
            {{contain_data + id}}
            {{contain_data + id}}
            {{contain_data + id}}
        </div>
        <!-- 评论区 -->
        <Comment :id="id"></Comment>
    </div>
</template>

<script>
import Comment from '@/components/subcomponents/comment.vue'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            id: this.$route.params.id,
            contain_data:"柔道（Jūdō，じゅうどう）是一种以摔法和地面技为主的格斗术。日本素有“柔道之国”的称号。柔道是日本武术中特有的一科，是由柔术演变发展而来的。在日语中是“柔之道”的意思。就是“温柔的方式”。柔道部分起源于一种古代日本武士空手搏斗的技术：柔术。柔道通过把对手摔倒在地而赢得比赛，它是奥运会比赛中唯一的允许使用窒息或扭脱关节等手段来制服对手的项目。柔道是一种对抗性很强的竞技运动，它强调选手对技巧掌握的娴熟程度，而非力量的对比。"
        ,
            newsinfo:{}
        }
    },
    components:{
        Comment
    },
    created(){
        // this.getNewInfo();
    },
    methods:{
        getNewInfo(){
            this.$http.jsonp("/api/getnew/" + this.id).then(result => {
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast('数据获取失败！');
                }
            })
        }
    }
}
</script>

<style scoped>
    .box1012{
        padding: 0 4px; 
    }
    .box1012 h3{
        padding: 0;
        margin: 0;
        font-size: 18px;
        color: red;
        text-align: center;
        margin: 10px 0;
    }
    
    .box1012 .jingbu{
        display: flex;
        justify-content: space-between;
        color: blue;
    }
    .box1012 .zhuti{
        font-size: 14px;
    }
    .jingbu p{
        margin-bottom: 0;
        color: cornflowerblue
    }
</style>

