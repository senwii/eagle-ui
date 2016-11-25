'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by mac on 15/9/7.
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Label = require('./Label.js');

var _Label2 = _interopRequireDefault(_Label);

var _Component2 = require('./utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 标签组
 * @class LabelGroup
 * @module ui
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo label.js {源码}
 * @show true
 * */
var LabelGroup = (_temp = _class = function (_Component) {
    _inherits(LabelGroup, _Component);

    function LabelGroup(props, context) {
        _classCallCheck(this, LabelGroup);

        var _this2 = _possibleConstructorReturn(this, (LabelGroup.__proto__ || Object.getPrototypeOf(LabelGroup)).call(this, props, context));

        _this2.setDefaultState({
            checked: _this2.props.defaultChecked,
            itemStyle: {
                marginLeft: _this2.props.spacing + 'px'
            }
        });

        _this2.isInit = true;

        _this2.titleObj = _this2.uniqueId();
        _this2.itemObj = _this2.uniqueId();
        return _this2;
    }

    _createClass(LabelGroup, [{
        key: 'activeHandler',
        value: function activeHandler(callback, value, text, target, active) {
            //debugger;

            if (this.state.checked != target.innerHTML) {
                this.setState({
                    checked: text
                });
                callback && callback(value, text, target, active);
            }
        }
    }, {
        key: 'renderTitle',
        value: function renderTitle() {
            var title = this.props.title,
                html = [];


            if (title) {
                html.push(_react2.default.createElement(
                    'div',
                    { className: 'title', key: title, ref: this.titleObj },
                    title
                ));
            }

            return html;
        }
    }, {
        key: 'loadedCallback',
        value: function loadedCallback() {

            var offsetV = _reactDom2.default.findDOMNode(this.refs[this.titleObj]),
                itemStyle = {};

            if (offsetV && !this.props.spacing) {
                var cssStr = 'margin-left:' + (offsetV.offsetWidth + 30) + 'px;';
                _reactDom2.default.findDOMNode(this.refs[this.itemObj]).style.cssText = cssStr;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _this = this;
            /**
             * key 重复，使用component生成唯一key
             * */
            var options = _react2.default.Children.map(this.props.children, function (option, index) {
                var _option$props = option.props,
                    activeCallback = _option$props.activeCallback,
                    url = _option$props.url,
                    children = _option$props.children,
                    value = _option$props.value,
                    other = _objectWithoutProperties(_option$props, ['activeCallback', 'url', 'children', 'value']);

                return _react2.default.createElement(
                    _Label2.default,
                    _extends({}, other, {
                        //key={children+index}
                        key: _this.uniqueId(),
                        url: url ? url : _this.props.url,
                        value: value ? value : children,
                        activeCallback: _this.activeHandler.bind(_this, activeCallback ? activeCallback : _this.props.activeCallback),
                        active: _this3.props.egType ? false : children === _this.state.checked }),
                    children
                );
            }, this);

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(this.getProperty(), 'clearfix') },
                this.renderTitle(),
                _react2.default.createElement(
                    'div',
                    { className: 'item-box clearfix', ref: this.itemObj, style: this.state.itemStyle },
                    _react2.default.createElement(
                        'div',
                        { className: 'item-list' },
                        options
                    )
                )
            );
        }
    }]);

    return LabelGroup;
}(_Component3.default), _class.propTypes = {
    /**
     * 左侧总标题
     * @property title
     * @type String
     * */
    title: _react.PropTypes.string,
    /**
     * 标签展现形式{form|simple|default}
     * @property egType
     * @type String
     * @default default
     * */
    egType: _react.PropTypes.oneOf(['simple', 'form', 'default']),
    /**
     * 点击后触发的回调，所有label会被继承
     * @property activeCallback
     * @type Function
     * */
    activeCallback: _react.PropTypes.func,
    /**
     * 默认选中的项
     * @property defaultChecked
     * @type String Integer
     * */
    defaultChecked: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    /**
     * 间距，label集合与左边title的间距
     * @property spacing
     * @type Integer
     * */
    spacing: _react.PropTypes.number
}, _class.defaultProps = {
    classPrefix: 'label-group',
    simple: false
}, _temp);
exports.default = LabelGroup;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LabelGroup, 'LabelGroup', '/Users/panqianjin/work/eagle-ui/src/LabelGroup.js');
}();

;