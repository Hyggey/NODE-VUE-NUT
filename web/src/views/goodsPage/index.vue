<template>
    <div class="goods_box">
        <div class="header_top">
            <!-- <van-nav-bar placeholder  title="商品详情" fixed left-arrow @click-left="onClickLeft">
            </van-nav-bar> -->
            <button @click="onClickLeft">
                <span class="iconfont iconarrowLeft-fill"></span>
            </button>
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
        <div class="details_msg" v-if="goodsData">
            <div class="title">{{goodsData.desc}}</div>
            <div class="price">
                <span>￥</span>
                <span>{{goodsData.price}}</span>
                <span>￥{{goodsData.oldPrice}}</span>
                <span>{{goodsData.discount}}折</span>
            </div>
            <div class="ems">
                <span>快递：{{delivery}}</span>
                <!-- <span>中国台湾</span> -->
            </div>
        </div>
        <div class="activity">
            <div>
                <span class="iconfont iconxingxing"></span>
                新
            </div>
            <span>新店开业,欢迎大家来抢购！！</span>
            <!-- <p @click="a">立即下单<span style="font-size:17px" class="iconfont iconyoujiantou"></span></p> -->
        </div>
        <div class="t_t">
            <div>促销活动</div>
            <div>
                <span v-for="(v,index) in adInfo" :key="index">{{v.item}}</span>
            </div>
        </div>
        <div class="t_t">
            <div>服务</div>
            <div>
                <span>送货上门，服务到位</span>
                <span>包你满意</span>
            </div>
        </div>
        <van-dialog v-model="show" :title="title" width="300px" className="hello" show-confirm-button>
            <img style="width:160px;height:160px" :src="imgType" />
            <span v-show="title=='微信二维码'">扫一扫添加好友</span>
        </van-dialog>
        <van-divider
            :style="{margin:'16px 0 0 0',fontSize:'18px',height:'40px',background:'#fff', 
            color: '#666', borderColor: '#666', padding: '0 80px' }"
            >
            图文详情
        </van-divider>
        <div style="background:#fff;padding:15px 0 50px 0" class="text" v-html="goodsData.body"></div>
        <van-goods-action>
            <van-goods-action-icon @click="$router.push('/')" icon="wap-home-o" text="首页" color="#909399" />
            <van-goods-action-icon @click="$router.push('/tabbar/classify')" icon="qr" color="#909399" text="分类" />
            <!-- <van-goods-action-icon @click="flag = !flag" icon="star" :text="flag?'已收藏':'收藏'" :color="flag?'#fa436a':'#909399'" /> -->
            <!-- <div> -->
            <van-goods-action-button type="warning" @click="open(1)" text="在线咨询" />
            <van-goods-action-button @click="open(2)" type="danger" text="立即购买" />
            <!-- </div> -->
        </van-goods-action>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import {mapState} from 'vuex'
export default {
    data(){
        return{
            id: this.$route.query.id,
            goodsData:{},
            current: 0,
            imgLength:0,
            show:false, //弹框
            // flag: false //是否收藏
            imgType:'',
            title:''
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
        open(e){
            console.log(e)
            this.show = true;
            if(e == 1){
                this.title = '微信二维码'
                this.imgType = this.friendImg
            }else{
                this.title = '收款二维码'
                this.imgType = this.cashImg
            }
        }
    },
    created() {
        this.fetchGoodsDetail()
    },
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    computed: {
        ...mapState({
            adInfo: state => state.ad.adInfo.activities,
            delivery: state => state.ad.adInfo.delivery,
            friendImg: state => state.ad.adInfo.friendImg,
            cashImg: state => state.ad.adInfo.cashImg,
        })
    },
}
</script>

<style lang="less">
    .goods_box{
        // background: #fff;
        // margin-top: 46px;
        .header_top{
            // height: 46px;
            position: absolute;
            left: .8rem;
            top: .8rem;
            z-index: 999;
            .van-nav-bar{
                background: #e43a3d;
                .van-nav-bar__arrow{
                    color: #fff;
                    font-size: 1.2rem;
                }
            }
            button{
                border: 0;
                width: 2.2rem;
                height: 2.2rem;
                color: #fff;
                background: rgba(0, 0, 0, 0.4);
                border-radius: 100%;
                .iconarrowLeft-fill{
                    font-size: 1.3rem;
                }
            }
        }
        .swiper_box{
        // height: 180px;
            .my-swipe .van-swipe-item {
                position: relative;
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
                right: .8rem;
                bottom: 1.2rem;
                height: 1.2rem;
                border-radius: 1.2rem;
                padding: .2rem .7rem 0.1rem .7rem;
                font-size: .7rem;
                color: #fff;
                background: rgba(0, 0, 0, 0.3);
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
                    margin: 0 .8rem 0 .6rem;
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
        .hello{
            .van-dialog__content{
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                span{
                    font-size: 15px;
                    color: #666;
                }
            }
        }
        .van-goods-action{
            .van-goods-action-button--warning{
                background: linear-gradient(to right, #ffac30, #fa436a);
                &::after{
                    content: '';
                    width: 0;
                    height: 15px;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    border-right: 1px solid rgba(255,255,255,0.8);
                }
            }
            .van-goods-action-button--danger{
                background: linear-gradient(to right, #fa436a, #F56C6C);
            }
        }
    }
</style>