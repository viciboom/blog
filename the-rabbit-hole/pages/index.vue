<template>
<section class="container">
    <el-row type="flex" justify="center" class="content-blog">
        <el-col :span="10">
            <nuxt-link  v-for="item in list" :key="item._id" :to="{name:'detail',params:{id:item._id}}" class="box-href">
                <el-card class="box-card" shadow="hover">
                <h2 class="box-title">{{item.title}}</h2>
                <div class="box-icon">
                    <span><i class="el-icon-date"></i>&nbsp;{{item.time}}</span>
                </div>
              <div class="box-content">{{item.des}}</div>
            </el-card>
        </nuxt-link>

        <el-pagination class="pagination" @current-change="pagination" background layout="prev, pager, next" :page-size="5" :total="count"></el-pagination>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import {baseurl} from '~/plugins/url.js'

export default {
    data() {
        return {

        }
    },
    async asyncData({app}) {
      // 服务器端渲染数据
      let json = {page:1,pagesize:5}
      let {data} =await app.$axios.get(`${baseurl}/api/article/getFrontArticle`,{params:json});
      let {list,count} = data;
      let lately = list.slice(0,4);
      return {list,count,lately}
    },
    methods: {
        pagination(page) {
            let json = {page,pagesize:5}
            this.$axios.get(`${baseurl}/api/article/getFrontArticle`,{params:json}).then(res=>{
                let {error,count,list} = res.data;
                this.list =list;
            });
        }
    }
}
</script>

<style scoped lang="less">
.Animation(@second) {
	  transition: all ease @second;
}
.content-blog {	/*blog content*/
    margin-top: 1.5rem;
    .box-href {
        text-decoration: none;
        .box-card {
            margin-bottom:1.5rem;
        }
        .box-title {	/*blog content title*/
            text-decoration:none;
            color:#3D5064;
            margin:0;
            &:hover {
                .Animation(0.5s);
                color: #ffd04b;
            }
        }
        .box-icon {
            font-size:12px;
            padding:0.5rem 0 0.3rem 0;
            span {
                color:#999;
                padding-right:0.5rem;
            }
        }
        .box-content {	/*blog content text*/
            color:#666;
            &:hover {
                .Animation(0.5s);
                color:#ffd04b;
            }
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            -webkit-line-clamp: 3;
        }
    }
}
</style>
