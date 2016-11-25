'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button.js');

var _Button2 = _interopRequireDefault(_Button);

var _Row = require('./Row.js');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col.js');

var _Col2 = _interopRequireDefault(_Col);

var _Grid = require('./Grid.js');

var _Grid2 = _interopRequireDefault(_Grid);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Component2 = require('./utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 提示组件
 * 类型：分为success,error,loading 三种。默认success
 * overalay是否显示遮罩，默认false不显示
 * @class Toast
 * @module ui
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo toast.js {源码}
 * @show true
 * */
var Toast = (_temp = _class = function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props, context) {
        _classCallCheck(this, Toast);

        return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props, context));
    }
    /**
     * 改变state.show 隐藏tips,并调用回调方法
     * @method close
     * @return null
     * */


    _createClass(Toast, [{
        key: 'close',
        value: function close() {
            var seconds = this.props.seconds * 1000,
                _this = this;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this.props.closeCallback && _this.props.closeCallback();
                _Dialog2.default.close();
            }, seconds);
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(className) {
            var _props = this.props,
                message = _props.message,
                children = _props.children,
                type = _props.type;

            this.close();
            return _react2.default.createElement(
                'div',
                { className: 'clearfix' },
                _react2.default.createElement('div', { style: { padding: '5px 15px', float: 'left' }, className: (0, _classnames2.default)(this.setPrefix('tips-' + type, false)) }),
                _react2.default.createElement(
                    'div',
                    { style: { padding: '5px 15px', float: 'right' } },
                    children || message
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderDialog('toast');
        }
    }]);

    return Toast;
}(_Component3.default), _class.propType = {
    /**
     * toast类型：分为success,error,loading 三种。默认success
     * @property type
     * @type String
     * @default success
     * */
    type: _react.PropTypes.string,
    /**
     * 文字信息
     * @property message
     * @type String
     * @default 保存成功
     * */
    message: _react.PropTypes.string,
    /**
     * tips n秒后消失 默认2秒
     * @property seconds
     * @type Integer
     * @default 2
     * */
    seconds: _react.PropTypes.number,
    /**
     * 类名样式前缀
     * @property classPrefix
     * @type sting
     * @default crumb
     * */
    classPrefix: _react.PropTypes.string,
    /**
     * 标签tagName
     * @property componentTag
     * @type String
     * @default div
     * */
    componentTag: _react.PropTypes.string

}, _class.defaultProps = {
    type: 'success',
    message: '保存成功',
    seconds: 2,
    classPrefix: 'dialog',
    componentTag: 'div'
}, _temp);
exports.default = Toast;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Toast, 'Toast', '/Users/panqianjin/work/eagle-ui/src/Toast.js');
}();

;