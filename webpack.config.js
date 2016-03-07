var SvgStore = require('webpack-svgstore-plugin'),
    autoprefixer = require('autoprefixer'),
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
      {test: /\.scss$/, loader:"style!css?sourceMap!postcss!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true"},
      {test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader"}

    ]
  },
  devtool:"#inline-source-map",
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new SvgStore(
      path.join(__dirname, 'src/icons/*.svg'),
      path.join(__dirname, 'dist/icons'),
      {
        name: '[hash].icons.svg',
        chunk: 'app',
        prefix: '',
        svgoOptions: {
          plugins: [
            {removeStyleElement: true}
          ]
        }
      })
  ]
};
