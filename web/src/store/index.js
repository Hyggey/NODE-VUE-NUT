import Vue from 'vue'
import Vuex from 'vuex'
import ad from './ad'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        ad,
    },
})

export default store;