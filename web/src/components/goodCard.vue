<template>
    <div class="item_box" @click="toGoods(item._id)">
        <div class="item_content">
            <van-image
                lazy-load
                fit="cover"
                width="10rem"
                height="10rem"
                :src='item.icon'
            >
            </van-image>
            <span class="title">{{item.name}}</span>
            <div class="shopCar">
                <span>￥{{item.price}}</span>
                <span class="iconfont icongouwuche"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
           default(){
               return {
                   icon:'',
                   name:'',
                   price:'',
                   _id:''
               }
           }
        }
    },
    methods: {
        // 去到商品详情
        toGoods(id){
            this.$router.push({path:'/goods',query:{id:id}})
        }
    },
}
</script>

<style lang="less" scoped>
    .item_box{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            margin-bottom: .5rem;
            .item_content{
                width: 10rem;
                background: #fff;
                border-radius: 5px;
                overflow: hidden;
                .title{
                    text-align: center;
                    width: 9rem;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 7px 0 5px 0;
                    font-size: .8rem;
                    color: #333;
                }
                .shopCar{
                    color: #e43a3d;
                    width: 9rem;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 .7rem .4rem .7rem;
                    .iconfont{
                        font-size: 1.2rem;
                    }
                }
            }
        }
</style>