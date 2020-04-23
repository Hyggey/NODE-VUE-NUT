<template>
    <div class="goods_box">
        <div class="header_top">
            <van-nav-bar placeholder  title="商品详情" fixed left-arrow @click-left="onClickLeft">
                <!-- <template #right>
                    <van-icon name="search" size="18" />
                </template> -->
            </van-nav-bar>
        </div>
        <div class="swiper_box">
            <van-swipe @change="onChange" class="my-swipe" :autoplay="3000" indicator-color="#e43a3d">
                <van-swipe-item v-for="(item,index) in goodsData.goodsImg" :key="index">
                    <img v-lazy="item.image" alt="">
                </van-swipe-item>
                <template #indicator>
                    <div class="custom-indicator">
                    {{ current + 1 }}/{{imgLength}}
                    </div>
                </template>
            </van-swipe>
        </div>
        <div>
            <span>{{goodsData.desc}}</span>
            <div>{{goodsData.price}}元</div>
        </div>
        <div class="text" v-html="goodsData.body"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.query.id,
            goodsData:{},
            current: 0,
            imgLength:0
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        async fetchGoodsDetail(){
           const res = await this.$axios.post(`/goodsDetail/${this.id}`) 
           console.log(res.data)
           this.goodsData = res.data
           if(res.data.goodsImg){
               this.imgLength = res.data.goodsImg.length
           }
        },
        onChange(index) {
            this.current = index;
        },
    },
    created() {
        this.fetchGoodsDetail()
    },
}
</script>

<style lang="less">
    .goods_box{
        // margin-top: 46px;
        .header_top{
            // height: 46px;
            .van-nav-bar{
                background: #e43a3d;
                .van-nav-bar__arrow{
                    color: #fff;
                    font-size: 1.2rem;
                }
            }  
        }
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
            .custom-indicator {
                position: absolute;
                right: 5px;
                bottom: 5px;
                padding: 2px 5px;
                font-size: 12px;
                background: rgba(0, 0, 0, 0.1);
            }
        }
        .text{
            p{
                text-indent: 1.2rem;
                color: #333;
                // display: flex;
                // justify-content: center;
            }
            img{
                width: 320px;
                height: auto;
                margin: auto;
                display: inherit;
            }
        }
    }
</style>