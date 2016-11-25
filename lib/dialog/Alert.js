'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Component2 = require('../utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = (_temp = _class = function (_Component) {
    _inherits(Alert, _Component);

    function Alert(props, context) {
        _classCallCheck(this, Alert);

        return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props, context));
    }

    _createClass(Alert, [{
        key: 'renderDialog',
        value: function renderDialog(className) {
            var _props = this.props,
                message = _props.message,
                title = _props.title,
                successCallback = _props.successCallback,
                cancelCallback = _props.cancelCallback,
                isHeaderBackground = _props.isHeaderBackground,
                isHeader = _props.isHeader,
                contentAlign = _props.contentAlign,
                buttonAlign = _props.buttonAlign;

            return _react2.default.createElement(
                this.componentTag,
                { className: (0, _classnames2.default)(this.getProperty(), this.getClassName(className)) },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('header', 'h4', {
                            'header-bg': isHeaderBackground,
                            'hide': !isHeader
                        }) },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content', style: {
                            textAlign: contentAlign
                        } },
                    message
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footer', style: {
                            textAlign: buttonAlign
                        } },
                    _react2.default.createElement(
                        _Button2.default,
                        { egSize: 'xs', onClick: successCallback },
                        '\u786E\u5B9A'
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderDialog('alert');
        }
    }]);

    return Alert;
}(_Component3.default), _class.defaultProps = {
    isClose: false, //是否有x图标
    title: '警告框', //标题
    classPrefix: 'dialog',
    componentTag: 'div'
}, _temp);
exports.default = Alert;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Alert, 'Alert', '/Users/panqianjin/work/eagle-ui/src/dialog/Alert.js');
}();

;