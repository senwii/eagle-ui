/**
 * Created by mac on 15/9/7.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 *  - 按钮组件提供内置样式<br/>
 *  - 也可以自定义行内样式和className<br/>
 *  - 支持disabled, active等属性定义<br/>
 *  - 可以通过egSize 设置大小，可选xs、sm、lg。<br/>
 *  - 通过egStyle选择按钮颜色，可选'success','error','warning','danger','default','link','white'
 * @class Button
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo #/button|button.js
 * */

var Button = (function (_Component) {
  _inherits(Button, _Component);

  _createClass(Button, null, [{
    key: 'propTypes',
    value: {
      /**
       * 按钮尺寸,分别为xs、sm、lg
       * @property egSize
       * @type String
       * @default sm
       * */
      egSize: _react.PropTypes.string,
      /**
       * 是否禁用按钮
       * @property disabled
       * @type Boolean
       * @default false
       * */
      disabled: _react.PropTypes.bool,
      //success:PropTypes.bool,
      /**
       * 按钮是否处于选中状态
       * @property active
       * @type Boolean
       * @default false
       * */
      active: _react.PropTypes.bool,
      /**
       * 按钮颜色样式，可以为['success','error','warning','danger','default','link','white']中任何一个
       * @property egStyle
       * @type Boolean
       * @default ''
       * */
      egStyle: _react.PropTypes.string,
      classPrefix: _react.PropTypes.string,
      /**
       * 标签tagName
       * @property componentTag
       * @type String
       * @default 'button'
       * */
      componentTag: _react.PropTypes.string,
      /**
       * 是否为块级显示
       * @property block
       * @type Boolean
       * @default false
       * */
      block: _react.PropTypes.bool,
      egHref: _react.PropTypes.string
      /**
       * 是否只将主题颜色应用于边框，而不是应用于背景色
       * @property hollow
       * @type Boolean
       * @default false
       * */
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      egSize: 'default',
      classPrefix: 'btn',
      egStyle: 'default',
      componentTag: 'button'
    },

    //lg
    //sm
    //xs this.getClassName('demo'); eg-demo
    enumerable: true
  }]);

  function Button(props, context) {
    _classCallCheck(this, Button);

    _Component.call(this, props, context);
    this.setProperty('hollow', 'hollow');
  }

  Button.prototype.render = function render() {
    //const {} = this.props;
    //什么颜色，大小  类型
    var Component = this.props.componentTag;

    return _react2['default'].createElement(
      Component,
      _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(), this.props.className) }),
      this.props.children
    );
  };

  return Button;
})(_utilsComponent2['default']);

exports['default'] = Button;
module.exports = exports['default'];