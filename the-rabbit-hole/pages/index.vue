<template>
<section class="container">
    <el-row type="flex" justify="center" class="content-blog">
        <el-col :span="14">
            <article-card :list="list"></article-card>

            <div class="page">
                <el-pagination class="pagination" @current-change="pagination" layout="prev, pager, next" :page-size="10" :total="count"></el-pagination>
            </div>
        </el-col>
    </el-row>
</section>
</template>
<script>
import {baseurl} from '~/plugins/url.js'
import ArticleCard from '../components/articleCard.vue'

export default {
    data() {
        return {
            list: ''
        }
    },
    async asyncData({app}) {
        // 服务器端渲染数据
        let json = {page:1,pagesize:10}
        let {data} =await app.$axios.get(`${baseurl}/api/article/getFrontArticle`,{params:json});
        let {list,count} = data;
        let lately = list.slice(0,4);
        return {list,count,lately}
    },
    methods: {
        pagination(page) {
            let json = {page,pagesize:10}
            this.$axios.get(`${baseurl}/api/article/getFrontArticle`,{params:json}).then(res=>{
                let {error,count,list} = res.data;
                this.list =list;
            });
        },
    },
    components: {
        ArticleCard
    }
}
</script>

<style scoped lang="less">
.container {
    margin: 0;
    width: 100%;
    min-height: 700px;
    padding: 50px 0 50px 0;
}
.content-blog {	/*blog content*/
    margin-top: 1.5rem;
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
