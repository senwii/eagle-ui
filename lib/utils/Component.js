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

var BaseComponent = (function (_Component) {
    _inherits(BaseComponent, _Component);

    function BaseComponent(props, context) {
        _classCallCheck(this, _BaseComponent);

        _Component.call(this, props, context);

        this.otherProps = {};
        this.initCallback(this);
        //验证
        this.setProperty(this.props);
        //注册
        this.registerMethod(this.otherProps);

        //ref唯一标识生成

        this.state = {
            _isShow: false
        };
    }

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
        this[methodName + 'Callback'] = (function (method) {
            var m = method;
            return function () {
                m(arguments);
            };
        })(method);
    };

    //注册回调

    BaseComponent.prototype.registerMethod = function registerMethod(methods) {
        //注册回调
        //otherProps
        var method = null,
            methodName = '',
            other = {};
        for (var item in methods) {
            method = this.methods[methodName = item.replace(/^on/, '').toLowerCase()];
            if (method) {
                this.setMethod(methodName, methods[item]);
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
        return this.getClassName(p, false) + ' ' + this.getClassName(p);
    };

    BaseComponent.prototype.getStyles = function getStyles() {
        var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return _extend2['default']({}, style, this._styles);
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