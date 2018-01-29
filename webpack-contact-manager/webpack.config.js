var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './build/js/bundle.js'
    },
    resolve: {
        alias: {
            jquery:   __dirname + '/src/vendor/jquery/jquery-2.1.3.min.js',
            lodash:   __dirname + '/src/vendor/lodash/lodash.min.js',
            underscore: 'lodash',
            backbone: __dirname + '/src/vendor/backbone/backbone-min.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash',
            Backbone: 'backbone'
        })
    ]
};
