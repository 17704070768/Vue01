import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]');
export default new Vuex.Store({
    state:{
        car: car
    },
    mutations:{
        addToCar(state, goodsinfo){
            var flag = false
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    console.log(state.car);
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo);
                console.log(state.car);
            }
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters:{
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        }
    }
})