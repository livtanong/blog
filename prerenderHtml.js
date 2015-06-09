var React = require('react');
var Index = require('./js/index.jsx');
var indexHtml = require('./index.html');
var indexComponent = React.renderToStaticMarkup(React.createElement(Index));
console.log(indexComponent);
module.exports = indexHtml.replace('Loading', indexComponent);

