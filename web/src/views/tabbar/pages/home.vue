<template>
    <div class="home_box">
        <div>
            <van-search
                v-model="value"
                shape="round"
                background="#e43a3d"
                placeholder="请输入搜索关键词"
                @search="onSearch"
                />
        </div>
        <div class="swiper_box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e43a3d">
                <van-swipe-item v-for="(item,index) in imgList" :key="index">
                    <a :href="item.url">
                        <img v-lazy="item.image" alt="">
                    </a>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 今日特价 -->
        <div>
            <zz-title :crown="true" v-if="bigTitle" :title="bigTitle.cheap.name"></zz-title>
            <div class="goods_container">
                <zz-good v-for="(v,k) in cheapGoods" :key="k" :item="v"></zz-good>
            </div>
        </div>
        <!-- 进入爆款 -->
        <div>
            <zz-title :crown="false" v-if="bigTitle" :title="bigTitle.hot.name"></zz-title>
             <div class="goods_container">
                <zz-good v-for="(v,k) in hotGoods" :key="k" :item="v"></zz-good>
            </div>
        </div>
        <!-- <h2 @click="$router.push('/goods')">去到商品详情</h2> -->
        <!-- 全部商品 -->
        <van-divider
            :style="{margin:'1rem 0',fontSize:'18px',height:'60px',background:'#fff', 
            color: '#e43a3d', borderColor: '#e43a3d', padding: '0 60px' }"
            >
            <span class="iconfont iconaixin"></span>
            你可能还喜欢
        </van-divider>
        <div class="goods_container">
            <zz-good v-for="(v,k) in goodsData" :key="k" :item="v"></zz-good>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            value:'',
            // imgList:[],
            goodsData:[],  //商品数据
            cheapGoods:[],  //特价新品数据
            hotGoods:[],  //爆款商品
            bigTitle:{
                cheap:{name:''},
                hot:{name:''}
            }
        }
    },
    methods: {
        // 获取swiper图片数据
        
        // 获取商品数据
        async fetchGoodsData(){
            const res = await this.$axios.post('/goods')
            console.log(res.data)
            this.goodsData = res.data
        },
        // 获取活动商品及名字
        async fetchActivity(){
            const res = await this.$axios.post('/activity')
            console.log(res.data[0])
            this.bigTitle = res.data[0]
            this.cheapGoods = res.data[0].cheap.cheapGoods
            this.hotGoods = res.data[0].hot.hotGoods
        },
        onSearch(){
            if(this.value.trim()){
                this.$router.push({path:'/tabbar/search',query:{msg:this.value}})
            }
        },
    },
    computed: {
        ...mapState({
            imgList: state => state.ad.adInfo.items
        })
    },
    created() {
        // this.fetchSwiper()
        this.fetchGoodsData()
        this.fetchActivity()
    },
}
</script>

<style lang="less" scoped>
.home_box{
    padding-bottom: 4rem;
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
        justify-content: space-between;
    }
    .van-divider{
        // margin: 1rem 0;
        .iconaixin{
            font-size: 1.3rem;
            color: #fff;
            background: #e43a3d;
            border-radius: 100%;
            width: 1.8rem;
            height: 1.8rem;
            text-align: center;
            line-height: 1.9rem;
            margin-right: .5rem;
        }
    }
}
    
</style>