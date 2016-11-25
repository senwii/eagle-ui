'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Button = require('./Button.js');

var _Button2 = _interopRequireDefault(_Button);

var _Row = require('./Row.js');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col.js');

var _Col2 = _interopRequireDefault(_Col);

var _Grid = require('./Grid.js');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip
 * @module ui
 * @constructor
 * @demo star.js {UI展示}
 * @demo tooltip.js {源码}
 * @show true
 * */
var Tooltip = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Tooltip, _Component);

    function Tooltip(props, context) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props, context));

        _this.state = {
            show: _this.props.show,
            direction: _this.props.direction
        };
        return _this;
    }
    /**
     * 接收到新props时执行,state.show变为nextProps.show
     * 接收到新props时执行,state.show变为nextProps.show
     * 实现隐藏与显示
     * @method componentWillReceiveProps
     * @return null
     * */


    _createClass(Tooltip, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                show: nextProps.show
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Grid2.default,
                { ref: 'tips', className: (0, _classnames3.default)(this.getClassName('wraper'), _defineProperty({}, this.getClassName('show'), this.state.show)) },
                _react2.default.createElement('div', { className: (0, _classnames3.default)(this.getClassName('arrow-' + this.props.direction)) }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames3.default)(this.getClassName('content')) },
                    this.props.msg
                )
            );
        }
    }]);

    return Tooltip;
}(_react.Component), _class2.propType = {
    /**
     * 提示是否展示
     * @property show
     * @type Boolean
     * @default null
     * */
    show: _react.PropTypes.boolean,
    /**
     * 提示内容
     * @property msg
     * @type String
     * @default null
     * */
    msg: _react.PropTypes.string,
    /**
     * 提示方向
     * @property direction
     * @type String
     * @default null
     * */
    direction: _react.PropTypes.string,
    classPrefix: _react.PropTypes.string,
    componentTag: _react.PropTypes.string
}, _temp)) || _class;

exports.default = Tooltip;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tooltip, 'Tooltip', '/Users/panqianjin/work/eagle-ui/src/Tooltip.js');
}();

;