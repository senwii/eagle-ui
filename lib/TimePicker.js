'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsClassNameMixinJs = require('./utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

var _SliderJs = require('./Slider.js');

var _SliderJs2 = _interopRequireDefault(_SliderJs);

var _CalendarPanelJs = require('./CalendarPanel.js');

var _CalendarPanelJs2 = _interopRequireDefault(_CalendarPanelJs);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var TimePicker = (function (_CalendarPanel) {
    _inherits(TimePicker, _CalendarPanel);

    _createClass(TimePicker, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            format: 'HH:mm tt',
            defaultValue: '',
            direction: 'auto',
            classPrefix: 'calendar',
            getValueCallback: function getValueCallback() {}
        },
        enumerable: true
    }]);

    function TimePicker(props, context) {
        _classCallCheck(this, _TimePicker);

        _CalendarPanel.call(this, props, context);
        this.state = _extend2['default'](this.state, {
            hours: 0,
            minutes: 0,
            posStyle: {}
        });
        this.timerId = this.uniqueId();
        this.tt = '';
        this.matchTime = /\s?(\d{1,2}).(\d{1,2}).{0,1}\s?([a-zA-Z]*)$/;
        this.hhList = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.hhUpList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }

    TimePicker.prototype.uniqueId = function uniqueId() {
        return (this.classPrefix || 'unique') + '_' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
    };

    TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.resetValue(nextProps.defaultValue);
    };

    //补位

    TimePicker.prototype.fill = function fill(d) {
        if (typeof d != 'undefined') {
            d = parseInt(d, 10);
            return d < 10 ? '0' + d : d;
        }
        return d;
    };

    TimePicker.prototype.formatTimer = function formatTimer() {
        var format = arguments.length <= 0 || arguments[0] === undefined ? this.props.format : arguments[0];

        return format.replace(/H{1,2}/i, this.fill(this.getHours(this.state.hours))).replace(/m{1,2}/, this.fill(this.state.minutes)).replace(/t{1,2}/i, this.tt);
    };

    TimePicker.prototype.setTime = function setTime(key, value) {
        var _setState,
            _this = this;

        if (key === 'hours') {
            this.sliderHoursIndex = value;
        }

        this.setState((_setState = {}, _setState[key] = value, _setState));
        setTimeout(function () {
            var date = _this.formatTimer();
            _this.changeSlider(date);
            _this.props.getValueCallback(date);
        });
    };

    TimePicker.prototype.getHours = function getHours(h) {
        //不是24小时制
        if (!this.props.format.match('HH')) {
            return this.hhList[h];
        }
        return h;
    };

    TimePicker.prototype.getTT = function getTT(h) {
        var tt = this.sliderHoursIndex >= 12 ? 'pm' : 'am';
        this.tt = tt;
        return tt.toUpperCase();
    };

    TimePicker.prototype.getTimelayer = function getTimelayer() {
        return _react2['default'].createElement(
            'div',
            { style: { marginTop: '20px' } },
            _react2['default'].createElement(
                'div',
                { style: {
                        'textAlign': 'center'
                    } },
                _react2['default'].createElement(
                    'span',
                    null,
                    this.fill(this.getHours(this.state.hours)),
                    ':',
                    this.fill(this.state.minutes),
                    ' ',
                    this.getTT(this.state.hours * 1)
                )
            ),
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_SliderJs2['default'], { max: 23, min: 0, getValueCallback: this.setTime.bind(this, 'hours'), defaultValue: this.state.hours * 1, initCallback: this.setTime.bind(this, 'hours'), style: { marginTop: '20px' } }),
                _react2['default'].createElement(_SliderJs2['default'], { max: 59, getValueCallback: this.setTime.bind(this, 'minutes'), defaultValue: this.state.minutes * 1, style: { marginTop: '20px' } })
            )
        );
    };

    TimePicker.prototype.resetValue = function resetValue() {
        var defaultValue = arguments[0] || this.props.defaultValue;
        var v = defaultValue.match(this.matchTime);
        var tt = '';
        if (v && v.length >= 3) {
            var h = v[1] * 1;
            var m = v[2] * 1;
            if (v.length >= 4) {
                tt = this.tt = v[3].toLowerCase();
            }
            if (!this.props.format.match('HH')) {
                h = this.hhUpList[h];
            }
            this.setState({
                hours: h * 1,
                minutes: m * 1
            });
        }
    };

    TimePicker.prototype.inputChangeHandler = function inputChangeHandler(e) {
        var _this2 = this;

        var target = e.target;

        this.setState({
            value: target.value
        });
        clearTimeout(this.changeTimeObj);
        this.changeTimeObj = setTimeout(function () {
            _this2.props.getValueCallback(target.value);
        }, 600);
    };

    TimePicker.prototype.componentDidMount = function componentDidMount() {
        this.resetValue();
    };

    TimePicker.prototype.updateD = function updateD() {
        var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var extra = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this.setState({
            parentExtra: extra,
            posStyle: style
        });
    };

    TimePicker.prototype.updateDirectionTop = function updateDirectionTop() {
        var posStyle = this.state.posStyle;
        var _state$parentExtra = this.state.parentExtra;
        var _state$parentExtra$isUp = _state$parentExtra.isUp;
        var isUp = _state$parentExtra$isUp === undefined ? false : _state$parentExtra$isUp;
        var dir = _state$parentExtra.dir;
        var inputHeight = _state$parentExtra.inputHeight;

        if (isUp) {
            var panelHeight = this.refs[this.timerId].clientHeight;
            if (['left', 'right'].indexOf(dir) !== -1) {
                posStyle.top = '-' + (panelHeight - inputHeight) + 'px';
            } else {
                posStyle.top = '-' + (panelHeight + 5) + 'px';
            }
            this.setState({
                posStyle: posStyle
            });
        }
    };

    TimePicker.prototype.updateDirectionForChild = function updateDirectionForChild(style, obj) {
        this.updateD(style, obj);
    };

    TimePicker.prototype.getChildObject = function getChildObject() {
        return _reactLibReactDOM2['default'].findDOMNode(this.refs[this.timerId]);
    };

    TimePicker.prototype.changeSlider = function changeSlider() {
        var time = arguments.length <= 0 || arguments[0] === undefined ? this.formatTimer() : arguments[0];

        this.selectCallback(time);
    };

    TimePicker.prototype.renderTimer = function renderTimer() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](this.getClassName('container'), this.getClassName(this.state.isShow ? 'show' : 'hide', false)), ref: this.timerId, style: _extend2['default']({
                    position: 'absolute',
                    minWidth: '300px',
                    padding: '0 15px 15px'
                }, this.props.style, this.state.posStyle) }),
            this.getTimelayer()
        );
    };

    TimePicker.prototype.render = function render() {
        return this.renderHtml(this.renderTimer());
    };

    var _TimePicker = TimePicker;
    TimePicker = _utilsClassNameMixinJs2['default'](TimePicker) || TimePicker;
    return TimePicker;
})(_CalendarPanelJs2['default']);

exports['default'] = TimePicker;
module.exports = exports['default'];