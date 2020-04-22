<template>
    <div class="home_box">
        <div>
            <van-search
                v-model="value"
                shape="round"
                background="#e43a3d"
                placeholder="请输入搜索关键词"
                />
        </div>
        <div class="swiper_box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e43a3d">
                <van-swipe-item v-for="(item,index) in imgList" :key="index">
                    <img v-lazy="item.image" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <h2 @click="$router.push('/goods')">去到商品详情</h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            imgList:[]
        }
    },
    methods: {
        async fetchSwiper(){
            const res = await this.$axios.get('/rest/ads')
            console.log(res.data[0])
            this.imgList = res.data[0].items

        }
    },
    created() {
        this.fetchSwiper()
    },
}
</script>

<style lang="less" scoped>
.home_box{
    .swiper_box{
        // height: 180px;
        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            // line-height: 180px;
            text-align: center;
            // background-color: #39a9ed;
            img{
                height: 200px;
                width: 100%;
            }
        }
    }
}
    
</style>