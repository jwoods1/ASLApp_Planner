//All vendor code
require('./vendor')();

//Main app
var alert = require('./app.module');

//config
require('./router.config')

//Controller
require('./home/homeCtrl');