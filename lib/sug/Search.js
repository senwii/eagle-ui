'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('.././Input.js');

var _Input2 = _interopRequireDefault(_Input);

var _Suggestion2 = require('./Suggestion');

var _Suggestion3 = _interopRequireDefault(_Suggestion2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_temp = _class = function (_Suggestion) {
    _inherits(Search, _Suggestion);

    function Search(props, context) {
        var defaultState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Search);

        var _this2 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props, context));

        _this2.inputId = _this2.uniqueId();

        _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'setDefaultState', _this2).call(_this2, defaultState);
        return _this2;
    }

    _createClass(Search, [{
        key: 'handler',
        value: function handler(eventType, e) {

            this.keyHandler(e);
            this.setState({
                value: e.target.value
            });
            if (this.props[eventType]) {
                this.props[eventType](e);
            }
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _props = this.props,
                getValueCallback = _props.getValueCallback,
                children = _props.children,
                iconStyle = _props.iconStyle,
                value = _props.value,
                classPrefix = _props.classPrefix,
                componentTag = _props.componentTag,
                defaultValue = _props.defaultValue,
                other = _objectWithoutProperties(_props, ['getValueCallback', 'children', 'iconStyle', 'value', 'classPrefix', 'componentTag', 'defaultValue']);

            return _react2.default.createElement(_Input2.default, _extends({
                ref: this.inputId
            }, other, {
                value: this.getTextValue(),
                iconStyle: iconStyle,
                onKeyUp: this.handler.bind(this, 'onKeyUp'),
                onChange: this.handler.bind(this, 'onChange'),
                onKeyDown: this.handler.bind(this, 'onKeyDown'),
                onFocus: this.focusHandler.bind(this),
                onBlur: this.inputBlurHandler.bind(this),
                iconClickCallback: function () {
                    _reactDom2.default.findDOMNode(this.refs[this.inputId]).getElementsByTagName('input')[0].focus();
                }.bind(this)
            }));
        }
    }, {
        key: 'inputBlurHandler',
        value: function inputBlurHandler() {

            this.removeActiveValue();
            this.hide();
            if (this.props.onBlur) {
                this.props.onBlur(e);
            }
        }
    }, {
        key: 'focusHandler',
        value: function focusHandler(e) {
            this.show();
            if (this.props.onFocus) {
                this.props.onFocus(e);
            } else {
                var val = this.trim(e.target.value);
                this.setDefaultData();
            }
        }
    }, {
        key: 'checkedCallback',
        value: function checkedCallback(sug, index) {
            sug = _reactDom2.default.findDOMNode(sug);

            var subItem = sug.firstChild,
                offestHeight = 0;
            if (subItem) {
                offestHeight = subItem.offsetHeight;
                sug.scrollTop = index * offestHeight;
            }
        }
    }, {
        key: 'loadedCallback',
        value: function loadedCallback() {
            //获取高度，然后给ul设置高度
            //let sug = ReactDom.findDOMNode(this.refs.suggestion );
            //this.refs.suggestion
            var item = this.getValue();
            item && this.execMethod('getValue', item.value, item.key, 'init');
        }
    }, {
        key: 'getValueCallback',
        value: function getValueCallback(value, key, type, _this) {

            type != 'init' && setTimeout(function () {
                _reactDom2.default.findDOMNode(_this.refs[_this.inputId]).getElementsByTagName('input')[0].blur();
            });
            _this.props.getValueCallback && _this.props.getValueCallback(value, key, type);
        }
    }, {
        key: 'renderSearch',
        value: function renderSearch() {
            return _react2.default.createElement(
                this.componentTag,
                { className: this.getProperty(), value: this.state.value },
                this.renderInput(),
                this.renderSuggestion()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderSearch();
        }
    }]);

    return Search;
}(_Suggestion3.default), _class.defaultProps = {
    /**
     * 回调方法，主要作用将value传给父级元素。默认为null
     * @property callback
     * @type func
     * @default null
     * */
    getValueCallback: null,
    /**
     * 样式类名前缀
     * @property classPrefix
     * @type string
     *
     * */
    classPrefix: 'search',
    componentTag: 'div',
    defaultValue: '' /*,
                     icon:'arrow_drop_down',
                     iconStyle:{
                     width:'30px',
                     height:'30px',
                     top: '15px',
                     right: '0'
                     }*/
}, _temp);
exports.default = Search;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Search, 'Search', '/Users/panqianjin/work/eagle-ui/src/sug/Search.js');
}();

;