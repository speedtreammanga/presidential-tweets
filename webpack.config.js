const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: {
    bundle: [
      path.join(__dirname, "src", "index.js"),
      path.join(__dirname, "src", "app.scss")
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle-[hash:8].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      src: path.resolve(__dirname, 'src'),
      store: path.resolve(__dirname, 'src/store'),
    },
  },
  devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'build'),
		port: 3000,
  },
  plugins: [
		new CleanWebpackPlugin({
			dry: false,
			verbose: true,
		}),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
