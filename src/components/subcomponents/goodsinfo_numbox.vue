<template>
<div class="numbox0">
    <div class="numbox">
        <input type="button" value="-" @click="reduce">
        <input type="text" :value="num" class="text" id="numbox" ref="pos">
        <input type="button" value="+" @click="add">
    </div>
</div>
</template>

<script>

export default {
   data(){
       return{
           num:1
       }
   },
   methods:{
       add(){
           if(this.num < 9){
               this.num++;
               console.log(this.num);
               this.$emit('getCount', this.num);
           } 
       },
       reduce(){
           if(this.num > 0 ){
               this.num--;
               this.$emit('getCount', this.num);
           }
       }
   },
   mounted(){
            var left = this.$refs.pos.getBoundingClientRect().left;
            var top = this.$refs.pos.getBoundingClientRect().top;
            this.$emit('getPos', left, top)
       }
}
</script>

<style scoped>
    .numbox0{
        display: inline-block;
    }
    .numbox{
        
        display: flex;
    }
    .numbox input{
        /* flex: 1; */
        height: 1.5rem;
        width: 1.5rem;
        text-align: center;
        font-size: 0.8rem;
        padding: 0;
    }
    
</style>

