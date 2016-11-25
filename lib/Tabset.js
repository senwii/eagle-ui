'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * Created by mac on 15/9/7.
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tab = require('./Tab.js');

var _Tab2 = _interopRequireDefault(_Tab);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 导航标签组件，用户可以在不同的tab之间进行切换<br/>
 * 需要和Tab组件配合使用,Tabset相当于是Tab的容器
 * @class Tabset
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo star.js {UI展示}
 * @demo tab.js {源码}
 * @show true
 * */
var Tabset = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Tabset, _Component);

    function Tabset(props, context) {
        _classCallCheck(this, Tabset);

        var _this = _possibleConstructorReturn(this, (Tabset.__proto__ || Object.getPrototypeOf(Tabset)).call(this, props, context));

        _this.state = {
            active: props.activeTab,
            tabSlider: {
                left: 0,
                width: 0
            }
        };
        if (_this.props.tabCallback) {
            _this.props.tabCallback(props.activeTab);
        }
        return _this;
    }

    _createClass(Tabset, [{
        key: 'highlightTab',
        value: function highlightTab() {
            var activeTab = _reactDom2.default.findDOMNode(this.refs['tabItem' + this.state.active]);
            var slider = _reactDom2.default.findDOMNode(this.refs['slider']);

            slider.style.width = activeTab.offsetWidth + 'px';
            slider.style.left = activeTab.offsetLeft + 'px';
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            //this.tabItemListMouseLeaveHandler();
            this.highlightTab();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.highlightTab();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.activeTab != undefined) {
                this.setState({
                    active: props.activeTab
                });
            }
        }
    }, {
        key: 'activeHandler',
        value: function activeHandler(index) {
            if (this.state.active !== index) {
                this.setState({
                    active: index
                });
                if (this.props.tabCallback) {
                    this.props.tabCallback(index);
                }
            }
        }
    }, {
        key: 'tabItemListMouseLeaveHandler',
        value: function tabItemListMouseLeaveHandler() {
            //let activeTab=ReactDom.findDOMNode(this.refs['tabItem'+this.state.active]);
            //this.timeoutObj=setTimeout(function(){
            //    this.tabItemMouseEnterHandler(activeTab.offsetLeft,activeTab.offsetWidth);
            //}.bind(this),400);
        }
    }, {
        key: 'tabItemMouseEnterHandler',
        value: function tabItemMouseEnterHandler(left, width) {
            //clearTimeout(this.timeoutObj);
            //clearTimeout(this.timeoutEnter);
            //this.timeoutEnter = setTimeout(function(){
            //    this.setState({
            //        tabSlider:{
            //            left,
            //            width
            //        }
            //    });
            //}.bind(this),200);

        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var headings = _react2.default.Children.map(this.props.children, function (option, index) {
                var _option$props = option.props,
                    tabCallback = _option$props.tabCallback,
                    other = _objectWithoutProperties(_option$props, ['tabCallback']);

                return _react2.default.createElement(_Tab2.default, _extends({
                    disableHoverAnimation: _this2.props.disableHoverAnimation ? true : false,
                    ref: 'tabItem' + index,
                    index: index,
                    active: _this2.state.active === index,
                    clickCallback: _this2.activeHandler.bind(_this2),
                    mouseEnterCallback: _this2.tabItemMouseEnterHandler.bind(_this2)
                }, other));
            }, this);
            var panes = _react2.default.Children.map(this.props.children, function (option, index) {
                return _react2.default.createElement(
                    'div',
                    {
                        className: (0, _classnames2.default)(_this2.getClassName('panes')),
                        style: { display: _this2.state.active === index ? null : 'none' }
                    },
                    option.props.children
                );
            }, this);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { className: (0, _classnames2.default)(this.getClassName('tab-list')),
                        onMouseLeave: this.tabItemListMouseLeaveHandler.bind(this) },
                    headings,
                    _react2.default.createElement(
                        'li',
                        { className: (0, _classnames2.default)(this.getClassName('slider-container')) },
                        _react2.default.createElement('div', { ref: 'slider', className: (0, _classnames2.default)(this.getClassName('slider')) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(this.getClassName('tab-content')) },
                    panes
                )
            );
        }
    }]);

    return Tabset;
}(_react.Component), _class2.defaultProps = {
    classPrefix: 'tabset',
    activeTab: 0
}, _class2.propTypes = {
    /**
     * 需要在初始的时候打开第几个tab，默认为0（从0计数，即打开第一个tab）
     * @property activeTab
     * @type Number
     * @default 0
     * */
    activeTab: _react.PropTypes.number,
    /**
     * 回调方法，当用户切换不同tab时，会调用这个回调。
     * @event  tabCallback
     * @param {Number} activeTabIndex 当前激活的是第几个tab，从0开始计数
     * @default undefined
     * */
    tabCallback: _react.PropTypes.func,
    disableHoverAnimation: _react.PropTypes.bool
}, _temp)) || _class;

exports.default = Tabset;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tabset, 'Tabset', '/Users/panqianjin/work/eagle-ui/src/Tabset.js');
}();

;