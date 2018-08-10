<template>
    <div class="GC">
        <h3 class="title001">
                商品评论列表{{$route.params.id}}
        </h3>
        <hr />
        <comment12></comment12>
    </div>
</template>

<script>
import comment12 from '../subcomponents/comment'
export default {
    
    components:{comment12}
}
</script>

<style scoped>
    .title001{
        text-align: center;
        color: blue;
    }
    .GC{
        padding: 0.2rem;
    }
</style>

