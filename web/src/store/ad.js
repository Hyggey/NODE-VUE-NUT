// import Vue from 'vue'

const ad = {
    state:{
        adInfo:{}
    },
    mutations:{
        receive_ad_info(state,a){
            state.adInfo = a.data
        }
    },
    actions:{
        recordAd({commit},b){
            commit('receive_ad_info',b)
        }
    }
}

export default ad