<template>
    <div class="tabbar_box">
        <div class="tabbar_item"
        :class="{'active': item.to === $route.path}"
        @click="toPath(item.to)"
        v-for="(item,index) in tabbarList" :key="index">
            <span class="iconfont" :class="item.icon"></span>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabbarList:[
                {
                    icon:'iconshouye2',
                    text:'首页',
                    to:'/tabbar/home'
                },
                {
                    icon:'iconfenlei',
                    text:'分类',
                    to:'/tabbar/classify'
                },
                {
                    icon:'iconsousuo',
                    text:'搜索',
                    to:'/tabbar/search'
                }
            ]
        }
    },
    methods: {
        toPath(e){
            this.$router.replace(e)
        }
    },
}
</script>

<style lang="less" scoped>
    .tabbar_box{
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        background: #f5f5f5;
        height: 4rem;
        .tabbar_item{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 0;
            .iconfont{
                font-size: 1.6rem;
            }
            span:first-child{
                color: #333;
            }
            span:last-child{
                font-size: 0.8rem;
                color: #666;
            }
        }
        .active span{
            color: #e43a3d!important;
        }
    }
</style>