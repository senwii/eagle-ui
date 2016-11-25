'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ClassNameMixin = require('./utils/ClassNameMixin.js');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _Component2 = require('./utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Input = require('./Input.js');

var _Input2 = _interopRequireDefault(_Input);

var _Calendar = require('./Calendar.js');

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CalendarPanel组件<br>
 * 接受Calendar的所有属性接口，额外增加一个getValueCallback方法
 *
 * 主要属性接口:
 * <ul>
 *     <li>getValueCallback参数为<code>格式化后的string</code></li>
 *     <li style='color:red'><a href='./Calendar.html'>其他属性定义请参照Calendar组件</a></li>
 * </ul>
 *
 * @class CalendarPanel
 * @module ui
 * @extends Component
 * @constructor
 * @demo  star.js {UI展示}
 * @demo  calendar.js {源码}
 * @show true
 * */
var CalendarPanel = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(CalendarPanel, _Component);

    _createClass(CalendarPanel, [{
        key: 'getFormat',
        value: function getFormat() {
            var formatMap = {
                date: this.props.format || 'yyyy-MM-dd',
                month: this.props.monthFormat || 'MM',
                year: this.props.yearFormat || 'yyyy',
                yearMonth: this.props.yearMonthFormat || 'yyyy-MM'
            };
            return formatMap[this.props.calendarType];
        }
    }, {
        key: 'getWindowType',
        value: function getWindowType() {
            var typeMap = {
                date: 0,
                month: 1,
                year: 2,
                yearMonth: 1
            },
                windowType = typeMap[this.props.calendarType] ? typeMap[this.props.calendarType] : 0;
            return windowType;
        }
    }]);

    function CalendarPanel(props, context) {
        _classCallCheck(this, CalendarPanel);

        var _this2 = _possibleConstructorReturn(this, (CalendarPanel.__proto__ || Object.getPrototypeOf(CalendarPanel)).call(this, props, context));

        _this2.calendarContainer = _this2.uniqueId();
        _this2.inputId = _this2.uniqueId();
        _this2.state = {
            isShow: false,
            value: _this2.props.defaultDate || '',
            windowType: _this2.getWindowType()
        };
        return _this2;
    }

    _createClass(CalendarPanel, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            /*this.setState({
                value: nextProps.defaultDate
            });*/
        }
    }, {
        key: 'doSetCapture',
        value: function doSetCapture(input) {
            if (input.setCapture) {
                this.doReleaseCapture();
                input.setCapture();
                this.ctObj = input;
            }
        }
    }, {
        key: 'doReleaseCapture',
        value: function doReleaseCapture() {
            if (this.ctObj && this.ctObj.releaseCapture) {
                this.ctObj.releaseCapture();
                this.ctObj = null;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'inputBlurHandler',
        value: function inputBlurHandler() {
            this.doReleaseCapture();
            this.close();
        }
    }, {
        key: 'inputMouseUpHandler',
        value: function inputMouseUpHandler() {
            this.doReleaseCapture();
        }
    }, {
        key: 'inputFocusHandler',
        value: function inputFocusHandler(e) {

            var container = _reactDom2.default.findDOMNode(this.refs[this.calendarContainer]),
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
                windowType: this.getWindowType()
            });
        }
    }, {
        key: 'inputChangeHandler',
        value: function inputChangeHandler(e) {
            var target = e.target;

            this.setState({
                value: target.value
            });
        }
    }, {
        key: 'selectCallback',
        value: function selectCallback(date) {
            this.props.getValueCallback(date);
            this.setState({
                value: date
            });
        }
    }, {
        key: 'setWindowType',
        value: function setWindowType(type) {
            this.setState({
                windowType: type
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                isShow: false
            });
            this.input && this.input.blur();
        }
    }, {
        key: 'dateChange',
        value: function dateChange(d) {
            this.refs[this.calendarContainer + 'calendar'].dateChange(d);
            this.setState({
                value: d
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var Component = this.props.componentTag,
                _this = this;

            var options = _react2.default.Children.map(this.props.children, function (option) {

                return _react2.default.createElement(_Input2.default, _extends({}, option.props, {
                    ref: _this3.inputId,
                    onBlur: _this.inputBlurHandler.bind(_this),
                    onMouseUp: _this.inputMouseUpHandler.bind(_this),
                    onFocus: _this.inputFocusHandler.bind(_this),
                    value: _this.state.value,
                    onChange: _this.inputChangeHandler.bind(_this),
                    icon: option.props.icon,
                    iconClickCallback: function () {
                        _reactDom2.default.findDOMNode(this.refs[this.inputId]).getElementsByTagName('input')[0].focus();
                    }.bind(_this3)
                }));
            }, this);

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(this.getClassName('panel')), ref: this.calendarContainer },
                options,
                _react2.default.createElement(_Calendar2.default, _extends({
                    format: this.getFormat()
                }, this.props, {
                    ref: this.calendarContainer + 'calendar',
                    show: this.state.isShow,
                    selectCallback: this.selectCallback.bind(this),
                    windowType: this.state.windowType,
                    closeCallback: this.close.bind(this),
                    setWindowType: this.setWindowType.bind(this) }))
            );
        }
    }]);

    return CalendarPanel;
}(_Component3.default), _class2.propTypes = {
    showCallback: _react.PropTypes.func,
    hideCallback: _react.PropTypes.func,
    componentTag: _react.PropTypes.string,
    /**
     * 通过传入此函数获取日期值
     * @event  getValueCallback
     * @param {string} date 日期
     * */
    getValueCallback: _react.PropTypes.func
}, _class2.defaultProps = {
    classPrefix: 'calendar',
    componentTag: 'Input',
    calendarType: 'date',
    getValueCallback: function getValueCallback(date) {
        console.warn('通过向CalendarPanel传入回调函数"getValueCallback"可以获取到当前选取的日期值，当前选取的日期为：' + date);
    }
}, _temp)) || _class;

exports.default = CalendarPanel;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CalendarPanel, 'CalendarPanel', '/Users/panqianjin/work/eagle-ui/src/CalendarPanel.js');
}();

;