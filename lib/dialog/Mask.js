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

var _Icon = require('../utils/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var masks = {};

var Mask = (_temp = _class = function (_Component) {
    _inherits(Mask, _Component);

    function Mask(props, context) {
        _classCallCheck(this, Mask);

        return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this, props, context));
    }

    _createClass(Mask, [{
        key: 'renderFooter',
        value: function renderFooter() {
            var footer = [];

            var _props = this.props,
                buttons = _props.buttons,
                buttonAlign = _props.buttonAlign;


            if (buttons && buttons.length > 0) {
                var btns = [];

                for (var i = 0, item, len = buttons.length; i < len; i++) {
                    item = buttons[i];
                    btns.push(_react2.default.createElement(
                        _Button2.default,
                        { key: item.name, egSize: 'xs',
                            egStyle: item.egStyle ? item.egStyle : 'default',
                            onClick: item.type == 'success' || item.type == 'cancel' ? this.props[item.type + 'Callback'] : item.callback },
                        item.name
                    ));
                }
                footer.push(_react2.default.createElement(
                    'div',
                    { key: 'mask-footer', className: 'footer', style: {
                            textAlign: buttonAlign
                        } },
                    btns
                ));
            }

            return footer;
        }
    }, {
        key: 'renderClose',
        value: function renderClose() {
            var _props2 = this.props,
                cancelCallback = _props2.cancelCallback,
                isClose = _props2.isClose;

            if (isClose) {
                return _react2.default.createElement(_Icon2.default, { onClick: cancelCallback.bind(cancelCallback, 'close'), name: 'close', style: {
                        fill: '#999',
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                        cursor: 'pointer'
                    } });
            }
            return null;
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(className) {
            var _props3 = this.props,
                message = _props3.message,
                title = _props3.title,
                successCallback = _props3.successCallback,
                cancelCallback = _props3.cancelCallback,
                isHeaderBackground = _props3.isHeaderBackground,
                isHeader = _props3.isHeader,
                contentAlign = _props3.contentAlign,
                buttonAlign = _props3.buttonAlign,
                id = _props3.id,
                outside = _props3.outside;


            this.setProperty('outside', outside);
            return _react2.default.createElement(
                this.componentTag,
                { className: (0, _classnames2.default)(this.getProperty(), this.getClassName(className), this.props.className), style: this.props.style },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('header', 'h4', {
                            'header-bg': isHeaderBackground,
                            'hide': !isHeader || title == ''
                        }), style: {
                            textAlign: 'left'
                        } },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content', style: {
                            textAlign: contentAlign
                        } },
                    masks[id]
                ),
                this.renderFooter(),
                this.renderClose()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderDialog('masks');
        }
    }], [{
        key: 'push',
        value: function push(key, modal) {
            masks[key] = modal;
        }
    }]);

    return Mask;
}(_Component3.default), _class.defaultProps = {
    isClose: true, //是否有x图标
    title: '', //标题
    classPrefix: 'dialog',
    componentTag: 'div',
    contentAlign: 'left',
    outside: false,
    buttons: [
        /*{
            type: 'success',
            name: '确认',
            callback:()=>{}
        },
        {
            type:'cancel',
            name:'取消',
            callback:()=>{}
        }*/
    ]
}, _temp);
exports.default = Mask;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(masks, 'masks', '/Users/panqianjin/work/eagle-ui/src/dialog/Mask.js');

    __REACT_HOT_LOADER__.register(Mask, 'Mask', '/Users/panqianjin/work/eagle-ui/src/dialog/Mask.js');
}();

;