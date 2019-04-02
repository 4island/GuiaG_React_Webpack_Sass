const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        loader: 'html-loader',
        options: { minimize: true }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      // {
      //   test: __dirname,
      //   exclude: /(node_modules)/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env',
      //       '@babel/react', {
      //         'plugins': ['@babel/plugin-proposal-class-properties']
      //       }]
      //   }
      // }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: __dirname + './dist',
    hot: true
  }
};
