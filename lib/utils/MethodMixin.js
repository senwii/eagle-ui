"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = function _default(obj) {
    var methods = {
        initCallback: true,
        loadedCallback: true,
        closeCallback: true,
        successCallback: true,
        cancelCallback: true,
        checkedCallback: true,
        activeCallback: true,
        getValueCallback: true,

        updateCallback: true,
        deleteCallback: true,
        queryCallback: true,
        addCallback: true,
        insertCallback: true,
        ajaxCallback: true,

        defaultCallback: true

        //method
    };

    obj.prototype.methods = methods;
};

/**
 * Created by mac on 16/1/3.
 */
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/panqianjin/work/eagle-ui/src/utils/MethodMixin.js");
}();

;