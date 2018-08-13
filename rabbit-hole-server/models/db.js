const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://127.0.0.1/myblog');
const chalk = require('chalk');
const success = chalk.bold.green;
const error = chalk.bold.red;

db.once('open', (callback) => {
  console.log(success('success'))
})

db.on('error', (callback) => {
  console.log(error('error'))
})

module.exports = db;