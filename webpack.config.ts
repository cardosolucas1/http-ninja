module.exports = {
  entry: './app/App.js',
  output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
  },
  loaders: [
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
  ]
}
