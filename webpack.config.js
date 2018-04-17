var webpack = require('webpack');

module.exports = {
  entry: {
    site: './source/javascripts/site.js',
    styles: './source/assets/stylesheets/styles.scss',
  },

  loaders: [
    {
      test: /.*\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style",
        "css!sass?sourceMap&includePaths[]=" + __dirname + "/node_modules"
      )
    },
    // Load plain-ol' vanilla CSS
    { test: /\.css$/, loader: "style!css" },
  ]

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },
};