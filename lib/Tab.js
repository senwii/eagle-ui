'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * Created by mac on 15/9/7.
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 导航标签组件，用户可以在不同的tab之间进行切换<br/>
 * 需要和Tabset组件配合使用,Tabset相当于是Tab的容器
 * @class Tab
 * @module ui
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo tab.js {源码}
 * @show true
 * */
var Tab = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Tab, _Component);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'handlerClick',
        value: function handlerClick(e) {
            if (this.props.disableHoverAnimation) {
                this.props.mouseEnterCallback(e.target.offsetLeft, e.target.offsetWidth);
            }
            this.props.clickCallback(this.props.index);
        }
    }, {
        key: 'handleMouseEnter',
        value: function handleMouseEnter(e) {
            if (!this.props.disableHoverAnimation) {
                this.props.mouseEnterCallback(e.target.offsetLeft, e.target.offsetWidth);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'a',
                _extends({ className: (0, _classnames2.default)(this.getClassName('item'), this.getClassNames(this.props))
                }, this.props, {
                    onClick: this.handlerClick.bind(this),
                    onMouseEnter: this.handleMouseEnter.bind(this) }),
                this.props.heading
            );
        }
    }]);

    return Tab;
}(_react.Component), _class2.propTypes = {
    /**
     * tab导航标签的title
     * @property heading
     * @type String
     * @default 'tab'
     * */
    heading: _react.PropTypes.string
}, _class2.defaultProps = {
    classPrefix: 'tab',
    heading: 'tab'
}, _temp)) || _class;

exports.default = Tab;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tab, 'Tab', '/Users/panqianjin/work/eagle-ui/src/Tab.js');
}();

;