// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import "babel-polyfill"

Vue.config.productionTip = false

// 全局引入公共样式
import '@/public/css/reset.css'

// 全局引入icon字体图标
import '@/public/icon/iconfont.css'

// 全局引入axios
import axios from '@/public/js/axiosCommon.js'
Vue.prototype.$axios = axios.http

// 全局引入vant-ui
import '@/public/js/common_components.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
