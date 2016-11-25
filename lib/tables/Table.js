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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ClassNameMixin = require('../utils/ClassNameMixin.js');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _Th = require('./Th.js');

var _Th2 = _interopRequireDefault(_Th);

var _Td = require('./Td.js');

var _Td2 = _interopRequireDefault(_Td);

var _Tr = require('./Tr.js');

var _Tr2 = _interopRequireDefault(_Tr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * <h5>eagle-ui表格组件</h5>
 * <strong><a href='../classes/Table.html'>Table定义表格</a></strong><br>
 * <strong><a href='../classes/Th.html'>Th定义表头单元格</a></strong><br>
 * <strong><a href='../classes/Tr.html'>Tr定义表格行</a></strong><br>
 * <strong><a href='../classes/Td.html'>Td定义表格单元格</a></strong><br>
 * @module table(表格)
 * @main table
 * @static
 */
/**
 * 表格组件
 * @class Table
 * @constructor
 * @module table(表格)
 * @extends Component
 * @demo star.js {UI展示}
 * @demo table.js {源码}
 * @show true
 * */
var Table = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Table, _Component);

    function Table(props, context) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props, context));

        var tableData = [];
        Object.assign(tableData, props.data);

        _this.state = {
            tableData: tableData,
            sortField: {}
        };
        return _this;
    }

    _createClass(Table, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.data) {
                var tableData = [];
                Object.assign(tableData, props.data);
                this.setState({
                    tableData: tableData,
                    sortField: {}
                });
            }
        }
    }, {
        key: 'sort',
        value: function sort(field, method) {
            if (method === 'asc') {
                this.state.tableData.sort(function (pre, cur) {
                    if (pre[field] > cur[field]) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                this.state.tableData.sort(function (pre, cur) {
                    if (pre[field] < cur[field]) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
            var sortFiled = this.state.sortField;
            for (var key in sortFiled) {
                sortFiled[key] = null;
            };
            sortFiled[field] = method;
            this.setState({
                tableData: this.state.tableData,
                sortFiled: sortFiled
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.data) {
                return _react2.default.createElement(
                    'table',
                    { className: (0, _classnames2.default)(this.getClassName('table')) },
                    this.props.children
                );
            };
            var self = this;
            var thList = _react2.default.Children.map(self.props.children, function (Column, thIndex) {
                return _react2.default.createElement(
                    _Th2.default,
                    _extends({}, Column.props, {
                        key: 'th-' + thIndex,
                        sort: _this2.state.sortField[Column.props.field],
                        clickCallback: _this2.sort.bind(_this2)
                    }),
                    Column.props.header
                );
            }, self);
            var trList = this.state.tableData.map(function (rowData, trIndex) {
                return _react2.default.createElement(
                    _Tr2.default,
                    { key: 'tr-' + trIndex },
                    _react2.default.Children.map(self.props.children, function (Column, tdIndex) {
                        return _react2.default.createElement(
                            _Td2.default,
                            { key: 'td-' + trIndex + '-' + tdIndex },
                            self.state.tableData[trIndex][Column.props.field]
                        );
                    }, self)
                );
            });
            return _react2.default.createElement(
                'table',
                _extends({}, this.props, { className: (0, _classnames2.default)(this.getClassNamesForArguments('table'), this.getClassNames(this.props), this.props.className) }),
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        _Tr2.default,
                        null,
                        thList
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    trList
                )
            );
        }
    }]);

    return Table;
}(_react.Component), _class2.propTypes = {
    /**
     * 用来渲染表格的数组，可选参数，如果传入data，会更具table下的column标签绑定的属性进行渲染
     * @property data
     * @type Array
     * */
    data: _react.PropTypes.array

}, _class2.defaultProps = {
    classPrefix: 'table'
}, _temp)) || _class;

exports.default = Table;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Table, 'Table', '/Users/panqianjin/work/eagle-ui/src/tables/Table.js');
}();

;