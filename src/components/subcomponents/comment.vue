<template>
    <div class="box2">
        <h3>发表评论</h3>
        <hr />
        <textarea v-model='msg' placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
        <button @click="postComment" type="button" class="mui-btn mui-btn-primary mui-btn-block">发表评论</button>
        <div v-for="(item, i) in commentNum" :key="i">
            <p class="gray size">第{{i+1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12</p>
            <p class="size indent">锄禾日当午&nbsp;&nbsp;复方{{$route.params.id}}</p>
            
        </div>
        <!-- <div v-for="(item, i) in comments" :key="i">
            <p class="gray size">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}</p>
            <p class="size indent">{{item.content}}</p>
            
        </div> -->
        <button @click="getMore" type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">加载更多</button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            commentNum:3,
            msg:''
        }
    },
    props:['id'],
    created(){
        // this.getComments();
    },
    methods:{
        getComments(){
            this.$http.jsonp('api/getcomments/' + this.id + this.pageIndex).then(result => {
                if(result.body.status === 0){
                    this.comments = this.comments.concat(result.body.message);
                }else{
                    Toast('加载失败！')
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments()
        },
        postComment(){
            if(this.msg.trim().length === 0){
                return Toast('内容不能为空')
            }
            this.$http.post('/api/postcomment/' + this.$route.params.id, {
                content: this.msg.trim()
            }).then(result => {
                if(result.body.status === 0){
                    var cmt = {
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()
                    }
                    this.comments.unshift(cmt);
                    this.msg = ''
                }
            })
        }
    }
}
</script>

<style scoped>
    .box2>h3{
        margin-top: 14px;
        font-size: 18px;
    }
    .box2 textarea{
        height: 100px;
        margin: 0;
    }
    .mui-btn{
        padding: 0;
        height: 40px;
        line-height: 40px;
        margin-bottom: 5px;
    }
    .size{
        color: black;
        font-size: 12px;
    }
    .gray{
        background-color: gray;
    }
    .indent{
        text-indent: 2em;
    }
</style>
