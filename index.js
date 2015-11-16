
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

// How to use a foreign module ?
// Take 'jquery' for example:
//
// 1. to install a dependency, exec the command in your terminal
// ```bash
// cortex install jquery --save
// ```

// 2. use `require(id)`:

// var $ = require('jquery');


// 3. define exports:
// `exports` is the API of the current module,
// If another module `require('eagle-ui')`, it returns `exports`

// exports.my_method = function() {
// };

// or you could code like this:

// module.exports = {
// 	 my_method: function() {
// 	 }
// };

// But, NEVER do this: (Why?)
// exports = {my_method: ...}
import include from './lib/_include.less';

//import Mask from './lib/mask/mask';

export {Grid} from './lib/Grid';
export {Col} from './lib/Col';
export {Row} from './lib/Row';
export {Button} from './lib/Button';
export {ButtonGroup} from './lib/ButtonGroup';
export {Input} from './lib/Input.js';
export {RadioGroup} from './lib/RadioGroup.js';
export {Label} from './lib/Label.js';
export {Dialog} from './lib/Dialog .js';
export {Crumb} from './lib/Crumb.js';
export {Search} from './lib/Search.js';
export {LabelGroup} from './lib/LabelGroup.js';
export {Toast} from './lib/Toast.js';
export {Tab} from './lib/Tab.js';
export {Tabset} from './lib/Tabset.js';

//var apis = api();

//
//if (typeof module !== 'undefined') {
//    module.exports=eagleui;
//}

//import Grid from './lib/Grid';
//import Col from './lib/Col';
//import Row from './lib/Row';
//import Button from './lib/Button';
//import ButtonGroup from './lib/ButtonGroup';
//import Input from './lib/Input.js';
//import Dialogue from './lib/Dialog .js';
//import Crumb from './lib/Crumb.js';
//import Search from './lib/Search.js'



