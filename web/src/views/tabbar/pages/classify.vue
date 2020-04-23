<template>
    <div class="classify">
        <div>
            <van-tree-select @click-nav="getIndex" height="100%" :items="items" :active-id.sync="activeId" :main-active-index.sync="active">
                <template #content>
                    <div v-for="(item,index) in items" :key="index">
                        <!-- 大坑，不要用三个等于号，狗屎 -->
                        <div v-if="active == index">
                            <div @click="toGoods(good._id,active)" v-for="(good,k) in item.children" :key="k">
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
            items: [{ text: '分组 1',children:[]}, { text: '分组 2',children:[]}],
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
    
</style>