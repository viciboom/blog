const article = require('../models/article');



/**
 *
 * @method insert
 * @param {object} ctx
 * @param {object} next
 */
let insertArticle = async (ctx, next) => {
  try {
    let req = ctx.request.body;
    let {title, content, type, date, des, original, list} = req;
    const front = await article.update({title}, {$set:{title, content, type, time:date, des,  original, list}},{upsert:true});
    let {ok} = front;
    ctx.body = {
      error: 0,
      success: ok
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}

/**
 *
 * @param {number|null} pagesize
 * @param {number|null} page
 * @param {string} type
 */
let getArticle = async (ctx, next) => {
  try {
    let req = ctx.request.query;
    let { parseInt } = Number;
    let { type } = req
    let page = parseInt((req.page - 1) * req.pagesize);
    let pagesize = parseInt(req.pagesize);
    let list = await article.find({type: type}, {__v:0, content: 0, original: 0, list:0}).skip(page).limit(pagesize).sort({_id: -1})
    let count = await article.count({type: type});
    ctx.body = {
      error: 0,
      count,
      list
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}

/**
 *
 * @param {String} id
 * @return {object|null}
 */
let articleInfo = async (ctx, next) => {
  try {
    let req = ctx.request.query;
    let {id} = req;
    let result = await article.find({_id: id});
    ctx.body = {
      error: 0,
      info: result
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      errpr: e
    }
  }
}


module.exports = {
  insertArticle,
  getArticle,
  articleInfo
}