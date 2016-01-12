'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ClassNameMixin = require('./ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _PropertyMixin = require('./PropertyMixin');

var _PropertyMixin2 = _interopRequireDefault(_PropertyMixin);

var _MethodMixin = require('./MethodMixin');

var _MethodMixin2 = _interopRequireDefault(_MethodMixin);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

require('babel-polyfill');

var BaseComponent = (function (_Component) {
    _inherits(BaseComponent, _Component);

    function BaseComponent(props, context, defaultState) {
        _classCallCheck(this, _BaseComponent);

        _Component.call(this, props, context);

        if (defaultState) {
            this.setDefaultState(defaultState);
        }

        this.otherProps = {};
        this.initCallback(this);
        //验证
        this.setProperty(this.props);
        //注册
        this.registerMethod(this.otherProps);

        //ref唯一标识生成
    }

    BaseComponent.prototype.setDefaultState = function setDefaultState(obj) {

        this.state = _extend2['default']({}, {
            _isShow: false,
            _checked: false,
            _active: false
        }, obj || {});
    };

    BaseComponent.prototype.uniqueId = function uniqueId() {
        return (this.classPrefix || 'unique') + '_' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
    };

    BaseComponent.prototype.initCallback = function initCallback() {
        this.props.initCallback && this.props.initCallback(this);
    };

    BaseComponent.prototype.componentWillMount = function componentWillMount() {};

    BaseComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        this.setProperty(nextProps);
        return true;
    };

    //renderDom(dom){
    //    this.setProperty(this.props);
    //    return dom;
    //}

    BaseComponent.prototype.componentDidMount = function componentDidMount() {
        this.loadedCallback && this.loadedCallback(this);
    };

    BaseComponent.prototype.setMethod = function setMethod(methodName, method) {

        if (methodName.match('Callback') == null) {
            throw new Error('The callback method name format is wrong, should be ' + methodName + 'Callback');
        }
        if (!this[methodName]) {
            this[methodName] = (function (method) {
                var m = method;
                return function () {
                    return m.apply(m, Array.prototype.slice.call(arguments, 0));
                };
            })(method);
        }
    };

    BaseComponent.prototype.execMethod = function execMethod(method) {
        var data,
            args$2$0 = arguments;
        return regeneratorRuntime.async(function execMethod$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    data = null;

                    method = method.indexOf('Callback') != -1 ? method : method + 'Callback';

                    if (!this[method]) {
                        context$2$0.next = 6;
                        break;
                    }

                    context$2$0.next = 5;
                    return regeneratorRuntime.awrap(this[method].apply(this[method], Array.prototype.slice.call(args$2$0, 1).concat(this)));

                case 5:
                    data = context$2$0.sent;

                case 6:
                    return context$2$0.abrupt('return', data);

                case 7:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, this);
    };

    //注册回调

    BaseComponent.prototype.registerMethod = function registerMethod(methods) {
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
    };

    BaseComponent.prototype.setProperties = function setProperties(props) {
        for (var item in props) {
            this.setProperty(item, props[item]);
        }
    };

    BaseComponent.prototype.setProperty = function setProperty(props) {
        var val = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

        var prop = null,
            styleList = [],
            propList = [];

        if (val != '') {
            this.properties[props] = val;
            return this;
        }

        var type = 'property';
        for (var item in props) {
            prop = this.properties[item];
            if (prop) {

                switch (typeof prop) {
                    case 'boolean':
                        if (props[item]) {
                            propList.push(item);
                        }
                        break;
                    case 'function':
                        var param = prop.call(this, props[item]);

                        if (typeof param == 'string') {
                            propList.push(param);
                        } else if (param.type && param.type == type) {
                            this[item] = param.value;
                        } else {
                            //{
                            //    border:val
                            //}
                            styleList.push(param);
                        }
                        break;
                    default:
                        propList.push(prop);
                        break;
                }
            } else {
                this.otherProps[item] = props[item];
            }
        }

        this._properties = propList;
        this._styles = styleList;
    };

    BaseComponent.prototype.getProperty = function getProperty() {
        var p = this.classPrefix ? this.classPrefix + ' ' : '';
        p += this._properties.join(' ');
        return this.getClassName(p, false) + ' ' + this.getClassName(p); //eg-padding eg-btn-padding
    };

    BaseComponent.prototype.getStyles = function getStyles() {
        var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var obj = {},
            styles = this._styles;

        for (var i = 0, len = styles.length; i < len; i++) {
            obj = _extend2['default']({}, obj, styles[i]);
        }

        return _extend2['default']({}, obj, style);
    };

    BaseComponent.prototype.show = function show() {
        this.setState({
            _isShow: true
        });
    };

    BaseComponent.prototype.hide = function hide() {
        this.setState({
            _isShow: false
        });
    };

    BaseComponent.prototype.trim = function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    };

    BaseComponent.prototype.getDisplay = function getDisplay() {
        return this.state._isShow;
    };

    BaseComponent.prototype.render = function render() {
        return _react2['default'].createElement(
            'h1',
            null,
            '请重写父类render()方法'
        );
    };

    var _BaseComponent = BaseComponent;
    BaseComponent = _MethodMixin2['default'](BaseComponent) || BaseComponent;
    BaseComponent = _PropertyMixin2['default'](BaseComponent) || BaseComponent;
    BaseComponent = _ClassNameMixin2['default'](BaseComponent) || BaseComponent;
    return BaseComponent;
})(_react.Component);

exports['default'] = BaseComponent;
module.exports = exports['default'];