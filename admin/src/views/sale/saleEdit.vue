<template>
    <div>
        <h1>{{id?'编辑':'新增'}}活动</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <!-- <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option 
                    v-for="item in parents"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="活动名称一">
                <el-input v-model="model.cheap.name"></el-input>
            </el-form-item>
            <el-form-item label="选择商品">
                <el-select v-model="model.cheap.cheapGoods" filterable multiple>
                    <el-option
                        v-for="item in goods"
                        :label="item.name"
                        :key="item._id"
                        :value="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动名称二">
                <el-input v-model="model.hot.name"></el-input>
            </el-form-item>
            <el-form-item label="选择商品">
                <el-select v-model="model.hot.hotGoods" filterable multiple>
                    <el-option
                        v-for="item in goods"
                        :label="item.name"
                        :key="item._id"
                        :value="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    // 自己传自己
    props:{
        id:{
            type:String
        }
    },
    data(){
        return {
            model:{
                cheap:{
                    name:'',
                    cheapGoods:[]
                },
                hot:{
                    name:'',
                    hotGoods:[]
                }
            },  // 新建的分类名字
            goods:[]   //所有商品的数据
            
        }
    },
    created() {
        console.log(this.id)
        // 意思是如果id存在，就执行fetch方法
        this.id && this.fetch()
        this.fetchGood()
    },
    methods: {
        // 新增分类的方法,下面是老式写法，也可以用
        // 新的写法
        async save(){
            let res;
            if(this.id){
                res = await this.$axios.put(`rest/sales/${this.id}`,this.model)
            }else{
                res = await this.$axios.post(`rest/sales`,this.model)
            }
            this.$router.push('/sales/list')
            this.$message({
                    type:'success',
                    message:'保存成功'
                })
        },
        // 获取分类名字的方法
        async fetch(){
            // 只能这样写
            const res = await this.$axios.get(`rest/sales/${this.id}`)
            console.log(res)
            this.model = res.data
        },

        // 获取商品名字的方法
        async fetchGood(){
            const res = await this.$axios.get(`rest/items`)
            console.log(res)
            this.goods = res.data
        }
    },
}
</script>

<style>
    
</style>