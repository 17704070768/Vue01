import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import '@/lib/mui/css/mui.css'
import MintUI from 'mint-ui'
import '@/lib/mui/css/icons-extra.css'
import '@/lib/mui/css/iconfont.css'
import '@/lib/rem.js'
import router from './router/index.js'
import store from './store/store.js'
import Axios from 'axios'

Vue.prototype.$axios = Axios

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.http.options.root = 'http://www.escook.cn:3000/'
Vue.http.options.emulateJSON=true

new Vue({
  el:'#app',
  components:{App},
  router,
  store,
  template:'<App />'
})