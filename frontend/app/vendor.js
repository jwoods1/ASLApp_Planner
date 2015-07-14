module.exports = function(){
	global.$ = global.jQuery = require('jquery');  
	/* font */
	require('../node_modules/materialize-sass/font/material-design-icons/Material-Design-Icons.eot');
	require('../node_modules/materialize-sass/font/material-design-icons/Material-Design-Icons.svg');
	require('../node_modules/materialize-sass/font/material-design-icons/Material-Design-Icons.ttf');
	require('../node_modules/materialize-sass/font/material-design-icons/Material-Design-Icons.woff');
	/* CSS */
	var css = require("!style!css!sass!./style.scss");

 	/* JS */
 	require('jquery');
 	require('angular');
 	require('angular-ui-router');
 	
 	
};