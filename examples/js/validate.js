(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/11/4.
	 */
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _lib_includeLess = __webpack_require__(24);

	var _lib_includeLess2 = _interopRequireDefault(_lib_includeLess);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _libInputJs = __webpack_require__(38);

	var _libInputJs2 = _interopRequireDefault(_libInputJs);

	var _libButtonJs = __webpack_require__(33);

	var _libButtonJs2 = _interopRequireDefault(_libButtonJs);

	var _libRowJs = __webpack_require__(34);

	var _libRowJs2 = _interopRequireDefault(_libRowJs);

	var _libPanelPanelJs = __webpack_require__(66);

	var _libPanelPanelJs2 = _interopRequireDefault(_libPanelPanelJs);

	var _libPanelPanelContentJs = __webpack_require__(67);

	var _libPanelPanelContentJs2 = _interopRequireDefault(_libPanelPanelContentJs);

	var _libColJs = __webpack_require__(35);

	var _libColJs2 = _interopRequireDefault(_libColJs);

	var _libGridJs = __webpack_require__(36);

	var _libGridJs2 = _interopRequireDefault(_libGridJs);

	var _libRadioGroupJs = __webpack_require__(46);

	var _libRadioGroupJs2 = _interopRequireDefault(_libRadioGroupJs);

	var _libValidatorPanelJs = __webpack_require__(68);

	var _libValidatorPanelJs2 = _interopRequireDefault(_libValidatorPanelJs);

	var _libCalendarPanelJs = __webpack_require__(39);

	var _libCalendarPanelJs2 = _interopRequireDefault(_libCalendarPanelJs);

	var _libTabJs = __webpack_require__(57);

	var _libTabJs2 = _interopRequireDefault(_libTabJs);

	var _libTabsetJs = __webpack_require__(58);

	var _libTabsetJs2 = _interopRequireDefault(_libTabsetJs);

	var _libDialogJs = __webpack_require__(45);

	var _libDialogJs2 = _interopRequireDefault(_libDialogJs);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);

	        this.rules = {
	            //key对应的是表单元素的name
	            calendar: {
	                //组件默认规则
	                required: true
	            },
	            userName: {
	                required: true
	            },
	            checkbox: {
	                required: true,
	                //自定义规则
	                isValueToNumber: {
	                    text: 'value值不是字符串',
	                    rule: function rule(value) {
	                        console.dir(value);
	                        return isNaN(value);
	                    }
	                }
	            },
	            date: {
	                date: true
	            },
	            number: {
	                number: true,
	                digits: true
	            },
	            equalTo: {
	                digits: true,
	                equalTo: {
	                    params: '[name="number"]'
	                }

	            },
	            minlength: {
	                minlength: {
	                    params: 10
	                },
	                maxlength: {
	                    params: 15
	                }
	            },
	            email: {
	                email: true
	            }
	        };

	        this.state = {
	            showTab: 0,
	            update: 'uid',
	            show: false
	        };
	    }

	    Demo.prototype.show = function show(value, text, target, active) {
	        console.dir(value);
	    };

	    Demo.prototype.change = function change(value) {
	        this.setState({
	            showTab: value,
	            update: 'uid' + +new Date(),
	            show: false
	        });
	    };

	    Demo.prototype.submit = function submit(vals) {
	        alert('验证成功' + JSON.stringify(vals));
	    };

	    Demo.prototype.showMask = function showMask() {
	        this.setState({
	            show: true
	        });
	    };

	    Demo.prototype.checktab = function checktab() {
	        if (this.state.showTab == '1') {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    _libRowJs2['default'],
	                    null,
	                    _react2['default'].createElement(
	                        _libColJs2['default'],
	                        null,
	                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入姓名', name: 'userName', 'data-validate': true })
	                    )
	                ),
	                _react2['default'].createElement(
	                    _libRowJs2['default'],
	                    null,
	                    _react2['default'].createElement(
	                        _libColJs2['default'],
	                        null,
	                        _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '1', 'data-validate': true }),
	                        _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '2', 'data-validate': true }),
	                        _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '3', 'data-validate': true }),
	                        _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '4', 'data-validate': true })
	                    )
	                )
	            );
	        } else {
	            return null;
	        }
	    };

	    Demo.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _libPanelPanelJs2['default'],
	            null,
	            _react2['default'].createElement(
	                _libGridJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _libTabsetJs2['default'],
	                    null,
	                    _react2['default'].createElement(
	                        _libTabJs2['default'],
	                        { heading: 'demo1' },
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(
	                                    _libPanelPanelContentJs2['default'],
	                                    null,
	                                    _react2['default'].createElement(
	                                        _libRadioGroupJs2['default'],
	                                        { defaultChecked: this.state.showTab + '', name: 'radio-foot', getValueCallback: this.change.bind(this) },
	                                        _react2['default'].createElement(_libInputJs2['default'], { type: 'radio', label: '显示第一个表单元素', value: '0' }),
	                                        _react2['default'].createElement(_libInputJs2['default'], { type: 'radio', label: '显示第二个表单元素', value: '1' })
	                                    )
	                                )
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                { sm: 5, end: true },
	                                _react2['default'].createElement(
	                                    _libValidatorPanelJs2['default'],
	                                    { rules: this.rules, submitElement: '#submit', direction: 'right', id: 'testFrom', update: this.state.update, submitCallback: this.submit.bind(this) },
	                                    _react2['default'].createElement(
	                                        _libRowJs2['default'],
	                                        null,
	                                        _react2['default'].createElement(
	                                            _libColJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libPanelPanelContentJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(
	                                                    _libRowJs2['default'],
	                                                    null,
	                                                    _react2['default'].createElement(
	                                                        _libColJs2['default'],
	                                                        null,
	                                                        _react2['default'].createElement(
	                                                            _libCalendarPanelJs2['default'],
	                                                            null,
	                                                            _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请选择日期', icon: 'calendar', name: 'date', style: { width: '150px' }, 'data-validate': true })
	                                                        )
	                                                    )
	                                                ),
	                                                this.checktab(),
	                                                _react2['default'].createElement(
	                                                    _libRowJs2['default'],
	                                                    null,
	                                                    _react2['default'].createElement(
	                                                        _libColJs2['default'],
	                                                        null,
	                                                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入有效的号码', name: 'number', 'data-validate': true })
	                                                    )
	                                                ),
	                                                _react2['default'].createElement(
	                                                    _libRowJs2['default'],
	                                                    null,
	                                                    _react2['default'].createElement(
	                                                        _libColJs2['default'],
	                                                        null,
	                                                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入有效的号码', name: 'equalTo', 'data-validate': true })
	                                                    )
	                                                ),
	                                                _react2['default'].createElement(
	                                                    _libRowJs2['default'],
	                                                    null,
	                                                    _react2['default'].createElement(
	                                                        _libColJs2['default'],
	                                                        null,
	                                                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '最大最小字符10-15', name: 'minlength', 'data-validate': true })
	                                                    )
	                                                ),
	                                                _react2['default'].createElement(
	                                                    _libRowJs2['default'],
	                                                    null,
	                                                    _react2['default'].createElement(
	                                                        _libColJs2['default'],
	                                                        null,
	                                                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入您的email', name: 'email', 'data-validate': true })
	                                                    )
	                                                ),
	                                                _react2['default'].createElement(
	                                                    _libRowJs2['default'],
	                                                    null,
	                                                    _react2['default'].createElement(
	                                                        _libColJs2['default'],
	                                                        null,
	                                                        _react2['default'].createElement(
	                                                            _libButtonJs2['default'],
	                                                            { radius: true, egSize: 'xs', id: 'submit' },
	                                                            '点我提交表单'
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _libTabJs2['default'],
	                        { heading: 'demo2' },
	                        _react2['default'].createElement(
	                            _libPanelPanelContentJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libRowJs2['default'],
	                                null,
	                                _react2['default'].createElement(
	                                    _libColJs2['default'],
	                                    null,
	                                    _react2['default'].createElement(
	                                        _libButtonJs2['default'],
	                                        { onClick: this.showMask.bind(this) },
	                                        '弹出验证表单'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                _libDialogJs2['default'],
	                { type: 'mask', show: this.state.show },
	                _react2['default'].createElement(
	                    _libGridJs2['default'],
	                    { style: { width: '300px' } },
	                    _react2['default'].createElement(
	                        _libValidatorPanelJs2['default'],
	                        { rules: this.rules, submitElement: '#ssubmit', direction: 'top', id: 'testDialogFrom', submitCallback: this.submit.bind(this) },
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入姓名', name: 'userName', 'data-validate': true })
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入有效的号码', name: 'number', 'data-validate': true })
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入有效的号码', name: 'equalTo', 'data-validate': true })
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '最大最小字符10-15', name: 'minlength', 'data-validate': true })
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入您的email', name: 'email', 'data-validate': true })
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libRowJs2['default'],
	                            null,
	                            _react2['default'].createElement(
	                                _libColJs2['default'],
	                                null,
	                                _react2['default'].createElement(
	                                    _libButtonJs2['default'],
	                                    { radius: true, egSize: 'xs', id: 'ssubmit' },
	                                    '点我提交表单'
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    };

	    return Demo;
	})(_react.Component);

	ReactDOM.render(_react2['default'].createElement(Demo, null), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(31);

	var consts = _constantsJs.classConstants;

	exports['default'] = function (obj) {
	    /**
	     * 给className添加前缀后返回className
	     * @method getClassName
	     * @param name {String} 从该字符串中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassName = function (name) {
	        var _this2 = this;

	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        if (name) {
	            var _ret = (function () {
	                name = name.split(' ');
	                var list = [],
	                    _this = _this2;
	                name.forEach(function (item) {
	                    list.push(_this.setPrefix(item, pre));
	                });

	                return {
	                    v: list.join(' ')
	                };
	            })();

	            if (typeof _ret === 'object') return _ret.v;
	        }
	        return '';
	    };
	    /**
	     * 验证props中的样式是否符合规则
	     * @method getClassNames
	     * @param props {Object} 从该对象中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassNames = function (props) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var clazz = {};
	        for (var item in props) {
	            if (props[item] && item === consts[item]) {
	                clazz[this.getClassName(item, pre)] = true;
	            }
	        }
	        return clazz;
	    };
	    /**
	     * 给多个className添加前缀后返回
	     * @method getClassNamesForArguments
	     * @param arguments {Arguments String} 多个class参数
	     * @return {String}
	     * */
	    obj.prototype.getClassNamesForArguments = function () {
	        var arg = arguments;
	        var arr = [];
	        var _this = this;

	        if (arg && arg.length > 0) {
	            for (var i = 0, len = arg.length; i < len; i++) {
	                if (arg[i]) {
	                    arr.push(_this.getClassName(arg[i]));
	                }
	            }
	        }

	        return arr.join(' ');
	    };
	    /**
	     * 设置css类名前缀
	     * @method setPrefix
	     * @param name{String} class名字
	     * @param pre{Boolean} 是否添加前缀
	     * @return {String}
	     * */
	    obj.prototype.setPrefix = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var str = consts.classNameNamespace;
	        if (pre && this.props.classPrefix) {
	            str += '-' + this.props.classPrefix;
	        }
	        if (name != this.props.classPrefix) {
	            str += '-' + name;
	        }

	        return str;
	    };

	    /**
	     * 检查元素是否存在样式名
	     * @method hasClass
	     * @param obj {Object} 元素
	     * @param cls {String} 需要检查的样式名
	     * @return {Boolean}
	     * */
	    obj.prototype.hasClass = function () {
	        return arguments[0].className.match(new RegExp('(\\s|^)' + arguments[1] + '(\\s|$)'));
	    };

	    /**
	     * 给元素增加一个样式名
	     * @method addClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.addClass = function (obj, cls) {
	        if (!this.hasClass(obj, cls)) {
	            obj.className = (obj.className + " " + cls).replace(/\s{2,}/g, " ");
	        }
	    };
	    /**
	     * 给元素删除一个样式名
	     * @method removeClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.removeClass = function () {
	        if (this.hasClass(arguments[0], arguments[1])) {
	            var reg = new RegExp('(\\s|^)' + arguments[1] + '(\\s|$)');
	            arguments[0].className = arguments[0].className.replace(reg, ' ').split(" ").join(" ");
	        }
	    };
	};

	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 15/9/7.
	 */
	//classname前缀

	'use strict';

	exports.__esModule = true;
	function setNamespace(className) {
	  return '' + className;
	}
	var CLASS_NAME_NAMESPACE = 'eg';

	var classConstants = {
	  /**
	   * 状态
	   * */
	  //禁用
	  disabled: setNamespace('disabled'),
	  //启用
	  enable: setNamespace('enable'),
	  block: setNamespace('block'),
	  //垂直
	  tacked: setNamespace('tacked'),
	  //宽度自适应
	  justify: setNamespace('justify'),
	  //选中
	  active: setNamespace('active'),
	  //大小
	  size: setNamespace('size'),
	  //圆形样式
	  radius: setNamespace('radius'),
	  //隨圆
	  round: setNamespace('round'),
	  //向上箭头
	  'arrow-up': setNamespace('arrow-up'),
	  //向下箭头
	  'arrow-down': setNamespace('arrow-down'),

	  /**
	   * 颜色
	   * */
	  //成功样式
	  success: setNamespace('success'),
	  //错误红色
	  error: setNamespace('error'),
	  //警告warning
	  warning: setNamespace('warning'),
	  //危险danger
	  danger: setNamespace('danger'),
	  //展示
	  show: setNamespace('show'),
	  white: setNamespace('white'),
	  classNameNamespace: CLASS_NAME_NAMESPACE
	};
	exports.classConstants = classConstants;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 按钮组件
	 * @class Button
	 * @module form
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/button.js {js}
	 * @demo button.html {html}
	 * @show true
	 * */

	var Button = (function (_Component) {
	  _inherits(Button, _Component);

	  _createClass(Button, null, [{
	    key: 'propTypes',

	    //static mixins = [ClassNameMixin];
	    value: {
	      /**
	       * 按钮尺寸,分别为xs、sm、lg
	       * @property egSize
	       * @type String
	       * @default sm
	       * */
	      egSize: _react.PropTypes.string,
	      /**
	       * 禁用
	       * @property disabled
	       * @type Boolean
	       * @default false
	       * */
	      disabled: _react.PropTypes.bool,
	      /**
	       * 启用
	       * @property enable
	       * @type Boolean
	       * @default true
	       * */
	      enable: _react.PropTypes.bool,
	      //success:PropTypes.bool,
	      /**
	       * 选中
	       * @property active
	       * @type Boolean
	       * @default false
	       * */
	      active: _react.PropTypes.bool,
	      /**
	       * 圆角
	       * @property radius
	       * @type Boolean
	       * @default false
	       * */
	      radius: _react.PropTypes.bool,
	      /**
	       * 椭圆角
	       * @property round
	       * @type Boolean
	       * @default false
	       * */
	      round: _react.PropTypes.bool,
	      //error:PropTypes.bool,
	      //warning:PropTypes.bool,
	      //danger:PropTypes.bool,
	      /**
	       * 颜色[error、warning、danger、link、gray、white、success、'']
	       * @property egStyle
	       * @type Boolean
	       * @default ''
	       * */
	      egStyle: _react.PropTypes.string,
	      /**
	       * 样式前缀
	       * @property classPrefix
	       * @type String
	       * @default btn
	       * */
	      classPrefix: _react.PropTypes.string,
	      /**
	       * 标签tagName
	       * @property componentTag
	       * @type String
	       * @default a
	       * */
	      componentTag: _react.PropTypes.string,
	      /**
	       * 块级显示
	       * @property block
	       * @type Boolean
	       * @default false
	       * */
	      block: _react.PropTypes.bool,
	      egHref: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      egSize: 'default',
	      classPrefix: 'btn',
	      componentTag: 'a'
	    },

	    //lg
	    //sm
	    //xs this.getClassName('demo'); eg-demo
	    enumerable: true
	  }]);

	  function Button(props, context) {
	    _classCallCheck(this, _Button);

	    _Component.call(this, props, context);
	    //this.classNameMixin = new ClassNameMixin(this.props);
	  }

	  Button.prototype.render = function render() {
	    //const {} = this.props;
	    //什么颜色，大小  类型
	    var _props = this.props;
	    var egSize = _props.egSize;
	    var Component = _props.componentTag;
	    var egStyle = _props.egStyle;

	    //let  size= this.classNameMixin.getClassName(egSize);

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, { className: _classnames2['default'](this.getClassNamesForArguments('btn', egSize, egStyle), this.getClassNames(this.props)) }),
	      this.props.children
	    );
	  };

	  var _Button = Button;
	  Button = _utilsClassNameMixin2['default'](Button) || Button;
	  return Button;
	})(_react.Component);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	//import RowLess from './row.less';
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 行
	 * @class Row
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Row = (function (_Component) {
	    _inherits(Row, _Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        _Component.apply(this, arguments);
	    }

	    Row.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default']('eg-row', 'clearfix', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Row, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

	    return Row;
	})(_react.Component);

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 列
	 * @class Col
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Col = (function (_Component) {
	    _inherits(Col, _Component);

	    function Col() {
	        _classCallCheck(this, Col);

	        _Component.apply(this, arguments);
	    }

	    Col.prototype.getWidthClass = function getWidthClass() {
	        var className = ['eg-sm-' + (this.props.sm ? this.props.sm : '12')];

	        if (this.props.end) {
	            className.push('eg-end');
	        }

	        return className.join(' ');
	    };

	    Col.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](this.getWidthClass(), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Col, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 占几列，共12列
	             * @property egSize
	             * @type Integer
	             * */
	            sm: _react.PropTypes.number.isRequired,
	            /**
	             * 是否是最后一列
	             * @property end
	             * @type Boolean
	             * @default false
	             * */
	            end: _react.PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    return Col;
	})(_react.Component);

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	/**
	 * 布局组件
	 * @class Grid
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Grid = (function (_Component) {
	    _inherits(Grid, _Component);

	    function Grid() {
	        _classCallCheck(this, _Grid);

	        _Component.apply(this, arguments);
	    }

	    Grid.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, {
	                className: _classnames2['default'](this.getClassName('grid'), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Grid, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

	    var _Grid = Grid;
	    Grid = _utilsClassNameMixin2['default'](Grid) || Grid;
	    return Grid;
	})(_react.Component);

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames4 = __webpack_require__(32);

	var _classnames5 = _interopRequireDefault(_classnames4);

	var _utilsClassNameMixinJs = __webpack_require__(30);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	/**
	 * 日历组件<br />
	 * 需要和CalendarPanel组合使用
	 * @class Calendar
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/calendar.js {js}
	 * @demo calendar.html {html}
	 * @show true
	 * */

	var Calendar = (function (_Component) {
	    _inherits(Calendar, _Component);

	    _createClass(Calendar, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式类名前缀
	             * @property classPrefix
	             * @type String
	             * @default calendar
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 起始日期
	             * @property startDate
	             * @type String
	             * @default empty
	             * */
	            startDate: _react.PropTypes.string,
	            /**
	             * 终止日期
	             * @property endDate
	             * @type String
	             * @default empty
	             * */
	            endDate: _react.PropTypes.string,
	            /**
	             * 默认选中日期
	             * @property defaultDate
	             * @type String
	             * @default 当天
	             * */
	            defaultDate: _react.PropTypes.string,
	            /**
	             * 日期格式
	             * @property format
	             * @type string
	             * @default 'yyyy-MM-dd'
	             * */
	            format: _react.PropTypes.string,
	            /**
	             * 选择某个具体日期后执行的回调函数
	             * @property selectCallback
	             * @type Function
	             * @default empty
	             * */
	            selectCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            format: 'yyyy-MM-dd',
	            classPrefix: 'calendar'
	        },
	        enumerable: true
	    }]);

	    function Calendar(props, context) {
	        _classCallCheck(this, _Calendar);

	        _Component.call(this, props, context);

	        this.today = new Date();

	        this.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	        this.windowType = ['getCalendar', 'getMonths', 'getYears'];

	        var defaultDate = this.props.defaultDate || new Date();
	        this.state = {
	            currentDate: defaultDate,
	            selectedDate: defaultDate,
	            show: false,
	            year: typeof defaultDate != 'string' ? defaultDate.getFullYear() : new Date(defaultDate).getFullYear(),
	            windowType: this.windowType[!isNaN(this.props.windowType) ? this.props.windowType : 0]
	        };
	    }

	    Calendar.prototype.getCurrentDate = function getCurrentDate() {
	        var currentDate = this.state.currentDate;

	        return typeof currentDate != 'string' ? currentDate : new Date(currentDate);
	    };

	    Calendar.prototype.getSelectedDate = function getSelectedDate() {
	        var selectedDate = this.state.selectedDate;

	        return typeof selectedDate != 'string' ? selectedDate : new Date(selectedDate);
	    };

	    Calendar.prototype.dateClick = function dateClick(date) {
	        var d = date.split('/');
	        var selectCallback = this.props.selectCallback;

	        //console.dir(this.getDate(d[0],d[1],d[2]));
	        selectCallback && selectCallback(this.getDate(d[0], d[1], d[2]), d);
	        this.setState({
	            currentDate: new Date(date)
	        });
	        this.props.closeCallback && this.props.closeCallback();
	    };

	    Calendar.prototype.getDates = function getDates(arr, selectedDate, defaultDate) {
	        var d = undefined,
	            dom = [],
	            _this = this,
	            month = selectedDate.getMonth(),
	            year = selectedDate.getFullYear();

	        var _props = this.props;
	        var startDate = _props.startDate;
	        var endDate = _props.endDate;

	        //startDate='2015/11/16';
	        //endDate='2015/11/20';
	        for (var j = 1; j <= 7; j++) {

	            if (arr.length > 0) {
	                var _classnames;

	                d = arr.shift();
	                var disabled = startDate && new Date(year, month, d).getTime() <= new Date(startDate).getTime() || endDate && new Date(year, month, d).getTime() >= new Date(endDate).getTime();
	                //"eg-active" eg-calendar-selected
	                dom.push(_react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'span',
	                        { className: _classnames5['default'](this.getClassName('item'), (_classnames = {}, _classnames[this.getClassName('active', false)] = this.isToday(year, month + 1, d), _classnames[this.getClassName('disabled')] = disabled, _classnames['no-hover'] = d == ' ', _classnames[this.getClassName('selected')] = this.isOptionSelect(selectedDate, defaultDate) && defaultDate.getDate() == d && !disabled, _classnames)), onMouseDown: disabled || d == ' ' ? '' : _this.dateClick.bind(_this, year + '/' + (month + 1) + '/' + d) },
	                        d
	                    )
	                ));
	            }
	        }
	        return dom;
	    };

	    Calendar.prototype.isOptionSelect = function isOptionSelect(current, selectDate) {
	        return current.getFullYear() == selectDate.getFullYear() && current.getMonth() == selectDate.getMonth();
	    };

	    /**废弃*/

	    Calendar.prototype.onChange = function onChange(e) {
	        var target = e.target;
	        this.setState({
	            selectedDate: target.value
	        });
	    };

	    /**废弃*/

	    Calendar.prototype.drawSelect = function drawSelect() {
	        var select = [],
	            monthList = this.month,

	        //date = this.state.selectedDate,
	        selectedDate = this.getSelectedDate(),
	            date = selectedDate,
	            years = [],
	            _this = this,
	            year = date.getFullYear();

	        years = [new Date(year - 1, 1, 1).getFullYear(), year, new Date(year + 1, 1, 1).getFullYear()];

	        var option = function option() {
	            return years.map(function (year) {
	                return monthList.map(function (month) {
	                    return _react2['default'].createElement(
	                        'option',
	                        { value: year + '/' + month + '/1' },
	                        year,
	                        '年',
	                        _this.getDay(month),
	                        '月'
	                    );
	                });
	            });
	        };
	        select.push(_react2['default'].createElement(
	            'select',
	            {
	                className: 'options',
	                onChange: this.onChange.bind(this),
	                defaultValue: this.defaultSelectDate = selectedDate.getFullYear() + '/' + (selectedDate.getMonth() + 1) + '/' + '1' },
	            option()
	        ));
	        return select;
	    };

	    Calendar.prototype.draw = function draw() {
	        var selectedDate = this.getSelectedDate(),
	            defaultDate = this.getCurrentDate(),
	            month = selectedDate.getMonth(),
	            year = selectedDate.getFullYear(),
	            arr = [];

	        for (var i = 1, firstDay = new Date(year, month, 1).getDay(); i <= firstDay; i++) {
	            arr.push(' ');
	        }
	        for (var i = 1, monthDay = new Date(year, month + 1, 0).getDate(); i <= monthDay; i++) {
	            arr.push(i);
	        }

	        var d = undefined,
	            dom = [];
	        while (arr.length > 0) {
	            dom.push(_react2['default'].createElement(
	                'tr',
	                { className: 'body' },
	                this.getDates(arr, selectedDate, defaultDate)
	            ));
	        }

	        return dom;
	    };

	    Calendar.prototype.isToday = function isToday(year, month, date) {
	        var d = this.today;
	        return d.getFullYear() == year && d.getMonth() + 1 == month && d.getDate() == date;
	    };

	    Calendar.prototype.getDate = function getDate(year, month, date) {
	        var format = this.props.format;

	        return format.replace(/y{4}/, year).replace(/M{1,2}/, month).replace(/d{1,2}/, date);
	    };

	    Calendar.prototype.getDay = function getDay(day) {
	        day *= 1;
	        return day <= 9 ? '0' + day : day;
	    };

	    Calendar.prototype.todayHandler = function todayHandler() {
	        this.setState({
	            selectedDate: this.today,
	            currentDate: this.today
	        });
	    };

	    Calendar.prototype.isParent = function isParent(obj, parentObj) {
	        while (obj != undefined && obj != null) {
	            //&& obj.nodeType==1&& obj.tagName.toUpperCase() != 'BODY'
	            if (obj == parentObj) {
	                return true;
	            }
	            obj = obj.parentNode;
	        }
	        return false;
	    };

	    Calendar.prototype.componentDidMount = function componentDidMount() {
	        var _this = this;
	        //let calendarContainer = ReactDOM.findDOMNode(this);
	        /*document.addEventListener('click',function(e){
	            if(_this.isParent(e.target,calendarContainer) ){
	                console.dir('parent');
	            }else{
	                console.dir('siquba');
	            }
	        },false);*/
	    };

	    Calendar.prototype.getMonth = function getMonth(month) {
	        return month + 1;
	    };

	    Calendar.prototype.getYears = function getYears() {
	        var _this2 = this;

	        var year = this.switchYearForInterval(this.state.year),
	            sYear = this.getSelectedDateSplit().year,
	            _this = this;

	        var years = function years(year) {
	            var y = year - 1,
	                list = [];
	            for (var i = -1; i < 11; i++) {
	                var _classnames2;

	                list.push(_react2['default'].createElement(
	                    'span',
	                    null,
	                    _react2['default'].createElement(
	                        'i',
	                        { className: _classnames5['default']((_classnames2 = {}, _classnames2[_this.getClassName('selected', false)] = sYear == y, _classnames2.old = i == -1 || i == 10, _classnames2)), onMouseDown: _this.switchYear.bind(_this2, y) },
	                        y
	                    )
	                ));
	                y += 1;
	            }
	            return list;
	        };

	        return _react2['default'].createElement(
	            'table',
	            { className: 'calendar' },
	            _react2['default'].createElement(
	                'thead',
	                { className: 'eg-calendar-header' },
	                _react2['default'].createElement(
	                    'th',
	                    null,
	                    _react2['default'].createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchYearForInterval.bind(this, year - 1, true) })
	                ),
	                _react2['default'].createElement(
	                    'th',
	                    { colSpan: '5' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'title' },
	                        year + '年-' + (year + 9) + '年'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'th',
	                    null,
	                    _react2['default'].createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchYearForInterval.bind(this, year + 10, true) })
	                )
	            ),
	            _react2['default'].createElement(
	                'tbody',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    { className: 'month-list' },
	                    _react2['default'].createElement(
	                        'td',
	                        { colSpan: '7' },
	                        years(year)
	                    )
	                )
	            )
	        );
	    };

	    Calendar.prototype.getMonths = function getMonths() {
	        var _context;

	        var selectDate = this.getSelectedDateSplit(),
	            _this = this;

	        return _react2['default'].createElement(
	            'table',
	            { className: 'calendar' },
	            _react2['default'].createElement(
	                'thead',
	                { className: 'eg-calendar-header' },
	                _react2['default'].createElement(
	                    'th',
	                    null,
	                    _react2['default'].createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchYear.bind(this, '-1') })
	                ),
	                _react2['default'].createElement(
	                    'th',
	                    { colSpan: '5' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'title', onMouseDown: (_context = this.switchWindow).bind.call(_context, this, 2) },
	                        selectDate.year + '年'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'th',
	                    null,
	                    _react2['default'].createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchYear.bind(this, '+1') })
	                )
	            ),
	            _react2['default'].createElement(
	                'tbody',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    { className: 'month-list' },
	                    _react2['default'].createElement(
	                        'td',
	                        { colSpan: '7' },
	                        this.month.map(function (item) {
	                            var _classnames3;

	                            return _react2['default'].createElement(
	                                'span',
	                                null,
	                                _react2['default'].createElement(
	                                    'i',
	                                    { className: _classnames5['default']((_classnames3 = {}, _classnames3[_this.getClassName('selected', false)] = selectDate.month == item, _classnames3)), onMouseDown: _this.switchMonth.bind(_this, item * 1 - 1) },
	                                    item + '月'
	                                )
	                            );
	                        })
	                    )
	                )
	            )
	        );
	    };

	    Calendar.prototype.getCalendar = function getCalendar() {
	        var _context2;

	        var selectDate = this.getSelectedDateSplit(),
	            weeks = ['日', '一', '二', '三', '四', '五', '六'];

	        return _react2['default'].createElement(
	            'table',
	            { className: 'calendar' },
	            _react2['default'].createElement(
	                'thead',
	                { className: 'eg-calendar-header' },
	                _react2['default'].createElement(
	                    'th',
	                    null,
	                    _react2['default'].createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchMonth.bind(this, '-1') })
	                ),
	                _react2['default'].createElement(
	                    'th',
	                    { colSpan: '5' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'title', onMouseDown: (_context2 = this.switchWindow).bind.call(_context2, this, 1) },
	                        selectDate.year + '年' + selectDate.month + '月'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'th',
	                    null,
	                    _react2['default'].createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchMonth.bind(this, '+1') })
	                )
	            ),
	            _react2['default'].createElement(
	                'tbody',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    { className: 'head' },
	                    weeks.map(function (week) {
	                        return _react2['default'].createElement(
	                            'td',
	                            null,
	                            week
	                        );
	                    })
	                ),
	                this.draw()
	            )
	        );
	    };

	    Calendar.prototype.switchWindow = function switchWindow(type) {
	        //this.setState({
	        //    windowType:type
	        //});
	        this.props.setWindowType(type);
	    };

	    Calendar.prototype.switchYearForInterval = function switchYearForInterval() {
	        var ye = arguments.length <= 0 || arguments[0] === undefined ? this.getSelectedDateSplit().year : arguments[0];
	        var t = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        var _this = this;

	        //debugger;
	        //let year = parseInt(ye / 10, 10) * 10;
	        if (t) {
	            this.setState({
	                year: ye
	            });
	        } else {
	            return parseInt(ye / 10, 10) * 10;
	        }

	        // return year;
	    };

	    Calendar.prototype.switchYear = function switchYear(type) {
	        var selected = this.getSelectedDate(),
	            year = selected.getFullYear();

	        this.setState({
	            selectedDate: new Date(typeof type == 'string' ? year + eval("(" + type + ")") : type, selected.getMonth(), 1)
	        });
	        typeof type != 'string' && this.switchWindow(1);
	    };

	    Calendar.prototype.switchMonth = function switchMonth(type) {
	        var selected = this.getSelectedDate(),
	            year = selected.getFullYear(),
	            month = selected.getMonth();

	        this.setState({
	            selectedDate: new Date(year, typeof type == 'string' ? month + eval("(" + type + ")") : type, 1)
	        });
	        typeof type != 'string' && this.switchWindow(0);
	    };

	    Calendar.prototype.getSelectedDateSplit = function getSelectedDateSplit() {
	        var selectedDate = this.getSelectedDate();

	        var year = selectedDate.getFullYear(),
	            month = this.getMonth(selectedDate.getMonth()),
	            date = selectedDate.getDate();

	        return { year: year, month: month, date: date };
	    };

	    Calendar.prototype.render = function render() {
	        var windowType = this.props.windowType;

	        windowType = this.windowType[windowType];
	        //!isNaN(windowType) &&this.state.windowType==this.windowType[0] ?this.windowType[windowType] :this.state.windowType;
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames5['default'](this.getClassName('container'), this.getClassName(this.props.show ? 'show' : 'hide', false)) },
	            _react2['default'].createElement(
	                'div',
	                { className: 'eg-calendar-box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'box' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'eg-calendar-body' },
	                        this[windowType]()
	                    )
	                )
	            )
	        );
	    };

	    var _Calendar = Calendar;
	    Calendar = _utilsClassNameMixinJs2['default'](Calendar) || Calendar;
	    return Calendar;
	})(_react.Component);

	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames10 = __webpack_require__(32);

	var _classnames11 = _interopRequireDefault(_classnames10);

	/**
	 * input组件
	 * */

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    _createClass(Input, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }, {
	        key: 'defaultProps',

	        //onClickCallback:PrgiopTypes.fun
	        value: {
	            type: 'text',
	            autoComplete: 'off',
	            label: '请选择'
	        },
	        enumerable: true
	    }]);

	    function Input(props, context) {
	        _classCallCheck(this, _Input);

	        _Component.call(this, props, context);

	        this.className = 'input-';

	        this.state = {
	            isActive: this.props.checked
	        };
	    }

	    Input.prototype.setCheck = function setCheck() {
	        this.setState({
	            isActive: !this.state.isActive
	        });
	    };

	    Input.prototype.checkbox = function checkbox() {
	        var _classnames, _classnames2, _classnames3;

	        var checked = typeof this.props.checked != 'undefined' ? this.props.checked : this.state.isActive;
	        return _react2['default'].createElement(
	            'div',
	            { ref: '', className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames = {}, _classnames['eg-input-' + this.props.type + '-active'] = checked, _classnames), (_classnames2 = {}, _classnames2['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames2)), onClick: this.setCheck.bind(this) },
	            _react2['default'].createElement('input', _extends({ type: this.props.type }, this.props, { onChange: this.onchange.bind(this) })),
	            _react2['default'].createElement(
	                'div',
	                { className: 'box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames11['default']('checkbox', (_classnames3 = {}, _classnames3[this.getClassName('icon-tick', false)] = checked, _classnames3)) },
	                    _react2['default'].createElement('div', { className: 'round' })
	                )
	            ),
	            _react2['default'].createElement(
	                'label',
	                null,
	                this.props.label
	            )
	        );
	    };

	    //暂时用在图片片选框

	    Input.prototype.checkboxs = function checkboxs() {
	        var _classnames4, _classnames5, _classnames6;

	        var checked = typeof this.props.checked != 'undefined' ? this.props.checked : this.state.isActive;
	        return _react2['default'].createElement(
	            'div',
	            { ref: '', className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames4 = {}, _classnames4['eg-input-' + this.props.type + '-active'] = checked, _classnames4), (_classnames5 = {}, _classnames5['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames5)), onClick: this.setCheck.bind(this) },
	            _react2['default'].createElement('input', _extends({}, this.props, { type: 'checkbox', onChange: this.onchange.bind(this) })),
	            _react2['default'].createElement(
	                'div',
	                { className: 'box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames11['default']('checkbox', (_classnames6 = {}, _classnames6[this.getClassName('icon-tick', false)] = checked, _classnames6)) },
	                    _react2['default'].createElement('div', { className: 'round' })
	                )
	            ),
	            _react2['default'].createElement(
	                'label',
	                null,
	                this.props.label
	            )
	        );
	    };

	    Input.prototype.onchange = function onchange(e) {
	        if (this.props.onCheck) {
	            this.props.onCheck(e.target);
	        }
	    };

	    Input.prototype.radio = function radio() {
	        var _classnames7, _classnames8;

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames7 = {}, _classnames7['eg-input-' + this.props.type + '-active'] = this.props.checked, _classnames7), (_classnames8 = {}, _classnames8['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames8)) },
	            _react2['default'].createElement('input', _extends({ type: this.props.type }, this.props, { onChange: this.onchange.bind(this) })),
	            _react2['default'].createElement(
	                'div',
	                { className: 'box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'checkbox' },
	                    _react2['default'].createElement('div', { className: 'round' })
	                )
	            ),
	            _react2['default'].createElement(
	                'label',
	                null,
	                this.props.label
	            )
	        );
	    };

	    Input.prototype.text = function text() {
	        var _classnames9;

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames11['default']((_classnames9 = {}, _classnames9[this.getClassName('icon-container')] = !!this.props.icon, _classnames9)) },
	            _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames11['default'](this.getDefaultClass()) })),
	            _react2['default'].createElement('i', { className: 'icon-input-right icon-' + this.props.icon })
	        );
	    };

	    Input.prototype.getDefaultClass = function getDefaultClass() {
	        //border:1px solid #fff;
	        return this.getClassName(this.className + this.props.type);
	    };

	    Input.prototype.render = function render() {
	        //const {name,id,value,placeholder,autocomplete,disabled,type} = this.props;
	        return this[this.props.type.toLowerCase()]();
	    };

	    var _Input = Input;
	    Input = _utilsClassNameMixin2['default'](Input) || Input;
	    return Input;
	})(_react.Component);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(30);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	var _InputJs = __webpack_require__(38);

	var _InputJs2 = _interopRequireDefault(_InputJs);

	var _CalendarJs = __webpack_require__(37);

	var _CalendarJs2 = _interopRequireDefault(_CalendarJs);

	/**
	 * CalendarPanel组件
	 * @class CalendarPanel
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/calendar.js {js}
	 * @demo calendar.html {html}
	 * @show true
	 * */

	var CalendarPanel = (function (_Component) {
	    _inherits(CalendarPanel, _Component);

	    _createClass(CalendarPanel, null, [{
	        key: 'propTypes',
	        value: {
	            showCallback: _react.PropTypes.func,
	            hideCallback: _react.PropTypes.func,
	            componentTag: _react.PropTypes.string,
	            /**
	             * 通过传入此函数获取日期值
	             * @property getValueCallback
	             * @type Function
	             * */
	            getValueCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'calendar',
	            componentTag: 'Input',
	            getValueCallback: function getValueCallback(date) {
	                console.warn('通过向CalendarPanel传入回调函数"getValueCallback"可以获取到当前选取的日期值，当前选取的日期为：' + date);
	            }
	        },
	        enumerable: true
	    }]);

	    function CalendarPanel(props, context) {
	        _classCallCheck(this, _CalendarPanel);

	        _Component.call(this, props, context);

	        this.state = {
	            isShow: false,
	            value: '',
	            windowType: 0
	        };
	    }

	    CalendarPanel.prototype.doSetCapture = function doSetCapture(input) {
	        if (input.setCapture) {
	            this.doReleaseCapture();
	            input.setCapture();
	            this.ctObj = input;
	        }
	    };

	    CalendarPanel.prototype.doReleaseCapture = function doReleaseCapture() {
	        if (this.ctObj && this.ctObj.releaseCapture) {
	            this.ctObj.releaseCapture();
	            this.ctObj = null;
	        }
	    };

	    CalendarPanel.prototype.componentDidMount = function componentDidMount() {};

	    CalendarPanel.prototype.inputBlurHandler = function inputBlurHandler() {
	        this.doReleaseCapture();
	        this.close();
	    };

	    CalendarPanel.prototype.inputMouseUpHandler = function inputMouseUpHandler() {
	        this.doReleaseCapture();
	    };

	    CalendarPanel.prototype.inputFocusHandler = function inputFocusHandler(e) {

	        var container = _react2['default'].findDOMNode(this),
	            _this = this,
	            calendar = container.querySelector('.' + this.getClassName('container')),
	            input = e.target;

	        calendar.onmousedown = function (e) {
	            _this.doSetCapture(input);
	            return false;
	        };
	        this.input = input;
	        this.setState({
	            isShow: true,
	            windowType: 0
	        });
	    };

	    CalendarPanel.prototype.inputChangeHandler = function inputChangeHandler(e) {
	        var target = e.target;

	        this.setState({
	            value: target.value
	        });
	    };

	    CalendarPanel.prototype.selectCallback = function selectCallback(date) {
	        this.props.getValueCallback(date);
	        this.setState({
	            value: date
	        });
	    };

	    CalendarPanel.prototype.setWindowType = function setWindowType(type) {
	        this.setState({
	            windowType: type
	        });
	    };

	    CalendarPanel.prototype.close = function close() {
	        this.setState({
	            isShow: false
	        });
	        this.input && this.input.blur();
	    };

	    CalendarPanel.prototype.render = function render() {
	        var Component = this.props.componentTag;
	        var _this = this;
	        var options = _react2['default'].Children.map(this.props.children, function (option) {

	            return _react2['default'].createElement(_InputJs2['default'], _extends({}, option.props, {
	                onBlur: _this.inputBlurHandler.bind(_this),
	                onMouseUp: _this.inputMouseUpHandler.bind(_this),
	                onFocus: _this.inputFocusHandler.bind(_this),
	                value: _this.state.value,
	                onChange: _this.inputChangeHandler.bind(_this)
	            }));
	        }, this);

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getClassName('panel')) },
	            options,
	            _react2['default'].createElement(_CalendarJs2['default'], _extends({}, this.props, {
	                show: this.state.isShow,
	                selectCallback: this.selectCallback.bind(this),
	                windowType: this.state.windowType,
	                closeCallback: this.close.bind(this),
	                setWindowType: this.setWindowType.bind(this) }))
	        );
	    };

	    var _CalendarPanel = CalendarPanel;
	    CalendarPanel = _utilsClassNameMixinJs2['default'](CalendarPanel) || CalendarPanel;
	    return CalendarPanel;
	})(_react.Component);

	exports['default'] = CalendarPanel;
	module.exports = exports['default'];

/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by panqianjin on 15/10/30.
	 */
	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ButtonJs = __webpack_require__(33);

	var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

	var _RowJs = __webpack_require__(34);

	var _RowJs2 = _interopRequireDefault(_RowJs);

	var _ColJs = __webpack_require__(35);

	var _ColJs2 = _interopRequireDefault(_ColJs);

	var _GridJs = __webpack_require__(36);

	var _GridJs2 = _interopRequireDefault(_GridJs);

	/**
	 * 弹框组件，dialog类型：分为alert,confirm,dialog,mask 四种。默认alert。
	 * 根据show的存在与否决定弹框展示与否
	 * @class dialog
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/dialog.js{js}
	 * @demo dialog.html
	 * @show true
	 * */

	var Dialog = (function (_Component) {
	    _inherits(Dialog, _Component);

	    _createClass(Dialog, null, [{
	        key: 'propType',
	        value: {
	            /**
	             * dialog类型：分为alert,confirm,dialog,mask 四种。默认alert
	             * @property type
	             * @type String
	             * @default alert
	             * */
	            type: _react.PropTypes.string,
	            /**
	             * 标题
	             * @property title
	             * @type String
	             * @default 温馨提示
	             * */
	            title: _react.PropTypes.string,
	            /**
	             * 点击确定时，回调方法
	             * @property successCallback
	             * @type Function
	             * @default null
	             * */
	            successCallback: _react.PropTypes.func,
	            /**
	             * 点击取消时，回调方法
	             * @property cancelCallback
	             * @type Function
	             * @default null
	             * */
	            cancelCallback: _react.PropTypes.func,
	            /**
	             * 类名样式前缀
	             * @property classPrefix
	             * @type sting
	             * @default crumb
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default div
	             * */
	            componentTag: _react.PropTypes.string

	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            successCallback: null, //success回掉函数
	            cancelCallback: null, //cancel回调函数
	            close: false, //是否有x图标
	            title: '温馨提示', //标题
	            type: 'alert',
	            classPrefix: 'dialog',
	            componentTag: 'div'
	        },
	        enumerable: true
	    }]);

	    function Dialog(props, context) {
	        _classCallCheck(this, _Dialog);

	        _Component.call(this, props, context);
	        this.flag = true;
	        this.state = {
	            show: this.props.show,
	            init: true
	        };
	    }

	    /**
	     * 接收到新props时执行,props是否存在show，是改变state.show，否则不变
	     * 生命周期方法
	     * @method componentWillReceiveProps
	     * */

	    Dialog.prototype.componentDidMount = function componentDidMount() {
	        //this.flag = false;
	    };

	    Dialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (nextProps.show) {
	            this.flag = false;
	            this.setState({
	                show: nextProps.show
	            });
	        }
	    };

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    Dialog.prototype.render = function render() {
	        var showOrHide = this.props.cancelCallback ? this.props.show : this.state.show;
	        return _react2['default'].createElement(
	            _GridJs2['default'],
	            { ref: 'container', className: _classnames2['default'](this.getClassName('container'), this.flag ? '' : showOrHide ? 'fadein' : 'fadeout') },
	            !this.flag && !(this.props.cancelCallback ? this.props.show : this.state.show) ? this.displayNone() : null,
	            this[this.props.type.toLowerCase()](),
	            this.showOverlay(this.props.tips)
	        );
	    };

	    /**
	     * 改变display形态
	     * */

	    Dialog.prototype.displayNone = function displayNone() {
	        var _this = this;
	        clearTimeout(this.timer);
	        this.timer = setTimeout((function () {
	            this.removeClass(ReactDOM.findDOMNode(_this.refs.container), 'fadeout');
	        }).bind(this), 400);
	    };

	    Dialog.prototype.close = function close(callbackId) {
	        callbackId = this.props[callbackId + 'Callback'];
	        if (callbackId) {
	            callbackId();
	            return this;
	        }

	        this.flag = false;
	        this.setState({
	            show: false
	        });
	    };

	    /**
	     * 点击X，调用cancelCallback（如果存在），否则通过改变自身state来关闭
	     * @method closeDialog
	     * @return null
	     * */

	    Dialog.prototype.closeDialog = function closeDialog() {
	        this.close('cancel');
	    };

	    /**
	     * 点击确定按钮，调用successCallback（如果存在），否则通过改变自身state来关闭
	     * @method submitForm
	     * @return null;
	     * */

	    Dialog.prototype.submitForm = function submitForm() {
	        this.close('success');
	    };

	    /**
	     * 点击取消按钮，调用cancelCallback（如果存在），否则通过改变自身state来关闭
	     * @method cancleDialog
	     * @return null;
	     * */

	    Dialog.prototype.cancleDialog = function cancleDialog() {
	        this.close('cancel');
	    };

	    /**
	     * 显示遮罩
	     * @method showOverlay
	     * @return {ReactElement}
	     * */

	    Dialog.prototype.showOverlay = function showOverlay() {
	        return _react2['default'].createElement(_GridJs2['default'], { className: _classnames2['default'](this.getClassNamesForArguments('overlay')) });
	    };

	    /**
	     * 渲染alert
	     * @method alert
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.alert = function alert() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')), style: { width: '500px' } },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('title')), style: { textAlign: 'center' } },
	                    this.props.title
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('content')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children
	                    )
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('button')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        { sm: 12 },
	                        _react2['default'].createElement(
	                            _ButtonJs2['default'],
	                            { radius: true, egSize: 'xs', onClick: this.submitForm.bind(this) },
	                            '确定'
	                        )
	                    )
	                )
	            )
	        );
	    };

	    /**
	     * 渲染confirm
	     * @method confirm
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.confirm = function confirm() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')), style: { width: '500px' } },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('title')), style: { textAlign: 'center' } },
	                    this.props.title,
	                    _react2['default'].createElement(
	                        'div',
	                        { className: _classnames2['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
	                        'x'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('content')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children ? this.props.children : '请快乐的修bug'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('button')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        { sm: 12 },
	                        _react2['default'].createElement(
	                            _ButtonJs2['default'],
	                            { radius: true, egSize: 'xs', style: { marginRight: '20px' }, onClick: this.submitForm.bind(this) },
	                            '确定'
	                        ),
	                        _react2['default'].createElement(
	                            _ButtonJs2['default'],
	                            { radius: true, white: true, egSize: 'xs', onClick: this.cancleDialog.bind(this) },
	                            '取消'
	                        )
	                    )
	                )
	            )
	        );
	    };

	    /**
	     * 渲染dialog
	     * @method dialog
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.dialog = function dialog() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')) },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('title')) },
	                    this.props.title,
	                    _react2['default'].createElement(
	                        'div',
	                        { className: _classnames2['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
	                        'x'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('content')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children
	                    )
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('button')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        { sm: 12 },
	                        _react2['default'].createElement(
	                            _ButtonJs2['default'],
	                            { radius: true, egSize: 'xs', style: { marginRight: '20px' }, onClick: this.submitForm.bind(this) },
	                            '确定'
	                        ),
	                        _react2['default'].createElement(
	                            _ButtonJs2['default'],
	                            { radius: true, white: true, egSize: 'xs', onClick: this.cancleDialog.bind(this) },
	                            '取消'
	                        )
	                    )
	                )
	            )
	        );
	    };

	    /**
	     * 渲染mask
	     * @method mask
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.mask = function mask() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')) },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('title', 'mask-title')) },
	                    this.props.title,
	                    _react2['default'].createElement(
	                        'div',
	                        { className: _classnames2['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
	                        'x'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames2['default'](this.getClassNamesForArguments('content')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children
	                    )
	                )
	            )
	        );
	    };

	    var _Dialog = Dialog;
	    Dialog = _utilsClassNameMixin2['default'](Dialog) || Dialog;
	    return Dialog;
	})(_react.Component);

	exports['default'] = Dialog;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _InputJs = __webpack_require__(38);

	var _InputJs2 = _interopRequireDefault(_InputJs);

	/**
	 * 单选按钮组组件
	 * @class RadioGroup
	 * @module form
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/input.js {js}
	 * @demo input.html {html}
	 * @show true
	 * */

	var RadioGroup = (function (_Component) {
	    _inherits(RadioGroup, _Component);

	    _createClass(RadioGroup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * radio name
	             * @property name
	             * @type String
	             * */
	            name: _react.PropTypes.string,
	            /**
	             * 默认选中项
	             * @property defaultChecked
	             * @type String
	             * */
	            defaultChecked: _react.PropTypes.string,
	            /**
	             * 获取选中的值
	             * @property getValueCallback
	             * @type String
	             * */
	            getValueCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }]);

	    function RadioGroup(props, context) {
	        _classCallCheck(this, RadioGroup);

	        _Component.call(this, props, context);

	        this.state = {
	            checked: this.props.defaultChecked
	        };
	    }

	    RadioGroup.prototype._onChange = function _onChange(target) {

	        if (this.state.checked != target.value) {

	            this.setState({
	                checked: target.value
	            });
	            this.props.getValueCallback && this.props.getValueCallback(target.value, target);
	        }
	    };

	    RadioGroup.prototype.componentDidMount = function componentDidMount() {};

	    RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.setState({
	            checked: nextProps.defaultChecked
	        });
	    };

	    RadioGroup.prototype.render = function render() {
	        var _this = this;

	        var options = _react2['default'].Children.map(this.props.children, function (option) {
	            var _option$props = option.props;
	            var name = _option$props.name;
	            var value = _option$props.value;
	            var label = _option$props.label;
	            var onCheck = _option$props.onCheck;

	            var other = _objectWithoutProperties(_option$props, ['name', 'value', 'label', 'onCheck']);

	            return _react2['default'].createElement(_InputJs2['default'], _extends({}, other, {
	                ref: option.props.value,
	                name: _this.props.name,
	                key: option.props.value,
	                value: option.props.value,
	                label: option.props.label,
	                onCheck: _this._onChange.bind(_this),
	                checked: option.props.value === _this.state.checked }));
	        }, this);

	        return _react2['default'].createElement(
	            'div',
	            { style: this.props.style,
	                className: this.props.className || '' },
	            options
	        );
	    };

	    return RadioGroup;
	})(_react.Component);

	exports['default'] = RadioGroup;
	module.exports = exports['default'];

/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * tab组件
	 * @class Tab
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/tab.js{js}
	 * @demo tab.html
	 * @show true
	 * */

	var Tab = (function (_Component) {
	    _inherits(Tab, _Component);

	    function Tab() {
	        _classCallCheck(this, _Tab);

	        _Component.apply(this, arguments);
	    }

	    Tab.prototype.handlerClick = function handlerClick() {
	        this.props.clickCallback(this.props.index);
	    };

	    Tab.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'a',
	            _extends({ className: _classnames2['default'](this.getClassName('item'), this.getClassNames(this.props))
	            }, this.props, {
	                onClick: this.handlerClick.bind(this) }),
	            this.props.heading
	        );
	    };

	    _createClass(Tab, null, [{
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'tab'
	        },
	        enumerable: true
	    }]);

	    var _Tab = Tab;
	    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
	    return Tab;
	})(_react.Component);

	exports['default'] = Tab;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TabJs = __webpack_require__(57);

	var _TabJs2 = _interopRequireDefault(_TabJs);

	/**
	 * tab组件
	 * @class Tabset
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/tab.js{js}
	 * @demo tab.html
	 * @show true
	 * */

	var Tabset = (function (_Component) {
	    _inherits(Tabset, _Component);

	    _createClass(Tabset, null, [{
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'tabset',
	            activeTab: 0
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            /**
	             * 需要在初始的时候打开第几个tab，默认为0（从0计数，即打开第一个tab）
	             * @property activeTab
	             * @type Number
	             * @default 0
	             * */
	            activeTab: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    function Tabset(props, context) {
	        _classCallCheck(this, _Tabset);

	        _Component.call(this, props, context);
	        this.state = {
	            active: props.activeTab
	        };
	        if (this.props.tabCallback) {
	            this.props.tabCallback(props.activeTab);
	        }
	    }

	    Tabset.prototype.activeHandler = function activeHandler(index) {
	        if (this.state.active !== index) {
	            this.setState({
	                active: index
	            });
	            if (this.props.tabCallback) {
	                this.props.tabCallback(index);
	            }
	        }
	    };

	    Tabset.prototype.render = function render() {
	        var _this = this;

	        var headings = _react2['default'].Children.map(this.props.children, function (option, index) {
	            var _option$props = option.props;
	            var tabCallback = _option$props.tabCallback;

	            var other = _objectWithoutProperties(_option$props, ['tabCallback']);

	            return _react2['default'].createElement(_TabJs2['default'], _extends({
	                index: index,
	                active: _this.state.active === index,
	                clickCallback: _this.activeHandler.bind(_this)
	            }, other));
	        }, this);
	        var panes = _react2['default'].Children.map(this.props.children, function (option, index) {
	            return _react2['default'].createElement(
	                'div',
	                {
	                    className: _classnames2['default'](_this.getClassName('panes')),
	                    style: { display: _this.state.active === index ? null : 'none' }
	                },
	                option.props.children
	            );
	        }, this);
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'ul',
	                null,
	                headings
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](this.getClassName('tab-content')) },
	                panes
	            )
	        );
	    };

	    var _Tabset = Tabset;
	    Tabset = _utilsClassNameMixin2['default'](Tabset) || Tabset;
	    return Tabset;
	})(_react.Component);

	exports['default'] = Tabset;
	module.exports = exports['default'];

/***/ },
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(30);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	/**
	 * Panel组件
	 * @class Panel
	 * @constructor
	 * @module panel
	 * @extends Component
	 * @requires React classnames
	 * @since 0.1.0
	 * @demo src/panel.js {js}
	 * @demo panel.html {html}
	 * @author bo.an@dianping.com
	 * */

	var Panel = (function (_Component) {
	    _inherits(Panel, _Component);

	    function Panel() {
	        _classCallCheck(this, _Panel);

	        _Component.apply(this, arguments);
	    }

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    Panel.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](this.getClassName('panel'), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Panel, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {},
	        enumerable: true
	    }]);

	    var _Panel = Panel;
	    Panel = _utilsClassNameMixinJs2['default'](Panel) || Panel;
	    return Panel;
	})(_react.Component);

	exports['default'] = Panel;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(30);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	/**
	 * PanelContent组件
	 * @class PanelContent
	 * @constructor
	 * @module panel
	 * @extends Component
	 * @requires React classnames
	 * @since 0.1.0
	 * @demo src/panel.js {js}
	 * @demo panel.html {html}
	 * @author bo.an@dianping.com
	 * */

	var PanelContent = (function (_Component) {
	    _inherits(PanelContent, _Component);

	    function PanelContent() {
	        _classCallCheck(this, _PanelContent);

	        _Component.apply(this, arguments);
	    }

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    PanelContent.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getClassName('content'), this.props.padding ? this.getClassName('padding') : '') },
	            this.props.children
	        );
	    };

	    _createClass(PanelContent, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 是否加padding
	             * @property padding
	             * @type bool
	             * @default true
	             * */
	            padding: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'panel',
	            padding: true
	        },
	        enumerable: true
	    }]);

	    var _PanelContent = PanelContent;
	    PanelContent = _utilsClassNameMixinJs2['default'](PanelContent) || PanelContent;
	    return PanelContent;
	})(_react.Component);

	exports['default'] = PanelContent;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 表单验证组件<br />
	 * 默认规则有<br/>
	 * <pre>
	 *     required：是否必填
	 *     date：日期格式验证
	 *     number：是否是有效的号码
	 *     url：url规则验证
	 *     dateISO：日期ISO验证
	 *     digits：是否是数字
	 *     equalTo：值对比
	 *     minlength：最少输入
	 *     maxlength：最大输入
	 *     email：邮箱验证
	 *     rangelength：字符大小需在某个区间之内
	 *     min：输入的值需要大于等于此规则定义的值
	 *     max：输入的值需要小于等于此规则定义的值
	 *     range：一个区间取值范围
	 *
	 * </pre>
	 * @class ValidatorPanel
	 * @module form
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/validate.js {js}
	 * @demo validate.html {html}
	 * @show true
	 * */

	var ValidatorPanel = (function (_Component) {
	    _inherits(ValidatorPanel, _Component);

	    _createClass(ValidatorPanel, null, [{
	        key: 'propTypes',
	        value: {
	            //触发点，change blur  manual（手动）
	            trigger: _react.PropTypes.string,
	            submitCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            /**
	             * 包装容器
	             * @property componentTag
	             * @type String
	             * @default form
	             * */
	            componentTag: 'form',
	            /**
	             * 触发验证的事件集合
	             * @property trigger
	             * @type String
	             * @default blur keyup focus click
	             * */
	            trigger: 'blur keyup focus click',
	            /**
	             * 默认规则提示文案
	             * @property message
	             * @type Object
	             * @default
	             *       required: '不能为空',
	                     date: '请正确填写日期',
	                     number: '请输入一个有效的号码',
	                     url: '请输入一个有效的URL',
	                     email: '请输入一个有效的电子邮件地址',
	                     dateISO: '请输入一个有效的日期(ISO)',
	                     digits: '请输入数字',
	                     equalTo:'请再次输入相同的值。',
	                     minlength: '请输入至少{0}字符',
	                     maxlength: '请输入不超过{0}字符',
	                     rangelength: '请输入一个值{0}和{1}字符之间',
	                     min: '请输入一个值大于或等于{0}',
	                     max: '请输入一个值小于或等于{0}',
	                     range: '请输入一个值{0} - {1}'
	             * */
	            message: {
	                required: '不能为空',
	                date: '请正确填写日期',
	                number: '请输入一个有效的号码',
	                url: '请输入一个有效的URL',
	                email: '请输入一个有效的电子邮件地址',
	                dateISO: '请输入一个有效的日期(ISO)',
	                digits: '请输入数字',
	                equalTo: '请再次输入相同的值。',
	                minlength: '请输入至少{0}字符',
	                maxlength: '请输入不超过{0}字符',
	                rangelength: '请输入一个值{0}和{1}字符之间',
	                min: '请输入一个值大于或等于{0}',
	                max: '请输入一个值小于或等于{0}',
	                range: '请输入一个值{0} - {1}'
	            },
	            initCallback: function initCallback() {},
	            /**
	             * 验证成功后提交表单
	             * @property submitCallback
	             * @type Function
	             * */
	            submitCallback: function submitCallback() {
	                return true;
	            },
	            /**
	             * 在提交时除验证规则之外的其他逻辑
	             * @property validateCallback
	             * @type Function
	             * */
	            validateCallback: function validateCallback() {
	                return true;
	            },
	            /**
	             * 提示框消失时间
	             * @property timeout
	             * @type Number
	             * @default 3000
	             * */
	            timeout: 3000,
	            /**
	             * 提交按钮id
	             * @property submitElement
	             * @type String
	             * */
	            submitElement: '',
	            /**
	             * 是否增强文本框提示
	             * @property shake
	             * @type Boolean
	             * @default true
	             * */
	            shake: true,
	            /**
	             * 规则验证
	             * @property rules
	             * @type Object
	             * */
	            rules: {},
	            /**
	             * 提示方位
	             * @property direction
	             * @type String
	             * @default right
	             * */
	            direction: 'right',
	            /**
	             * 重新更新dom
	             * @property update
	             * @type String
	             * @default +new Date()
	             * */
	            update: +new Date()
	        },
	        enumerable: true
	    }]);

	    function ValidatorPanel(props, context) {
	        _classCallCheck(this, _ValidatorPanel);

	        _Component.call(this, props, context);

	        this.elements = {};

	        this.formName = 'validate-form';
	        this.errorClass = this.getClassName('validate-error');
	        this.init = true;
	        this.update = this.props.update;

	        this.isUpdate = false;

	        this.vals = {};

	        this.state = {
	            message: '',
	            show: '',
	            fadeShow: 'block'
	        };
	    }

	    ValidatorPanel.prototype.trim = function trim(str) {
	        return str.replace(/(^\s*)|(\s*$)/g, "");
	    };

	    ValidatorPanel.prototype.isArray = function isArray(value) {
	        if (value instanceof Array || !(value instanceof Object) && Object.prototype.toString.call(value) == '[object Array]' || typeof value.length == 'number' && typeof value.splice != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice')) {

	            return true;
	        }
	        return false;
	    };

	    ValidatorPanel.prototype.optional = function optional(element) {
	        var val = this.getValue(element);
	        return !this.options.defaultRules.required.call(this, val, element);
	    };

	    ValidatorPanel.prototype.required = function required(value, element) {

	        if (element.nodeName.toLowerCase() === "select") {
	            var val = $(element).val();
	            return val && val.length > 0;
	        }
	        if (this.checkable(element)) {
	            return this.getLength(value, element) > 0;
	        }
	        return this.trim(value).length > 0;
	    };

	    ValidatorPanel.prototype.date = function date(value, element) {
	        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
	    };

	    ValidatorPanel.prototype.number = function number(value, element) {
	        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
	    };

	    ValidatorPanel.prototype.url = function url(value, element) {
	        return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
	    };

	    ValidatorPanel.prototype.email = function email(value, element) {

	        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
	    };

	    ValidatorPanel.prototype.dateISO = function dateISO(value, element) {
	        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
	    };

	    ValidatorPanel.prototype.digits = function digits(value, element) {
	        return this.optional(element) || /^\d+$/.test(value);
	    };

	    ValidatorPanel.prototype.equalTo = function equalTo(value, element, param) {
	        var target = document.querySelectorAll(param);
	        /*if ( this.onfocus ) {
	            target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
	                this.show();
	            });
	        }*/
	        return this.optional(element) || value === target[0].value;
	    };

	    ValidatorPanel.prototype.minlength = function minlength(value, element, param) {
	        var length = this.isArray(value) ? value.length : this.getLength(value, element);
	        return this.optional(element) || length >= param;
	    };

	    ValidatorPanel.prototype.maxlength = function maxlength(value, element, param) {
	        var length = this.isArray(value) ? value.length : this.getLength(value, element);
	        return this.optional(element) || length <= param;
	    };

	    ValidatorPanel.prototype.rangelength = function rangelength(value, element, param) {
	        var length = this.isArray(value) ? value.length : this.getLength(value, element);
	        return this.optional(element) || length >= param[0] && length <= param[1];
	    };

	    ValidatorPanel.prototype.min = function min(value, element, param) {
	        return this.optional(element) || value >= param;
	    };

	    ValidatorPanel.prototype.max = function max(value, element, param) {
	        return this.optional(element) || value <= param;
	    };

	    ValidatorPanel.prototype.range = function range(value, element, param) {
	        return this.optional(element) || value >= param[0] && value <= param[1];
	    };

	    //待改进

	    ValidatorPanel.prototype.optional = function optional(element) {
	        var val = this.getValue(element);
	        return !this.required.call(this, val, element);
	    };

	    //高亮

	    ValidatorPanel.prototype.highlight = function highlight(element) {
	        if (!this.checkable(element)) {
	            this.addClass(element, this.errorClass);

	            if (this.props.shake) {

	                this.addClass(element, 'shake animated');
	                setTimeout((function () {
	                    this.removeClass(element, 'shake animated');
	                }).bind(this), 1000);
	            }
	        }
	    };

	    //取消高亮

	    ValidatorPanel.prototype.unhighlight = function unhighlight(element) {
	        this.removeClass(element, this.errorClass);
	    };

	    ValidatorPanel.prototype.checkable = function checkable(element) {
	        return (/radio|checkbox/i.test(element.type)
	        );
	    };

	    ValidatorPanel.prototype.getLength = function getLength(value, element) {
	        switch (element.nodeName.toLowerCase()) {
	            case "select":
	                return document.querySelectorAll("option:selected", element).length;
	            case "input":
	                if (this.checkable(element)) {
	                    return document.querySelectorAll("[name='" + element.name + "']:checked").length;
	                }
	        }
	        return value.length;
	    };

	    ValidatorPanel.prototype.formatString = function formatString(str, options) {

	        if (!options) {
	            return str;
	        }

	        return str.replace(/\{(.+?)\}/ig, function (match, key) {
	            var value = typeof options != 'object' ? options : options[key];
	            return typeof value == 'undefined' ? match : value;
	        });
	    };

	    ValidatorPanel.prototype.getValue = function getValue(element) {
	        var val = undefined,
	            type = element.type.toLowerCase();

	        if (type === "radio" || type === "checkbox") {
	            var el = document.querySelectorAll('input[name="' + element.name + '"]:checked');
	            return el && el.length > 0 ? el[0].value : '';
	        } else if (type === "number" && typeof element.validity !== "undefined") {
	            return element.validity.badInput ? false : element.value;
	        }

	        val = element.value;
	        if (typeof val === "string") {
	            return val.replace(/\r/g, "");
	        }
	        return val;
	    };

	    //循环验证单个input上的规则

	    ValidatorPanel.prototype.check = function check(element) {

	        //从每一项中提取验证规则
	        var message = this.props.message;

	        //let options = extend(true,{},this.options );
	        var val = this.getValue(element),

	        //rule = null,
	        msg = '',
	            text = null,
	            rules = this.props.rules[element.name]; //element.getAttribute('data-rules') ;

	        /*{
	            require:true,
	                isName:function(){
	            return true
	        },
	            number:{
	                text:'不能为空',
	                    params:1,
	                    rule:function(){
	                    return true;
	                }
	            }
	        }*/
	        this.vals[element.name] = val;
	        for (var rule in rules) {

	            text = rules[rule];
	            //text =typeof(text)!=='string' ? text : {text:text};
	            if (typeof text == 'boolean') {
	                text = {};
	            }
	            if (!text.text) {
	                text.text = message[rule];
	            }

	            var validate = text.rule && text.rule instanceof Function ? text.rule : this[rule];

	            if (!validate.call(this, val, element, text.params)) {
	                msg = text.text;
	                break;
	            }
	            /*if(text.url && text.url!='' ){
	                msg = this.ajaxValidate(text.url,val,text.params);
	                if(typeof(msg) !== 'string'){
	                    msg = text.text;
	                }
	                break;
	            }else if(!this[rule].call(this,val,element,text.params)  ){
	                msg = text.text;
	                break;
	            }*/
	        }
	        return this.formatString(msg, text && text.params || '');
	    };

	    //验证

	    ValidatorPanel.prototype.validate = function validate(element) {
	        var message = this.check(element) || '';
	        if (message !== '' && element.style.display != 'none' && !this.isUpdate) {
	            //错误提示
	            //this.elements[element.name].status=1;

	            this.setTipsOffset(element);

	            //设置错误消息
	            this.setState({
	                message: message,
	                show: message
	            });
	            //this.highlight(this.parent, this.options.errorClass, this.options.validClass);
	            if (this.props.timeout) {
	                clearTimeout(this.validateTimeout);
	                this.validateTimeout = setTimeout((function () {
	                    this.setState({
	                        show: ''
	                    });
	                }).bind(this), this.props.timeout);
	            }
	            return false;
	        }
	        this.setState({
	            show: null
	        });
	        this.unhighlight(element);
	        this.isUpdate = false;
	        //this.hide();
	        return true;
	    };

	    ValidatorPanel.prototype.validateHandler = function validateHandler(e) {
	        clearTimeout(this.vaTimeout);
	        this.vaTimeout = setTimeout(this.validate.bind(this, e.target), 400);
	    };

	    ValidatorPanel.prototype.submit = function submit(e) {
	        clearTimeout(this.__blurTimeobj);
	        var elements = this.elements,
	            element = null,
	            isSubmit = true;
	        if (!elements || elements.length <= 0) {
	            return false;
	        }
	        for (var item in elements) {
	            element = elements[item]; //React.findDOMNode(this.props.refs[item] );
	            if (element && element.nodeType == 1) {
	                if (!this.validate(element)) {
	                    setTimeout(function () {
	                        element.focus();
	                    });
	                    isSubmit = false;
	                    break;
	                }
	            }
	        }

	        if (isSubmit && this.props.validateCallback(this.vals)) {
	            this.props.submitCallback && this.props.submitCallback(this.vals);
	            return true;
	        }
	        e.preventDefault();
	        e.stopPropagation();
	        return false;
	    };

	    //隐藏错误提示

	    ValidatorPanel.prototype.hide = function hide() {};

	    ValidatorPanel.prototype.parents = function parents(ele, str) {
	        try {
	            var tempNode = ele.parentNode;
	            while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
	                tempNode = tempNode.parentNode;
	            }
	            return [tempNode];
	        } catch (err) {
	            return [];
	        }
	    };

	    ValidatorPanel.prototype.getTip = function getTip() {
	        return this.form && this.form.querySelector('.' + this.getClassName("validate-tips"));
	    };

	    //设置错误提示框的位置

	    ValidatorPanel.prototype.setTipsOffset = function setTipsOffset(element) {
	        var node = null,
	            name = element.name,
	            d = this.props.direction,
	            tb = d === "bottom" || d === "top",
	            tip = this.getTip(),
	            tag = this.props.componentTag,
	            w = element.offsetLeft,
	            t = element.offsetTop,
	            h = element.offsetHeight;

	        while (element && (element.nodeType !== 1 || element.nodeName.toLowerCase() != tag)) {
	            element = element.parentNode;
	        }

	        if (element) {
	            element = element.querySelectorAll('[name="' + name + '"]');

	            element = element[tb ? 0 : element.length - 1];

	            w = element.offsetLeft;
	            t = element.offsetTop;
	            node = element.offsetParent;

	            while (node && node.nodeName.toLowerCase() != tag) {
	                t += node.offsetTop;
	                w += node.offsetLeft;
	                node = node.offsetParent;
	            }
	            //w = tip.offsetWidth;
	            this.highlight(element);

	            tip.style.display = "block";

	            setTimeout((function () {
	                if (tb) {

	                    tip.style.cssText = 'left:' + w + 'px;top:' + (d === "bottom" ? t + element.offsetHeight : t - tip.offsetHeight) + 'px;width:' + element.offsetWidth + 'px';
	                } else {
	                    //height:${h}px;line-height:${h}px;
	                    tip.style.cssText = 'left:' + (w + (d === "right" ? element.offsetWidth + 10 : 0)) + 'px;top:' + (t + (element.offsetHeight / 2 - tip.offsetHeight / 2)) + 'px;';
	                }
	            }).bind(this));
	        } else {
	            //tip.style.display='none';
	        }
	    };

	    //废弃

	    ValidatorPanel.prototype.bindValidate = function bindValidate() {
	        var _this2 = this;

	        //let _this = this;
	        var same = null,
	            showOrhide = 'show';
	        var options = _react2['default'].Children.map(this.props.children, function (option) {
	            //将validate保存起来，在适当的时候调用
	            var _option$props = option.props;
	            var rules = _option$props.rules;
	            var name = _option$props.name;

	            if (rules) {

	                _this2.elements[name] = {
	                    rules: rules,
	                    status: 0
	                };

	                var opt = _react2['default'].cloneElement(option, {
	                    onBlur: _this2.validateHandler.bind(_this2),
	                    onFocus: _this2.validateHandler.bind(_this2),
	                    onClick: _this2.validateHandler.bind(_this2),
	                    onKeyUp: _this2.validateHandler.bind(_this2),
	                    ref: 'ref-' + name
	                });

	                showOrhide = _this2.state[name] && same != name ? 'show' : 'hide';
	                same = name;
	                return { opt: opt };
	            }
	            return option;
	        }, this);
	        return options;
	    };

	    ValidatorPanel.prototype.getForm = function getForm() {
	        return _react2['default'].findDOMNode(this.refs[this.props.id ? this.props.id : this.formName]);
	    };

	    ValidatorPanel.prototype.getElements = function getElements() {
	        return this.form.querySelectorAll('[data-validate]');
	    };

	    ValidatorPanel.prototype.setDomEvent = function setDomEvent() {
	        var elements = this.getElements();var _this = this;var _props = this.props;
	        var trigger = _props.trigger;
	        var initCallback = _props.initCallback;
	        var submitElement = _props.submitElement;

	        var _loop = function (i, len) {
	            trigger.split(' ').forEach(function (event) {
	                elements[i].removeEventListener(event, _this._fun, false);
	                elements[i].addEventListener(event, _this._fun, false);
	            });
	        };

	        for (var i = 0, len = elements.length; i < len; i++) {
	            _loop(i, len);
	        }

	        this.elements = elements;
	    };

	    ValidatorPanel.prototype.componentDidMount = function componentDidMount() {

	        this._fun = (function (e) {
	            this.validateHandler(e);
	        }).bind(this);

	        this.form = this.getForm();

	        var elements = this.getElements();var _this = this;var _props2 = this.props;
	        var trigger = _props2.trigger;
	        var initCallback = _props2.initCallback;
	        var submitElement = _props2.submitElement;

	        /*for(let i=0,len=elements.length;i<len;i++){
	            trigger.split(' ').forEach((event)=>{
	                 elements[i].addEventListener(event,_this.validateHandler.bind(_this),false);
	            });
	        }*/

	        this.setDomEvent();

	        initCallback.call(this, this.submit.bind(this));

	        if (submitElement) {
	            document.querySelector(submitElement).addEventListener('mousedown', this.submit.bind(this), false);
	        }
	        //let tip = this.getTip();

	        this.elements = elements;
	        this.init = false;
	    };

	    ValidatorPanel.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	        if (this.props.update != this.update) {
	            this.setDomEvent();

	            this.update = this.props.update;
	            this.isUpdate = true;
	            this.setState({
	                show: ''
	            });
	        }
	    };

	    ValidatorPanel.prototype.removeFadeout = function removeFadeout() {
	        clearTimeout(this.fadeoutTimeObj);
	        this.fadeoutTimeObj = setTimeout((function () {
	            if (!this.state.show && !this.init && this.state.fadeShow != 'none') {
	                this.removeClass(this.getTip(), 'fadeout');
	            }
	        }).bind(this), 400);
	    };

	    ValidatorPanel.prototype.render = function render() {
	        var _props3 = this.props;
	        var Component = _props3.componentTag;
	        var direction = _props3.direction;
	        var id = _props3.id;

	        this.removeFadeout();
	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { ref: id ? id : this.formName, className: this.getClassName('validate') }),
	            this.props.children,
	            _react2['default'].createElement(
	                'div',
	                { ref: 'ref-validateTips', className: _classnames2['default'](this.getClassName('validate-tips'), 'animated', '' + (direction === "bottom" || direction === "top" ? 'bottom' : ''), '' + (this.init ? "" : this.state.show ? "fadein" : "fadeout")) },
	                _react2['default'].createElement('i', null),
	                this.state.message
	            )
	        );
	    };

	    var _ValidatorPanel = ValidatorPanel;
	    ValidatorPanel = _utilsClassNameMixin2['default'](ValidatorPanel) || ValidatorPanel;
	    return ValidatorPanel;
	})(_react.Component);

	exports['default'] = ValidatorPanel;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;