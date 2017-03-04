'use strict';

exports.__esModule = true;

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

var _TimePickerJs = require('./TimePicker.js');

var _TimePickerJs2 = _interopRequireDefault(_TimePickerJs);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var DateTimePicker = (function (_TimePicker) {
    _inherits(DateTimePicker, _TimePicker);

    _createClass(DateTimePicker, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'calendar',
            componentTag: 'Input',
            calendarType: 'date',
            direction: 'auto',
            defaultValue: '',
            format: 'yyyy-MM-dd HH:mm tt',
            getValueCallback: function getValueCallback() {}
        },
        enumerable: true
    }]);

    function DateTimePicker(props, context) {
        _classCallCheck(this, _DateTimePicker);

        _TimePicker.call(this, props, context);
    }

    DateTimePicker.prototype.isDatePanel = function isDatePanel() {
        return this.props.format.match(/(yyyy|MM|dd)+/);
    };

    DateTimePicker.prototype.updateDirectionForChild = function updateDirectionForChild(style, obj) {
        this.isDatePanel() ? this.refs[this.calendarContainer + 'calendar'].updateDirection(style, obj) : this.updateD(style, obj);
    };

    DateTimePicker.prototype.getChildObject = function getChildObject() {
        return this.isDatePanel() ? _reactLibReactDOM2['default'].findDOMNode(this.refs[this.calendarContainer + 'calendar']) : _reactLibReactDOM2['default'].findDOMNode(this.refs[this.timerId]);
    };

    DateTimePicker.prototype.selectCallback = function selectCallback(date, dateTime) {
        if (dateTime && dateTime.length >= 3) {
            this.__date = date;
        }
        date = this.formatTimer(this.__date || this.props.format);
        if (date.match(/(yyyy|MM|dd)+/)) {
            date = date.substr(date.indexOf(' ') + 1);
        }
        this.props.getValueCallback(date);
        this.setState({
            value: date
        });
    };

    DateTimePicker.prototype.dateChange = function dateChange(d) {
        this.refs[this.calendarContainer + 'calendar'].dateChange(d);
    };

    DateTimePicker.prototype.getDate = function getDate(year, month, date) {
        var format = this.props.format;

        return format.replace(/y{4}/, year).replace(/M{1,2}/, this.fill(month)).replace(/d{1,2}/, this.fill(date));
    };

    DateTimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.isDatePanel()) {
            var date = nextProps.defaultValue.match(/^((\d{4}).(\d{0,2}).(\d{0,2}))+/);
            if (date && date.length >= 2) {
                this.dateChange(date[1]);
                this.__date = this.getDate(date[2], date[3], date[4]);
            }
        }
        this.resetValue(nextProps.defaultValue);
    };

    DateTimePicker.prototype.render = function render() {
        return this.renderHtml(this.isDatePanel() ? this.renderCalendar(this.props.format.toLowerCase().indexOf('hh') != -1 ? this.getTimelayer() : null) : this.renderTimer());
    };

    var _DateTimePicker = DateTimePicker;
    DateTimePicker = _utilsClassNameMixinJs2['default'](DateTimePicker) || DateTimePicker;
    return DateTimePicker;
})(_TimePickerJs2['default']);

exports['default'] = DateTimePicker;
module.exports = exports['default'];