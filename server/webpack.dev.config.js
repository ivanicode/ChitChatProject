const path = require('path');

module.exports = {
    entry: path.resolve('./server/src/index.js'),
    mode: 'development',
    output: {
        filename: 'server.js',
        path: path.resolve('./dist/server'),

    },
    resolve: {
        modules: ['node_modules', path.resolve()],
        extensions: ['.js', '.json'],
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
