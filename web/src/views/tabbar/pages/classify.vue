<template>
    <div class="classify">
        <div>
            <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
                <template #content>
                    <div v-for="(item,index) in items" :key="index">
                        <div v-if="active === index">
                            <div v-for="(good,k) in item.children" :key="k">
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
            items: [{ text: '分组 1' }, { text: '分组 2' }],
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
        }
    },
    created() {
        this.fetchData()
    },
}
</script>

<style lang="less">
    
</style>