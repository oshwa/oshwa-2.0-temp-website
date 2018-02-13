module.exports = {
  context: __dirname,
  entry: "./source/_js/entry.js",
  output: {
    path: __dirname + "/source/assets/",
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      }
    }]
  }
};