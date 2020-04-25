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
