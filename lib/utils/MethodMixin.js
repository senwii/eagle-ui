/**
 * Created by mac on 16/1/3.
 */
"use strict";

exports.__esModule = true;

exports["default"] = function (obj) {
    var methods = {
        init: true,
        loaded: true,
        close: true,
        success: true,
        cancel: true,
        checked: true,
        active: true,
        getValue: true,

        update: true,
        "delete": true,
        query: true,
        add: true,
        insert: true,
        ajax: true,

        "default": true

        //method
    };

    obj.prototype.methods = methods;
};

module.exports = exports["default"];