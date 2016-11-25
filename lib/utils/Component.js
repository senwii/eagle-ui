'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PropertyMixin = require('./PropertyMixin');

var _PropertyMixin2 = _interopRequireDefault(_PropertyMixin);

var _ClassNameMixin = require('./ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _MethodMixin = require('./MethodMixin');

var _MethodMixin2 = _interopRequireDefault(_MethodMixin);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = (0, _PropertyMixin2.default)(_class = (0, _ClassNameMixin2.default)(_class = (0, _MethodMixin2.default)(_class = function (_Component) {
    _inherits(BaseComponent, _Component);

    function BaseComponent(props, context, defaultState) {
        _classCallCheck(this, BaseComponent);

        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props, context));

        if (defaultState) {
            _this.setDefaultState(defaultState);
        }
        _this.otherProps = {};
        _this._properties = [];
        _this._styles = [];
        _this.initCallback(_this);
        //验证
        _this.replaceProperties(_this.props);
        //注册
        _this.registerMethod(_this.otherProps);

        //ref唯一标识生成
        return _this;
    }

    _createClass(BaseComponent, [{
        key: 'setDefaultState',
        value: function setDefaultState(obj) {

            this.state = (0, _extend2.default)({}, {
                _isShow: false,
                _checked: false,
                _active: false
            }, obj || {});
        }
    }, {
        key: 'uniqueId',
        value: function uniqueId() {
            return (this.classPrefix || 'unique') + '_' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
        }
    }, {
        key: 'initCallback',
        value: function initCallback() {
            this.props.initCallback && this.props.initCallback(this);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            this.replaceProperties(nextProps);
            return true;
        }

        //renderDom(dom){
        //    this.setProperty(this.props);
        //    return dom;
        //}

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadedCallback && this.loadedCallback(this);
        }
    }, {
        key: 'setMethod',
        value: function setMethod(methodName, method) {

            if (methodName.match('Callback') == null) {
                throw new Error('The callback method name format is wrong, should be ' + methodName + 'Callback');
            }
            if (!this[methodName]) {
                this[methodName] = function (method) {
                    var m = method;
                    return function () {
                        return m.apply(m, Array.prototype.slice.call(arguments, 0));
                    };
                }(method);
            }
        }
    }, {
        key: 'execMethod',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(method) {
                var data,
                    _args = arguments;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = null;

                                method = method.indexOf('Callback') != -1 ? method : method + 'Callback';

                                if (!this[method]) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 5;
                                return this[method].apply(this[method], Array.prototype.slice.call(_args, 1).concat(this));

                            case 5:
                                data = _context.sent;

                            case 6:
                                return _context.abrupt('return', data);

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function execMethod(_x) {
                return _ref.apply(this, arguments);
            }

            return execMethod;
        }()

        //注册回调

    }, {
        key: 'registerMethod',
        value: function registerMethod(methods) {
            //注册回调
            //otherProps
            var method = null,
                methodName = '',
                other = {};
            for (var item in methods) {
                method = this.methods[item];
                if (method) {
                    this.setMethod(item, methods[item]);
                }
            }
            //this.otherProps = other;
        }
    }, {
        key: 'setProperties',
        value: function setProperties(props) {
            for (var item in props) {
                this.setProperty(item, props[item]);
            }
        }
    }, {
        key: 'setProperty',
        value: function setProperty(prop, val) {
            if (val !== undefined) {
                this.properties[prop] = val;
                if (this.props[prop] !== undefined) {
                    this.updateProperty({ key: prop, value: val }, this._properties, this._styles, this.otherProps);
                }
            }
        }
    }, {
        key: 'updateProperty',
        value: function updateProperty(props, propList, styleList, otherProps) {
            var propKey = props.key,
                propValue = props.value,
                propConfig = this.properties[propKey];

            var type = 'property';
            if (propConfig) {

                switch (typeof propConfig === 'undefined' ? 'undefined' : _typeof(propConfig)) {
                    case 'boolean':
                        if (propValue) {
                            propList.push(propKey);
                        }
                        break;
                    case 'function':
                        var param = propConfig.call(this, propValue);
                        if (typeof param == 'string') {
                            propList.push(param);
                        } else if (param.type && param.type == type) {
                            this[propKey] = param.value;
                        } else {
                            //{
                            //    border:val
                            //}
                            styleList.push(param);
                        }
                        break;
                    default:
                        propList.push(propConfig);
                        break;
                }
            } else {
                otherProps[propKey] = propValue;
            }
        }
    }, {
        key: 'replaceProperties',
        value: function replaceProperties(props) {
            // 整体替换
            var propList = [],
                styleList = [],
                otherProps = {};
            props = props ? props : this.props;
            for (var key in props) {
                this.updateProperty({ key: key, value: props[key] }, propList, styleList, otherProps);
            }
            this._properties = propList;
            this._styles = styleList;
            this.otherProps = otherProps;
        }
    }, {
        key: 'getProperty',
        value: function getProperty() {
            var p = this.classPrefix ? this.classPrefix + ' ' : '';
            p += this._properties.join(' ');
            return this.getClassName(p, false) + ' ' + this.getClassName(p); //eg-padding eg-btn-padding
        }
    }, {
        key: 'getStyles',
        value: function getStyles() {
            var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            var obj = {},
                styles = this._styles;

            for (var i = 0, len = styles.length; i < len; i++) {
                obj = (0, _extend2.default)({}, obj, styles[i]);
            }

            return (0, _extend2.default)({}, obj, style);
        }
    }, {
        key: 'show',
        value: function show() {
            this.setState({
                _isShow: true
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({
                _isShow: false
            });
        }
    }, {
        key: 'trim',
        value: function trim(str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
    }, {
        key: 'getDisplay',
        value: function getDisplay() {
            return this.state._isShow;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                '\u8BF7\u91CD\u5199\u7236\u7C7Brender()\u65B9\u6CD5'
            );
        }
    }]);

    return BaseComponent;
}(_react.Component)) || _class) || _class) || _class;

exports.default = BaseComponent;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BaseComponent, 'BaseComponent', '/Users/panqianjin/work/eagle-ui/src/utils/Component.js');
}();

;