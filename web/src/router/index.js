import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/tabbar',
      		name: 'tabbar',
			component: () => import('@/views/tabbar/index.vue'),
			children:[
				{
					path: '/tabbar/home',
      				name: 'home',
					component: () => import('@/views/tabbar/pages/home.vue'),
				},
				{
					path: '/tabbar/classify',
      				name: 'home',
					component: () => import('@/views/tabbar/pages/classify.vue'),
				}
			]
		},
		{
			path: '/',
			redirect:'/tabbar/home'
		},
		{
			path:'/goods',
			name: 'goods',
			component: () => import('@/views/goodsPage/index.vue'),
		}
  	]
})
