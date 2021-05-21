const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./index.ts"),
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
    }),

    new HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".js"],
  },

  devServer: {
    port: 2021,
    open: true,
    hot: true,
    compress: true,
  },
};
