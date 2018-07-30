const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'main')],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public', 'assets', 'JS')
  },
  resolve: {
    extensions: ['.json', '.js', '.css', '.hbs'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('public', 'assets', 'JS')
  },
  watch: true,
  module: {
    rules: [{
      test: /\.hbs$/,
      loader: "handlebars-loader"
    }]
  }
}