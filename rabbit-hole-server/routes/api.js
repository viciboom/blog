const router = require('koa-router')();
const article = require('../controller/article');
router.prefix('/api');

// 插入文章接口
router.post('/article/insert', article.insertArticle);
// 获取文章列表
router.get('/article/getArticle', article.getArticle);
// 获取文章详情
router.get('/article/articleInfo', article.articleInfo);

module.exports = router;