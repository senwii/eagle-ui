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

var _Input = require('./Input.js');

var _Input2 = _interopRequireDefault(_Input);

var _Component2 = require('./utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RadioGroup需与Input组件配合使用<br/>
 * 它的作用是将type=radio的Input组件在UI上展示在一起
 * 主要属性接口：
 * <ul>
 *     <li>name:radio组的name值<br>
 *         如：<code>
 *             name='fruits'
 *         </code>
 *     </li>
 *     <li>defaultChecked:默认选中值<br>
 *         如：<code>defaultChecked="石榴"</code>
 *     </li>
 *     <li>getValueCallback:获取选中值的回调函数<br>
 *         如：<code>getValueCallback={a()};a为对应的方法</code>
 *     </li>
 *
 * </ul>
 * @class RadioGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo input.js {源码}
 * @show true
 * */
var RadioGroup = (_temp = _class = function (_Component) {
    _inherits(RadioGroup, _Component);

    function RadioGroup(props, context) {
        _classCallCheck(this, RadioGroup);

        var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props, context));

        _this.state = {
            checked: _this.props.defaultChecked
        };
        return _this;
    }

    _createClass(RadioGroup, [{
        key: '_onChange',
        value: function _onChange(target) {

            if (this.state.checked != target.value) {

                this.setState({
                    checked: target.value
                });
                this.execMethod('getValue', target.value, target);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                checked: nextProps.defaultChecked
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var options = _react2.default.Children.map(this.props.children, function (option) {
                var _option$props = option.props,
                    name = _option$props.name,
                    value = _option$props.value,
                    label = _option$props.label,
                    other = _objectWithoutProperties(_option$props, ['name', 'value', 'label']);

                return _react2.default.createElement(_Input2.default, _extends({}, other, {
                    ref: option.props.value,
                    name: _this2.props.name,
                    key: option.props.value,
                    value: option.props.value,
                    label: option.props.label,
                    activeCallback: _this2._onChange.bind(_this2),
                    checked: option.props.value === _this2.state.checked }));
            }, this);

            return _react2.default.createElement(
                'div',
                { style: this.props.style,
                    className: (0, _classnames2.default)(this.getClassName('input-group'), this.props.className || '') },
                _react2.default.createElement(
                    'div',
                    { className: this.getClassName('input-group-container') },
                    options
                )
            );
        }
    }]);

    return RadioGroup;
}(_Component3.default), _class.propTypes = {
    /**
     * radio name
     * @property name
     * @type String
     * @default ''
     * */
    name: _react.PropTypes.string,
    /**
     * 默认选中项
     * @property defaultChecked
     * @type String
     * @default ''
     * */
    defaultChecked: _react.PropTypes.string,
    /**
     * 获取选中的值
     * @event getValueCallback
     * @param null
     * @default void
     * */
    getValueCallback: _react.PropTypes.func
}, _temp);
exports.default = RadioGroup;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RadioGroup, 'RadioGroup', '/Users/panqianjin/work/eagle-ui/src/RadioGroup.js');
}();

;