const path = require('path');

module.exports = {
    mode: 'production',
    target: 'web',
    entry: [
        __dirname + '/src/styles/style.scss'
    ],
    output: {
        path: path.resolve(__dirname),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'file-loader',
                    options: { outputPath: 'css/', name: '[name].css' }
                },
                'sass-loader'
            ]
        }]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname),
        },
        compress: true,
        port: 8000,
    },
};