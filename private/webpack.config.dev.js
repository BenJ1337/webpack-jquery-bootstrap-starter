const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: ['./src/js/main-dev.js'],
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'main-dev.js',
    },
    module: {
        rules: [
            {
                test: /\.(s)?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};