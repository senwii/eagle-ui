
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
require('./lib/_include.less');

//import Mask from './lib/mask/mask';
import Grid from './lib/Grid';
import Col from './lib/Col';
import Row from './lib/Row';
import Button from './lib/Button';
import ButtonGroup from './lib/ButtonGroup';
import Input from './lib/Input.js';

//var apis = api();

window.eagleui={
    //Mask:Mask,
    Grid:Grid,
    Col:Col,
    Row:Row,
    Button:Button,
    ButtonGroup:ButtonGroup,
    Input:Input
};

if (typeof module !== 'undefined') {
    module.exports=eagleui;
}


