<template>
    <div class="goods_box">
        <div class="header_top">
            <van-nav-bar title="商品详情" fixed left-arrow @click-left="onClickLeft">
                <!-- <template #right>
                    <van-icon name="search" size="18" />
                </template> -->
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="less">
    .goods_box{
        .header_top{
            .van-nav-bar{
                background: #e43a3d;
                .van-nav-bar__arrow{
                    color: #fff;
                    font-size: 1.2rem;
                }
            }
            
        }
    }
</style>