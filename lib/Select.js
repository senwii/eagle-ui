'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input.js');

var _Input2 = _interopRequireDefault(_Input);

var _Row = require('./Row.js');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col.js');

var _Col2 = _interopRequireDefault(_Col);

var _Grid = require('./Grid.js');

var _Grid2 = _interopRequireDefault(_Grid);

var _Search2 = require('./sug/Search');

var _Search3 = _interopRequireDefault(_Search2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 下拉选择框组件<br>
 *     支持在input框中输入文字或者点击下拉菜单中的选项进行查询,同时支持上下方向键进行选择。
 * 主要属性接口：
 * <ul>
 *     <li>defaultChecked:默认显示的选项即选中的选项<br>
 *         如：<code>
 *             defaultChecked="上海"
 *         </code>
 *     </li>
 *     <li>getValueCallback:获取元素之后的回调方法，主要将选中值传递给父级元素<br>
 *         如：<code>getValueCallback={::this.getValue}</code>
 *     </li>
 *     <li>placeholder:提示框的内容<br>
 *         如：<code>placeholder="请选择"</code>
 *     </li>
 *
 * </ul>
 * @class Select
 * @module form(表单)
 * @constructor
 * @extends Component
 * @demo star.js {UI展示}
 * @demo select.js {源码}
 * @show true
 * */
var Select = (_temp = _class = function (_Search) {
    _inherits(Select, _Search);

    function Select(props, context) {
        var defaultState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props, context));

        _this.inputId = _this.uniqueId();
        _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'setDefaultState', _this).call(_this, defaultState);
        return _this;
    }

    _createClass(Select, [{
        key: 'entryCallback',
        value: function entryCallback() {
            if (this.state._activeValue == '' && this.state.value == '') {
                this.setDefaultData();
                this.show();
            }
        }
    }]);

    return Select;
}(_Search3.default), _class.defaultProps = {
    /**
     * 回调方法，主要作用将value传给父级元素。默认为null
     * @event  getValueCallback
     * @param {primitive/pointer} value 值
     * @param {string} key 键
     * @param {string} type 类型
     * @default null
     * */
    getValueCallback: null,
    /**
     * 样式类名前缀
     * @property classPrefix
     * @type string
     * */
    classPrefix: 'select',
    componentTag: 'div',
    defaultValue: '',
    /**
     * 默认选中值，即初始显示内容
     * @property defaultChecked
     * @type String
     * @default ''
     * */
    defaultChecked: '',
    icon: 'arrow_drop_down',
    /**
     * 报svg的warning竟然在这里。。 真尴尬
     * */
    iconStyle: {
        width: '30px',
        height: '30px',
        top: '15px',
        right: 0
    }
}, _temp);
exports.default = Select;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Select, 'Select', '/Users/panqianjin/work/eagle-ui/src/Select.js');
}();

;