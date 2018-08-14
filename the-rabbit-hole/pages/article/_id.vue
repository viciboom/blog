<template>
<div>
    <el-row type="flex" justify="center">
    <el-col :span="14" class="detail_title">
        <div>{{title}}</div>
        <div class="time">发布时间：{{time}}&nbsp;&nbsp;&nbsp;&nbsp;分类：{{list === 'Front' ? '前端文章' : '后端文章'}}</div>
    </el-col>

    </el-row>
    <el-row type="flex" justify="center">
    <el-col :span="14" class="detail_content">
        <el-card>
            <div v-show="!content">暂无文章数据...</div>
            <div v-html="content" class="md markdown-body"></div>
        </el-card>
    </el-col>
    </el-row>
</div>
</template>

<script>
import {baseurl} from '../../plugins/url.js'
export default {
	data() {
		return {
            active:'index'
        }
	},
	async asyncData({app,params}) {
		let json = {id:params.id}
		let result = await app.$axios.get(`${baseurl}/api/article/getFrontArticleInfo`,{params:json});
        let {error,info} = result.data;
        let {content,des,list,time,title} = info[0];
		return {title,des,content,list,time}
	},
    head() {
		return {
			title:this.title,
            meta:[
				{hid:'description',name:'description',content:`${this.des}`},
				{hid:'author',content:'brian'}
			]
		}
	},
    components:{
      
    }
}
</script>
<style lang="less">
@color:#3D5064;
//#a8a8a8
//#F0F2F5
body,html {
	background:#fff;
	height:100%;
}
.detail_title {
	margin:2rem 0 3rem 0;
	font-size:31px;
	font-weight: bold;
	padding-bottom:1rem;
	color:@color;
	border-bottom:1px dashed @color;
	text-align: center;
	.time {
		margin:1.5rem 0 0 0;
		font-size:12px;
		font-weight:normal;
	}
}
.detail_content {
	background:#fff;
	text-align:left;
	margin-bottom:5rem;
}
</style>
