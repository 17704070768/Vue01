import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/tabbar/HomeContainer.vue'
import member from '@/components/tabbar/MemberContainer.vue'
import search from '@/components/tabbar/SearchContainer.vue'
import shop from '@/components/tabbar/ShopContainer.vue'
import NewsList from '@/components/news/NewsList.vue'
import Newsinfo from '@/components/news/newsinfo.vue'
import PhotoList from '@/components/photos/PhotoList..vue'
import VueResourse from 'vue-resource'
import VuePreview from 'vue-preview'
import GoodsList from '@/components/goods/GoodsList.vue'
import GoodsInfo from '@/components/goods/GoodsInfo.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'

Vue.use(VuePreview)
Vue.use(VueResourse)
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component: home},
        {path:'/member', component: member},
        {path:'/search', component: search},
        {path:'/shop', component: shop},
        {path:'/home/newslist', component: NewsList},
        {name: 'router1', path:'/home/newsinfo/:id', component: Newsinfo},
        {path:'/home/photolist', component: PhotoList},
        {path:'/home/goodslist', component: GoodsList},
        {path:'/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
        {path:'/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
        {path:'/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'},
        {path:'*', component: home}
    ],
    linkActiveClass:'mui-active'
})
