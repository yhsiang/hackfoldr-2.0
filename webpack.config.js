var webpack = require("webpack");
// var jquery = require("jquery");
var path = require("path");
var SASS_LOADER = "style-loader!css-loader!sass-loader?" + JSON.stringify({
  indentedSyntax: "sass",
  outputStyle: "expanded",
  includePaths: [
    path.resolve(__dirname, "./node_modules/compass-mixins/lib")
  ]
});

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader:"6to5-loader"},
      {test: /\.sass?$/, loader: SASS_LOADER },
    ]
  },
  externals: {
    "jquery": "jQuery"
  }
}