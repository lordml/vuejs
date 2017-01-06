//console.log(0);

require('./styles/usage/app.scss');
var common = require('./scripts/utils/util-common.js');
var html = require('./scripts/tpls/index.string');


common.render(html)
require('./scripts/views/index.js');
//console.log(html)
//var string = require('./scripts/common');
//console.log(string);

//import String from './scripts/common';
//console.log(String);

/*var common = require('./scripts/common');
common.getList();*/
