<template>
  <div id="app">
    <!-- <van-button type="default">默认按钮</van-button> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  created(){
    this.fetchSwiper()
  },
  methods: {
    // 网站公共配置数据，存储到vuex中去
    async fetchSwiper(){
            const res = await this.$axios.get('/imgs')
            console.log(res.data[0])
            // this.imgList = res.data[0].items
            this.$store.dispatch('recordAd',{
                data:res.data[0]
            })
        },
  },
  watch:{
    $route(to, from) {
       if((to.path == '/tabbar/home')&&sessionStorage.active){
          sessionStorage.removeItem('active')
			}
    }
  }
}
</script>
  
<style>
html,body{
	/* height: 100vh; */
}
#app{
  /* height: 100vh; */
  /* padding-bottom: 4.8rem; */
  box-sizing: border-box;
  background: #f8f8f8;
}
</style>
