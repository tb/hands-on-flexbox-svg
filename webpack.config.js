var SvgStore = require('webpack-svgstore-plugin'),
//HtmlWebpackPlugin = require('html-webpack-plugin'),
path = require('path');


module.exports = {
  entry: {
    app:"./src/entry"
  },
  output:{
    path:__dirname + '/dist',
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {test: /\.scss$/, loader:"style!css!sass!"}
    ]
  },
  plugins: [

    new SvgStore(path.join(__dirname, 'svg-source', '**/*.svg'), path.join('sprites'), {
      name: '[hash].sprite.svg',
      chunk: 'app',
      prefix: 'icon-',
      svgoOptions: {
        // options for svgo, optional
      }
    })
  ]
};
