const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const client = path.resolve(__dirname);
const dist = path.resolve(__dirname, '../dist/client');
const images = path.resolve(__dirname, './static/images');

module.exports = {
    context: client,
    entry: {
        main: path.join(__dirname, 'src/index.js'),
    },
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: dist,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: dist,
        clientLogLevel: 'debug',
        hot: true,
        open: 'google-chrome',
        port: 8081,
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://localhost:8080'
      }
    }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'static/index.html') }),
        new CopyPlugin({
            patterns: [
              { from: path.join(images, 'logo.png'), to: path.join(dist, 'logo.png') },
              { from: path.join(images, 'diamond.png'), to: path.join(dist, 'diamond.png') },
              { from: path.join(images, 'heart.png'), to: path.join(dist, 'heart.png') },
              { from: path.join(images, 'heart&diamond.png'), to: path.join(dist, 'heart&diamond.png') }
            ],
          })
    ],
};
