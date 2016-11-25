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

var _Component2 = require('./utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择<br/>
 *  - 也可以自定义行内样式和className名字定义UI展示<br/>
 *  - 支持disabled, active, enable等属性定义<br/>
 *  - 可以通过egSize 设置大小，可选xs、sm、lg。<br/>
 *  - 通过egStyle选择按钮颜色，可选error、warning、danger、link、gray、white、success
 *  主要属性和接口：
 * <ul>
 *     <li>egSize:按钮颜色<br>
 *         如：<code>
 *            Button radius egSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>egStyle:按钮的大小。分别为xs、sm、lg，默认sm<br>
 *         如：<code>
 *            Button radius egSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>disabled:按钮禁用状态，默认false<br>
 *         如：<code>
 *            Button radius disabled
 *         </code>
 *     </li>
 *     <li>enable:按钮的可用状态，默认true<br>
 *         如：<code>
 *            Button radius enable
 *         </code>
 *     </li>
 *     <li>active:按钮选中状态，默认false<br>
 *         如：<code>
 *            Button radius active
 *         </code>
 *     </li>
 *      <li>radius:按钮圆角状态<br>
 *         如：<code>
 *            Button radius
 *         </code>
 *     </li>
 *     <li>round:按钮椭圆角<br>
 *         如：<code>
 *            Button round
 *         </code>
 *     </li>
 *     <li>block:是否块级显示，默认false<br>
 *         如：<code>
 *            Button block
 *         </code>
 *     </li>
 * </ul>
 * @class Button
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo button.js {源码}
 * @show true
 * */
var Button = (_temp = _class = function (_Component) {
  _inherits(Button, _Component);

  //lg
  //sm
  //xs this.getClassName('demo'); eg-demo

  //static mixins = [ClassNameMixin];
  function Button(props, context) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props, context));

    _this.setProperty('hollow', 'hollow');
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      //const {} = this.props;
      //什么颜色，大小  类型
      var Component = this.props.componentTag;


      return _react2.default.createElement(
        Component,
        _extends({}, this.otherProps, { className: (0, _classnames2.default)(this.getProperty(), this.props.className) }),
        this.props.children
      );
    }
  }]);

  return Button;
}(_Component3.default), _class.propTypes = {
  /**
   * 按钮尺寸,分别为xs、sm、lg
   * @property egSize
   * @type String
   * @default sm
   * */
  egSize: _react.PropTypes.string,
  /**
   * 禁用
   * @property disabled
   * @type Boolean
   * @default false
   * */
  disabled: _react.PropTypes.bool,
  /**
   * 启用
   * @property enable
   * @type Boolean
   * @default true
   * */
  enable: _react.PropTypes.bool,
  //success:PropTypes.bool,
  /**
   * 选中
   * @property active
   * @type Boolean
   * @default false
   * */
  active: _react.PropTypes.bool,
  /**
   * 圆角
   * @property radius
   * @type Boolean
   * @default false
   * */
  radius: _react.PropTypes.bool,
  /**
   * 椭圆角
   * @property round
   * @type Boolean
   * @default false
   * */
  round: _react.PropTypes.bool,
  //error:PropTypes.bool,
  //warning:PropTypes.bool,
  //danger:PropTypes.bool,
  /**
   * 颜色[error、warning、danger、link、gray、white、success、'']
   * @property egStyle
   * @type Boolean
   * @default ''
   * */
  egStyle: _react.PropTypes.string,
  /**
   * 样式前缀
   * @property classPrefix
   * @type String
   * @default btn
   * */
  classPrefix: _react.PropTypes.string,
  /**
   * 标签tagName
   * @property componentTag
   * @type String
   * @default a
   * */
  componentTag: _react.PropTypes.string,
  /**
   * 块级显示
   * @property block
   * @type Boolean
   * @default false
   * */
  block: _react.PropTypes.bool,
  egHref: _react.PropTypes.string
}, _class.defaultProps = {
  egSize: 'default',
  classPrefix: 'btn',
  componentTag: 'button'
}, _temp);
exports.default = Button;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Button, 'Button', '/Users/panqianjin/work/eagle-ui/src/Button.js');
}();

;