var config = require('./webpack-base.config.js')({
  prod: true,
  prerender: false
});

module.exports = config;
