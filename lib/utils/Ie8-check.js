'use strict';

exports.__esModule = true;
exports['default'] = isIE;

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
}

module.exports = exports['default'];