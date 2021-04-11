const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./src/js/main.js', './src/css/main.scss'],
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'main.js',
    },
    target: 'node', // default: web
    module: {
        rules: [
            {
                test: /\.(s)?css$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'styles.css',
                    }
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};