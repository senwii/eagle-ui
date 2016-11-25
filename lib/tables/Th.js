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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 表头单元格组件
 * @class Th
 * @constructor
 * @module table(表格)
 * @extends Component
 * @demo star.js {UI展示}
 * @demo table.js {源码}
 * @show true
 * */
var Th = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Th, _Component);

    function Th(props, context) {
        _classCallCheck(this, Th);

        return _possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).call(this, props, context));
    }

    _createClass(Th, [{
        key: 'sortHandler',
        value: function sortHandler() {
            var sortMethod = this.props.sort;
            if (!sortMethod || sortMethod === 'asc') {
                sortMethod = 'des';
            } else {
                sortMethod = 'asc';
            }
            this.props.clickCallback(this.props.field, sortMethod);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'th',
                _extends({}, this.props, {
                    onClick: this.sortHandler.bind(this) }),
                this.props.children,
                this.props.sort === 'des' ? _react2.default.createElement(
                    'span',
                    null,
                    '\u2193'
                ) : this.props.sort === 'asc' ? _react2.default.createElement(
                    'span',
                    null,
                    '\u2191'
                ) : null
            );
        }
    }]);

    return Th;
}(_react.Component), _class2.propTypes = {}, _class2.defaultProps = {}, _temp)) || _class;

exports.default = Th;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Th, 'Th', '/Users/panqianjin/work/eagle-ui/src/tables/Th.js');
}();

;