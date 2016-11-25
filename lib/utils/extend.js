'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
}

/**
*  A recursive merge between two objects.
*
*  @param base     - the object whose properties are to be overwritten. It
*                    should be either the root level or some nested level.
*  @param override - an object containing properties to be overwritten. It
*                    should have the same structure as the object object.
*/
var extend = function extend(base, override) {

  var mergedObject = {};

  //Loop through each key in the base object
  Object.keys(base).forEach(function (key) {

    var baseProp = base[key];
    var overrideProp = void 0;

    if (isObject(override)) overrideProp = override[key];

    //Recursive call extend if the prop is another object, else just copy it over
    mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ? extend(baseProp, overrideProp) : baseProp;
  });

  //Loop through each override key and override the props in the
  //base object
  if (isObject(override)) {

    Object.keys(override).forEach(function (overrideKey) {

      var overrideProp = override[overrideKey];

      //Only copy over props that are not objects
      if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
        mergedObject[overrideKey] = overrideProp;
      }
    });
  }

  return mergedObject;
};

module.exports = extend;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isObject, 'isObject', '/Users/panqianjin/work/eagle-ui/src/utils/extend.js');

  __REACT_HOT_LOADER__.register(extend, 'extend', '/Users/panqianjin/work/eagle-ui/src/utils/extend.js');
}();

;