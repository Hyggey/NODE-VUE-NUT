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
        <!-- <h2 @click="$router.push('/goods')">去到商品详情</h2> -->
        <div class="goods_container">
            <div @click="toGoods(item._id)" class="item_box" v-for="(item,index) in goodsData" :key="index">
                <van-image
                    lazy-load
                    fit="cover"
                    width="10rem"
                    height="10rem"
                    :src='item.icon'
                    radius="5px"
                >
                </van-image>
                <span class="title">{{item.name}}</span>
                <div class="shopCar">
                    <span>￥{{item.price}}</span>
                    <span class="iconfont icongouwuche"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            imgList:[],
            goodsData:[]  //商品数据
        }
    },
    methods: {
        // 获取swiper图片数据
        async fetchSwiper(){
            const res = await this.$axios.get('/rest/ads')
            console.log(res.data[0])
            this.imgList = res.data[0].items

        },
        // 获取商品数据
        async fetchGoodsData(){
            const res = await this.$axios.post('/goods')
            console.log(res.data)
            this.goodsData = res.data
        },
        // 去到商品详情
        toGoods(id){
            this.$router.push({path:'/goods',query:{id:id}})
        }
    },
    created() {
        this.fetchSwiper()
        this.fetchGoodsData()
    },
}
</script>

<style lang="less" scoped>
.home_box{
    // padding-bottom: 5rem;
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
    .goods_container{
        display: flex;
        flex-wrap: wrap;
        .item_box{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            margin-bottom: .5rem;
            .title{
                text-align: center;
                width: 9rem;
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 10px 0 15px 0;
                font-size: .8rem;
                color: #333;
            }
            .shopCar{
                color: #e43a3d;
                width: 10rem;
                display: flex;
                justify-content: space-between;
                .iconfont{
                    font-size: 1.2rem;
                }
            }
        }
    }
}
    
</style>