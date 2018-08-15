const mongoose = require('mongoose');
const db = require('./db');

let articleSchema = new mongoose.Schema({
	title:String,
	time:String,
	content:String,
  original:String,
  type:String,
	des:String,
	list:String
});

let articleModel = db.model('article', articleSchema);

module.exports = articleModel;