<template>
  <div id="article-card">
    <nuxt-link  v-for="item in list" :key="item._id" :to="{name:'article-id',params:{id:item._id}}" class="box-href">
      <el-card class="box-card" shadow="hover">
        <h2 class="box-title">{{item.title}}</h2>
        <div class="box-icon">
          <span><i class="el-icon-date"></i>&nbsp;{{item.time}}</span>
        </div>
        <div class="box-content">{{item.des}}</div>
      </el-card>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'article-card',
    props: ['list'],
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
.Animation(@second) {
	    transition: all ease @second;
}
.box-href {
  text-decoration: none;
  .box-card {
    margin-bottom:1.5rem;
  }
  .box-title {	/*blog content title*/
    text-decoration:none;
    color:#555;
    margin:0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    &:hover {
      .Animation(0.5s);
      color: 	#8B3A3A;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      font-weight: bold;
      color: #2d2d34;
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
      color:	#8B3A3A;
    }
    overflow: hidden;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    // text-overflow: ellipsis;
    // white-space: nowrap;
    // -webkit-line-clamp: 3;
  }
}
</style>