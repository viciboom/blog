const router = require('koa-router')();
const article = require('../controller/article');
router.prefix('/api');

// 插入文章接口
router.post('/article/insert', article.insertArticle);
router.get('/article/getArticle', article.getArticle);

module.exports = router;