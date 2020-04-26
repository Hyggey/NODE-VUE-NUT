<template>
    <div class="classify_box">
        <div>
            <van-tree-select @click-nav="getIndex" height="100vh" :items="items" :active-id.sync="activeId" :main-active-index.sync="active">
                <template #content>
                    <div v-for="(item,index) in items" :key="index">
                        <h2 v-if="active == index">全部{{item.text}}</h2>
                        <!-- 大坑，不要用三个等于号，狗屎 -->
                        <div class="ware_box" v-if="active == index">
                            <div class="ware_item" @click="toGoods(good._id,active)" v-for="(good,k) in item.children" :key="k">
                                <van-image
                                :src="good.icon"
                                />
                                <span>{{good.name}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- <van-image
                    v-if="active === 1"
                    src="https://img.yzcdn.cn/vant/apple-2.jpg"
                    /> -->
                </template>
            </van-tree-select>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active: 0,
            activeId:1,
            items: [{ text: '',children:[]}, { text: '',children:[]}],
        }
    },
    methods: {
        async fetchData(){
            const res = await this.$axios.get('/classify')
            console.log(res.data)
            const a = res.data.map(item =>{
                return {
                    text:item.name,
                    children:item.foodsList
                }
            })
            console.log(a)
            this.items = a
        },
        // 去到商品详情
        toGoods(id,active){
            this.$router.push({path:'/goods',query:{id:id}})
        },
        getIndex(index){
            sessionStorage.active = index
        }
    },
    created() {
        this.fetchData()
        // this.$nextTick(() =>{
            if(sessionStorage.active){
                this.active = sessionStorage.active
            }
        // })        
    },
}
</script>

<style lang="less">
    .classify_box{
        h2{
            background: #cccccc;
            height: 2.5rem;
            font-weight: 450;
            line-height: 2.5rem;
            margin-bottom: 0.7rem;
            text-indent: .8rem;
            letter-spacing: 1px;
            font-size: 1rem;
        }
        .van-tree-select__nav{
            padding-bottom: 4rem;
            overflow-y: scroll;
        }
        .van-tree-select__content{
            padding-bottom: 4rem;
        }
        .ware_box{
            display: flex;
            // justify-content: center;
            flex-wrap: wrap;
            .ware_item{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
                margin: .3rem 0 .5rem 0;
                .van-image{
                    img{
                        width: 6.5rem;
                        height: 6rem;
                        border-radius: 3px;
                    }
                }
                span{
                    display: inline-block;
                    width: 6.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                    margin: .25rem 0;
                    font-family: 'Times New Roman", Times, serif'!important;
                }
            }
        }
    }
</style>