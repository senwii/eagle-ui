'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _ClassNameMixin = require('./utils/ClassNameMixin.js');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 日历组件<br />
 * 需要和CalendarPanel组合使用<br/>
 * 主要UI属性接口:
 * <ul>
 *     <li>startDate:定义起始日期<br>
 *         例如<code>
 *                 startDate="2015-11-11"
 *         </code>
 *     </li>
 *     <li>endDate:定义结束日期<br>
 *         例如<code>
 *            endDate="2015-12-1"
 *         </code>
 *     </li>
 *     <li>defaultDate:默认今天<br>
 *         默认<code>
 *            defaultDate=new Date()
 *         </code>
 *     </li>
 *      <li>format:日期格式<br>
 *         默认<code>
 *          format='yyyy-MM-dd'
 *         </code>
 *     </li>
 *      <li>selectCallback:选择某个具体日期后执行的回调函数<strong style='color:blue'>&nbsp;&nbsp;&nbsp;配合CalendarPanel使用时,不需要定义</strong><br>
 *         例如<code>
 *         selectCallback(dateString);参数为经过format处理后的日期
 *         </code>
 *     </li>
 * </ul>
 * @class Calendar
 * @module ui
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo calendar.js {源码}
 * @show true
 * */
var Calendar = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props, context) {
        _classCallCheck(this, Calendar);

        var _this2 = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props, context));

        _this2.today = new Date();

        _this2.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        _this2.windowType = ['getCalendar', 'getMonths', 'getYears'];

        var defaultDate = _this2.props.defaultDate || new Date();
        _this2.state = {
            currentDate: defaultDate,
            selectedDate: defaultDate,
            show: false,
            year: typeof defaultDate != 'string' ? defaultDate.getFullYear() : new Date(defaultDate).getFullYear(),
            windowType: _this2.windowType[!isNaN(_this2.props.windowType) ? _this2.props.windowType : 0]
        };
        return _this2;
    }

    _createClass(Calendar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            /*let defaultDate = nextProps.defaultDate;
             if(defaultDate){
                this.setState({
                    currentDate:defaultDate,
                    selectedDate:defaultDate,
                    year:typeof(defaultDate)!='string'?defaultDate.getFullYear():new Date(defaultDate).getFullYear()
                });
            }*/
        }
    }, {
        key: 'dateChange',
        value: function dateChange(defaultDate) {
            this.setState({
                currentDate: defaultDate,
                selectedDate: defaultDate,
                show: false,
                year: typeof defaultDate != 'string' ? defaultDate.getFullYear() : new Date(defaultDate).getFullYear(),
                windowType: this.windowType[!isNaN(this.props.windowType) ? this.props.windowType : 0]
            });
        }
    }, {
        key: 'getCurrentDate',
        value: function getCurrentDate() {
            var currentDate = this.state.currentDate;

            return typeof currentDate != 'string' ? currentDate : new Date(currentDate);
        }
    }, {
        key: 'getSelectedDate',
        value: function getSelectedDate() {
            var selectedDate = this.state.selectedDate;

            return typeof selectedDate != 'string' ? selectedDate : new Date(selectedDate);
        }
    }, {
        key: 'dateClick',
        value: function dateClick(date) {
            var d = date.split('/'),
                selectCallback = this.props.selectCallback;
            //console.dir(this.getDate(d[0],d[1],d[2]));
            selectCallback && selectCallback(this.getDate(d[0], d[1], d[2]), d);
            this.setState({
                currentDate: new Date(date)
            });
            this.props.closeCallback && this.props.closeCallback();
        }
    }, {
        key: 'getDates',
        value: function getDates(arr, selectedDate, defaultDate) {
            var d = void 0,
                dom = [],
                _this = this,
                month = selectedDate.getMonth(),
                year = selectedDate.getFullYear();

            var _props = this.props,
                startDate = _props.startDate,
                endDate = _props.endDate;
            //startDate='2015/11/16';
            //endDate='2015/11/20';

            for (var j = 1; j <= 7; j++) {

                if (arr.length > 0) {
                    var _classnames;

                    d = arr.shift();
                    var disabled = startDate && new Date(year, month, d).getTime() <= new Date(startDate).getTime() || endDate && new Date(year, month, d).getTime() >= new Date(endDate).getTime();
                    //"eg-active" eg-calendar-selected
                    dom.push(_react2.default.createElement(
                        'td',
                        { key: d + j + 'day' },
                        _react2.default.createElement(
                            'span',
                            { className: (0, _classnames5.default)(this.getClassName('item'), (_classnames = {}, _defineProperty(_classnames, this.getClassName('active', false), this.isToday(year, month + 1, d)), _defineProperty(_classnames, this.getClassName('disabled'), disabled), _defineProperty(_classnames, 'no-hover', d == ' '), _defineProperty(_classnames, this.getClassName('selected'), this.isOptionSelect(selectedDate, defaultDate) && defaultDate.getDate() == d && !disabled), _classnames)), onMouseDown: disabled || d == ' ' ? function () {} : _this.dateClick.bind(_this, year + '/' + (month + 1) + '/' + d) },
                            d
                        )
                    ));
                }
            }
            return dom;
        }
    }, {
        key: 'isOptionSelect',
        value: function isOptionSelect(current, selectDate) {
            return current.getFullYear() == selectDate.getFullYear() && current.getMonth() == selectDate.getMonth();
        }
        /**废弃*/

    }, {
        key: 'onChange',
        value: function onChange(e) {
            var target = e.target;
            this.setState({
                selectedDate: target.value
            });
        }
        /**废弃*/

    }, {
        key: 'drawSelect',
        value: function drawSelect() {
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
                        return _react2.default.createElement(
                            'option',
                            { key: year + '/' + month + '/1', value: year + '/' + month + '/1' },
                            year,
                            '\u5E74',
                            _this.getDay(month),
                            '\u6708'
                        );
                    });
                });
            };
            select.push(_react2.default.createElement(
                'select',
                {
                    className: 'options',
                    onChange: this.onChange.bind(this),
                    defaultValue: this.defaultSelectDate = selectedDate.getFullYear() + '/' + (selectedDate.getMonth() + 1) + '/' + '1' },
                option()
            ));
            return select;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var selectedDate = this.getSelectedDate(),
                defaultDate = this.getCurrentDate(),
                month = selectedDate.getMonth(),
                year = selectedDate.getFullYear(),
                arr = [];

            for (var i = 1, firstDay = new Date(year, month, 1).getDay(); i <= firstDay; i++) {
                arr.push(' ');
            }
            for (var _i = 1, monthDay = new Date(year, month + 1, 0).getDate(); _i <= monthDay; _i++) {
                arr.push(_i);
            }

            var d = void 0,
                dom = [],
                index = 0;
            while (arr.length > 0) {
                index += 1;
                dom.push(_react2.default.createElement(
                    'tr',
                    { className: 'body', key: 'line' + index },
                    this.getDates(arr, selectedDate, defaultDate)
                ));
            }

            return dom;
        }
    }, {
        key: 'isToday',
        value: function isToday(year, month, date) {
            var d = this.today;
            return d.getFullYear() == year && d.getMonth() + 1 == month && d.getDate() == date;
        }
        //补位

    }, {
        key: 'fill',
        value: function fill(d) {
            d = parseInt(d, 10);
            return d < 10 ? '0' + d : d;
        }
    }, {
        key: 'getDate',
        value: function getDate(year, month, date) {
            var format = this.props.format;


            return format.replace(/y{4}/, year).replace(/M{1,2}/, this.fill(month)).replace(/d{1,2}/, this.fill(date));
        }
    }, {
        key: 'getDay',
        value: function getDay(day) {
            day *= 1;
            return day <= 9 ? '0' + day : day;
        }
    }, {
        key: 'todayHandler',
        value: function todayHandler() {
            this.setState({
                selectedDate: this.today,
                currentDate: this.today
            });
            this.switchWindow(0);
            // this.dateClick(`${this.today.getFullYear()}/${this.getMonth(this.today.getMonth() )}/${this.today.getDate()}`);
        }
    }, {
        key: 'isParent',
        value: function isParent(obj, parentObj) {
            while (obj != undefined && obj != null) {
                //&& obj.nodeType==1&& obj.tagName.toUpperCase() != 'BODY'
                if (obj == parentObj) {
                    return true;
                }
                obj = obj.parentNode;
            }
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;
            //let calendarContainer = ReactDOM.findDOMNode(this);
            /*document.addEventListener('click',function(e){
                if(_this.isParent(e.target,calendarContainer) ){
                    console.dir('parent');
                }else{
                    console.dir('siquba');
                }
            },false);*/
        }
    }, {
        key: 'getMonth',
        value: function getMonth(month) {
            return month + 1;
        }
    }, {
        key: 'getYears',
        value: function getYears() {
            var _this3 = this;

            var year = this.switchYearForInterval(this.state.year),
                sYear = this.getSelectedDateSplit().year,
                _this = this;

            var years = function years(year) {
                var y = year - 1,
                    list = [];
                for (var i = -1; i < 11; i++) {
                    var _classnames2;

                    list.push(_react2.default.createElement(
                        'span',
                        { key: 'year' + i },
                        _react2.default.createElement(
                            'i',
                            { className: (0, _classnames5.default)((_classnames2 = {}, _defineProperty(_classnames2, _this.getClassName('selected', false), sYear == y), _defineProperty(_classnames2, 'old', i == -1 || i == 10), _classnames2)), onMouseDown: _this.switchYear.bind(_this3, y) },
                            y
                        )
                    ));
                    y += 1;
                }
                return list;
            };

            return _react2.default.createElement(
                'table',
                { className: 'calendar' },
                _react2.default.createElement(
                    'thead',
                    { className: 'eg-calendar-header' },
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchYearForInterval.bind(this, year - 1, true) })
                        ),
                        _react2.default.createElement(
                            'th',
                            { colSpan: '5' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                year + '\u5E74-' + (year + 9) + '\u5E74'
                            )
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchYearForInterval.bind(this, year + 10, true) })
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { className: 'month-list' },
                        _react2.default.createElement(
                            'td',
                            { colSpan: '7' },
                            years(year)
                        )
                    )
                )
            );
        }
    }, {
        key: 'getMonths',
        value: function getMonths() {
            var _context;

            var selectDate = this.getSelectedDateSplit(),
                _this = this;

            return _react2.default.createElement(
                'table',
                { className: 'calendar' },
                _react2.default.createElement(
                    'thead',
                    { style: {
                            display: this.props.calendarType == 'month' ? 'none' : 'table-header-group'
                        }, className: 'eg-calendar-header' },
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchYear.bind(this, '-1') })
                        ),
                        _react2.default.createElement(
                            'th',
                            { colSpan: '5' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title', onMouseDown: (_context = this.switchWindow).bind.call(_context, this, 2) },
                                selectDate.year + '\u5E74'
                            )
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchYear.bind(this, '+1') })
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { className: 'month-list' },
                        _react2.default.createElement(
                            'td',
                            { colSpan: '7' },
                            this.month.map(function (item) {
                                return _react2.default.createElement(
                                    'span',
                                    { key: item + '月' },
                                    _react2.default.createElement(
                                        'i',
                                        { className: (0, _classnames5.default)(_defineProperty({}, _this.getClassName('selected', false), selectDate.month == item)), onMouseDown: _this.switchMonth.bind(_this, item * 1 - 1) },
                                        item + '月'
                                    )
                                );
                            })
                        )
                    )
                )
            );
        }
    }, {
        key: 'getCalendar',
        value: function getCalendar() {
            var _context2;

            var selectDate = this.getSelectedDateSplit(),
                weeks = ['日', '一', '二', '三', '四', '五', '六'];

            return _react2.default.createElement(
                'table',
                { className: 'calendar' },
                _react2.default.createElement(
                    'thead',
                    { className: 'eg-calendar-header' },
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchMonth.bind(this, '-1') })
                        ),
                        _react2.default.createElement(
                            'th',
                            { colSpan: '5' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title', onMouseDown: (_context2 = this.switchWindow).bind.call(_context2, this, 1) },
                                selectDate.year + '\u5E74' + selectDate.month + '\u6708'
                            )
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchMonth.bind(this, '+1') })
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { className: 'head' },
                        weeks.map(function (week) {
                            return _react2.default.createElement(
                                'td',
                                { key: week },
                                week
                            );
                        })
                    ),
                    this.draw()
                )
            );
        }
    }, {
        key: 'switchWindow',
        value: function switchWindow(type) {
            //this.setState({
            //    windowType:type
            //});
            this.props.setWindowType(type);
        }
    }, {
        key: 'switchYearForInterval',
        value: function switchYearForInterval() {
            var ye = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedDateSplit().year;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
        }
    }, {
        key: 'switchYear',
        value: function switchYear(type) {
            var selected = this.getSelectedDate(),
                year = selected.getFullYear();

            if (this.props.calendarType == 'year') {
                var date = type + '/' + (selected.getMonth() + 1) + '/' + '1';
                var d = date.split('/'),
                    selectCallback = this.props.selectCallback;

                selectCallback && selectCallback(this.getDate(d[0], d[1], d[2]), d);
                this.setState({
                    currentDate: new Date(date),
                    selectedDate: new Date(typeof type == 'string' ? year + eval("(" + type + ")") : type, selected.getMonth(), 1)
                });
                this.props.closeCallback && this.props.closeCallback();
            } else {
                this.setState({
                    selectedDate: new Date(typeof type == 'string' ? year + eval("(" + type + ")") : type, selected.getMonth(), 1)
                });
                typeof type != 'string' && this.switchWindow(1);
            }
        }
    }, {
        key: 'switchMonth',
        value: function switchMonth(type) {
            var selected = this.getSelectedDate(),
                year = selected.getFullYear(),
                month = selected.getMonth();

            if (this.props.calendarType == 'month' || this.props.calendarType == 'yearMonth') {
                var date = year + '/' + (type + 1) + '/' + '1';
                var d = date.split('/'),
                    selectCallback = this.props.selectCallback;
                //console.dir(this.getDate(d[0],d[1],d[2]));
                selectCallback && selectCallback(this.getDate(d[0], d[1], d[2]), d);
                this.setState({
                    currentDate: new Date(date),
                    selectedDate: new Date(year, typeof type == 'string' ? month + eval("(" + type + ")") : type, 1)
                });
                this.props.closeCallback && this.props.closeCallback();
            } else {
                this.setState({
                    selectedDate: new Date(year, typeof type == 'string' ? month + eval("(" + type + ")") : type, 1)
                });
                typeof type != 'string' && this.switchWindow(0);
            }
        }
    }, {
        key: 'getSelectedDateSplit',
        value: function getSelectedDateSplit() {
            var selectedDate = this.getSelectedDate();

            var year = selectedDate.getFullYear(),
                month = this.getMonth(selectedDate.getMonth()),
                date = selectedDate.getDate();

            return { year: year, month: month, date: date };
        }
    }, {
        key: 'render',
        value: function render() {
            var windowType = this.props.windowType;


            windowType = this.windowType[windowType];
            //!isNaN(windowType) &&this.state.windowType==this.windowType[0] ?this.windowType[windowType] :this.state.windowType;
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames5.default)(this.getClassName('container'), this.getClassName(this.props.show ? 'show' : 'hide', false)) },
                _react2.default.createElement(
                    'div',
                    { className: 'eg-calendar-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'box' },
                        _react2.default.createElement(
                            'div',
                            { className: 'eg-calendar-body' },
                            this[windowType](),
                            _react2.default.createElement(
                                'div',
                                { style: {
                                        textAlign: 'right'
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    { style: {
                                            cursor: 'pointer',
                                            display: this.props.calendarType == 'date' ? 'inline-block' : 'none'
                                        }, onClick: this.todayHandler.bind(this) },
                                    '\u4ECA\u5929'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Calendar;
}(_react.Component), _class2.propTypes = {
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
     * 日期选择控件类型,date表示可以选择年月日，year只能选择年份，month只能选择月份
     * @property calendarType
     * @type string
     * @default 'date'
     * */
    calendarType: _react.PropTypes.string,
    /**
     * 选择某个具体日期后执行的回调函数
     * @event  selectCallback
     * @param {string} date 日期
     * @default void
     * */
    selectCallback: _react.PropTypes.func
}, _class2.defaultProps = {
    format: 'yyyy-MM-dd',
    classPrefix: 'calendar'
}, _temp)) || _class;

exports.default = Calendar;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Calendar, 'Calendar', '/Users/panqianjin/work/eagle-ui/src/Calendar.js');
}();

;