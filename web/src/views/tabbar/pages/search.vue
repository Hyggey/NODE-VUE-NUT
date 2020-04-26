<template>
    <div class="search_box">
        <van-nav-bar placeholder  title="搜索" fixed :left-arrow="$route.query.msg?true:false" @click-left="onClickLeft">
        </van-nav-bar>
        <van-search
            v-model="content"
            shape="round"
            background="#fff"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            />
        <div v-if="searchData.length>0" class="search_container">
            <zz-good v-for="(v,k) in searchData" :key="k" :item="v"></zz-good>
        </div>
        <div class="empty" v-else>
            <van-empty description="空空如也" />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            content:this.$route.query.msg?this.$route.query.msg:'',
            searchData:''
        }
    },
    created() {
        if(this.content){
            this.onSearch()
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        // 搜索按钮
        async onSearch(){
            if(this.content.trim()){
                const res = await this.$axios.post(`/msg/${this.content}`)
            console.log(res.data)
            this.searchData = res.data
            }
            
        }
    },
}
</script>

<style lang="less">
    .search_box{
        height: 100vh;
        .van-nav-bar{
            background: #e43a3d;
            .van-nav-bar__arrow{
                color: #fff;
                font-size: 1.2rem;
            }
            .van-nav-bar__title{
                color: #ffffff;
            }
        }
        .search_container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 1em;
        }
        .empty{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>