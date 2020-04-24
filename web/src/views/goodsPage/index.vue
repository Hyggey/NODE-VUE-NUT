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
        <div class="details_msg">
            <div class="title">{{goodsData.desc}}</div>
            <div class="price">
                <span>￥</span>
                <span>{{goodsData.price}}</span>
                <span>￥40.0</span>
                <span>7折</span>
            </div>
            <div class="ems">
                <span>快递:免运费</span>
                <span>中国台湾</span>
            </div>
        </div>
        <div class="activity">
            <div>
                <span class="iconfont iconxingxing"></span>
                新
            </div>
            <span>新用户下单立享优惠！</span>
            <p @click="a">立即下单<span style="font-size:17px" class="iconfont iconyoujiantou"></span></p>
        </div>
        <div class="t_t">
            <div>促销活动</div>
            <div>
                <span>新人首单送20元无门槛代金券</span>
                <span>订单满50减10</span>
                <span>订单满100减30</span>
            </div>
        </div>
        <div class="t_t">
            <div>服务</div>
            <div>
                <span>7天无理由退换货</span>
                <span>假一赔十</span>
            </div>
        </div>
        <van-dialog v-model="show" title="二维码" show-confirm-button>
            <img style="width:150px;height:150px" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-dialog>
        <van-divider
            :style="{margin:'16px 0 0 0',fontSize:'18px',height:'40px',background:'#fff', 
            color: '#666', borderColor: '#666', padding: '0 80px' }"
            >
            图文详情
        </van-divider>
        <div style="background:#fff;padding:15px 0 0 0" class="text" v-html="goodsData.body"></div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data(){
        return{
            id: this.$route.query.id,
            goodsData:{},
            current: 0,
            imgLength:0,
            show:false //弹框
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
        a(){
            this.show = true;
        }
    },
    created() {
        this.fetchGoodsDetail()
    },
    components: {
    [Dialog.Component.name]: Dialog.Component,
  },
}
</script>

<style lang="less">
    .goods_box{
        // background: #fff;
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
                background: #fff;
                font-size: 20px;
                // line-height: 180px;
                text-align: center;
                // background-color: #39a9ed;
                img{
                    height: 370px;
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
        .details_msg{
            padding: 10px 15px;
            box-sizing: border-box;
            background: #fff;
            .title{
                color: #303133;
                font-size: 16px;
                margin: 4px 0 8px 0;
                -webkit-line-clamp: 2;
                line-height: 22px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .price{
                // height: 28px;
                // line-height: 28px;
                margin: 3px 0;
                display: flex;
                color: #fa436a;
                align-items: baseline;
                span:nth-child(2){
                    font-size: 1.4rem;;
                }
                span:nth-child(3){
                    color: #666;
                    text-decoration: line-through;
                    margin: 0 .8rem 0 .5rem;
                }
                span:last-child{
                    background: #fa436a;
                    color: #fff;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-size: 12px;
                    transform: translateY(-3px)
                }
            }
            .ems{
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #909399;
                margin: 5px 0;
            }
        }
        // .first{
        //     margin: 8px 0;
        // }
        .activity{
            display: flex;
            background: linear-gradient(left, #fdf5f6, #fbebf6);
            align-items: center;
            color: #606266;
            padding: 12px 15px;
            div{
                border: 1px solid #fa436a;
                color: #fa436a;
                font-size: 13px;
                border-radius: 3px;
                width: 37px;
                margin-right: 10px;
                .iconfont{
                    background: #fa436a;
                    color: #fff;
                }
            }
            p{
                flex: 1;
                color: #fa436a;
                text-align: right;
            }
        }
        .t_t{
            padding: 10px 15px;
            font-size: 15px;
            color: #606266;
            display: flex;
            background: #fff;
            align-items: center;
            border-bottom: 1px solid #E4E7ED;
            div:first-child{
                width: 90px;
            }
            div:last-child{
                display: flex;
                flex: 1;
                flex-direction: column;
                color: #303133;
                line-height: 23px;
            }
        }
        .text{
            p{
                text-indent: 1.2rem;
                color: #333;
                // display: flex;
                // justify-content: center;
                line-height: 1.5rem;
                font-size: .93rem;
            }
            img{
                width: 100%;
                height: auto;
                margin: auto;
                display: inherit;
            }
        }
    }
</style>