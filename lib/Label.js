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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

/**
 * 标签组件<br />
 * 提供基本的标签样式，通常结合LabelGroup组件一起使用
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/label">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Label.js">查看源码</a></div>
 * @class Label
 * @module ui
 * @constructor
 * @demo #/label|label.js
 * @show true
 * */

var Label = (function (_Component) {
    _inherits(Label, _Component);

    _createClass(Label, null, [{
        key: 'propTypes',
        value: {
            /**
             * label的链接地址（不设置的话默认不进行跳转）
             * @property url
             * @type String
             * @default 'javascript:void(0);'
             * */
            url: _react.PropTypes.string,
            activeCallback: _react.PropTypes.func,
            /**
             * 标签尺寸,分别为xs、sm、lg
             * @property egSize
             * @type String
             * @default sm
             * */
            egSize: _react.PropTypes.string,
            /**
             * 是否禁用Label
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: _react.PropTypes.bool,
            /**
             * 标签是否处于选中状态
             * @property active
             * @type Boolean
             * @default false
             * */
            active: _react.PropTypes.bool,
            /**
             * 标签颜色样式，可以为['success','error','warning','danger','']中任何一个
             * @property egStyle
             * @type Boolean
             * @default ''
             * */
            egStyle: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'label',
            url: 'javascript:void(0);',
            componentTag: 'a'
        },
        enumerable: true
    }]);

    function Label(props, context) {
        _classCallCheck(this, Label);

        _Component.call(this, props, context);
    }

    /**
     * 点击回调函数
     * */

    Label.prototype.mouseDownHandler = function mouseDownHandler(e) {
        var target = e.target;

        this.execMethod('active', target.getAttribute('value'), target.innerHTML, target, !this.props.active);
    };

    Label.prototype.render = function render() {
        var url = this.props.url;

        return _react2['default'].createElement(
            this.componentTag,
            _extends({ href: url }, this.props, { className: _classnames2['default'](this.getProperty(), this.props.className),
                onMouseDown: this.mouseDownHandler.bind(this)
            }),
            this.props.children
        );
    };

    return Label;
})(_utilsComponent2['default']);

exports['default'] = Label;
module.exports = exports['default'];