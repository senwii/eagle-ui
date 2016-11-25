'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by mac on 15/9/8.
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
 * 按钮组组件配合Button组件,提供了横、竖两种排列方式<br/>
 *  主要属性和接口：
 * <ul>
 *     <li>egType:是否自适应宽度或者垂直排列，可选'justify,tacked'默认''<br>
 *         如：<code>
 *           <ButtonGroup egType="justify">
 *         </code>
 *     </li>
 * </ul>
 * @class ButtonGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo star.js {UI展示}
 * @demo button.js {源码}
 * @show true
 * */
var ButtonGroup = (_temp = _class = function (_Component) {
    _inherits(ButtonGroup, _Component);

    /**
     * tacked: bool 是否垂直排列
     * justify: justify 是否自适应宽度
     * */
    function ButtonGroup(props, context) {
        _classCallCheck(this, ButtonGroup);

        //this.classNameMixin = new ClassNameMixin(this.props);

        var _this = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props, context));

        _this.state = {
            active: _this.props.active
        };
        return _this;
    }

    _createClass(ButtonGroup, [{
        key: 'mouseDownHandler',
        value: function mouseDownHandler(e) {
            var target = e.target;
            this.execMethod('active', target, target.innerHTML);
            this.setState({
                active: target.innerHTML
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Component = this.props.componentTag;


            var options = _react2.default.Children.map(this.props.children, function (option) {

                var opt = _react2.default.cloneElement(option, {
                    onMouseDown: _this2.mouseDownHandler.bind(_this2),
                    active: _this2.state.active == option.props.children
                });
                return opt;
            }, this);

            return _react2.default.createElement(
                Component,
                _extends({}, this.props, { className: (0, _classnames2.default)(this.getProperty(), 'clearfix') }),
                options
            );
        }
    }]);

    return ButtonGroup;
}(_Component3.default), _class.propTypes = {
    /**
     * 是否自适应宽度
     * @property justify
     * @type Boolean
     * @default false
     * */
    justify: _react.PropTypes.bool,
    /**
     * 是否垂直排列
     * @property tacked
     * @type Boolean
     * @default false
     * */
    tacked: _react.PropTypes.bool,
    /**
     * 是否有自适应宽度，垂直排列等属性
     * @property egType
     * @type String
     * @default ''
     * */
    egType: _react.PropTypes.string
}, _class.defaultProps = {
    classPrefix: 'btn-group',
    componentTag: 'div'
}, _temp);
exports.default = ButtonGroup;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', '/Users/panqianjin/work/eagle-ui/src/ButtonGroup.js');
}();

;