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

var _Component2 = require('./utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 标签
 * @class Label
 * @module ui
 * @constructor
 * @demo star.js {UI展示}
 * @demo label.js {源码}
 * @show true
 * */
var Label = (_temp = _class = function (_Component) {
    _inherits(Label, _Component);

    function Label(props, context) {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, props, context));
    }

    /**
     * 点击回调函数
     * */


    _createClass(Label, [{
        key: 'mouseDownHandler',
        value: function mouseDownHandler(e) {
            var target = e.target;

            this.execMethod('active', target.getAttribute('value'), target.innerHTML, target, !this.props.active);
        }
    }, {
        key: 'render',
        value: function render() {
            var url = this.props.url;

            return _react2.default.createElement(
                this.componentTag,
                _extends({ href: url }, this.props, { className: (0, _classnames2.default)(this.getProperty(), this.props.className),
                    onMouseDown: this.mouseDownHandler.bind(this)
                }),
                this.props.children
            );
        }
    }]);

    return Label;
}(_Component3.default), _class.propTypes = {
    url: _react.PropTypes.string,
    activeCallback: _react.PropTypes.func
}, _class.defaultProps = {
    classPrefix: 'label',
    url: 'javascript:void(0);',
    componentTag: 'a'
}, _temp);
exports.default = Label;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Label, 'Label', '/Users/panqianjin/work/eagle-ui/src/Label.js');
}();

;