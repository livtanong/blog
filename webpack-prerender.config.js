var config = require('./webpack-base.config.js')({
  prod: false,
  prerender: true
});

module.exports = config;
