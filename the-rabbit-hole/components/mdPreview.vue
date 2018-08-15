<template>
  <div id="md-preview">
    <link href="//cdn.bootcss.com/github-markdown-css/2.4.1/github-markdown.css" rel="stylesheet">
    <section id="markdown-preview-body" class="preview markdown-body" v-html="content" v-highlight>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['content']
    
  }
</script>

<style scoped lang="less">
#md-preview {
  position: relative;
  width: 100%;
  margin-top: 15px;
}
</style>