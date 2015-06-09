var React = require('react');
var Index = require('./src/js/index.jsx');

var indexHtml = require('./src/index.html');
var indexComponent = React.renderToStaticMarkup(React.createElement(Index));
module.exports = indexHtml.replace('Loading', indexComponent);

