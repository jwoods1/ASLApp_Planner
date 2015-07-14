'use strict'
var webpack = require('webpack'),
path = require('path');

var PATHS = {
	app: __dirname + '/app'
};

module.exports = {

	context: PATHS.app,
     entry: {
           app: ['webpack/hot/dev-server','./app.js']
    },
    output: {
        path: PATHS.app,
        filename: 'bundle.js'
    },
	module: {
	    loaders: [
	      { test: /\.coffee$/, loader: 'coffee-loader' },
	      { test: /\.js$/, loader: 'babel-loader' }
	    ]
	},
	resolve: {
	    // you can now require('file') instead of require('file.coffee')
	    extensions: ['', '.js', '.json'] 
	  }
};