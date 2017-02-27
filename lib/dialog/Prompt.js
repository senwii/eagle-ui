'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var Prompt = (function (_Component) {
    _inherits(Prompt, _Component);

    _createClass(Prompt, null, [{
        key: 'defaultProps',
        value: {
            isClose: false, //是否有x图标
            title: '对话框', //标题
            classPrefix: 'dialog',
            cancelTxt: '取消',
            submitTxt: '确定',
            inputWidth: '100%',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Prompt(props, context) {
        _classCallCheck(this, Prompt);

        _Component.call(this, props, context);
        this.value = '';
    }

    Prompt.prototype.changHandler = function changHandler(e) {
        /* clearTimeout(this.timer);
         this.timer = setTimeout(function(input){
             this.value = input.value;
         }.bind(this,e.target),300);*/
    };

    Prompt.prototype.submitHandler = function submitHandler() {
        //let val = this.value || ReactDom.findDOMNode(this.input).children[1].value;
        var val = _reactLibReactDOM2['default'].findDOMNode(this.input).children[1].value;
        this.props.submitCallback(val);
    };

    Prompt.prototype.cancelHandler = function cancelHandler() {
        _reactLibReactDOM2['default'].findDOMNode(this.input).children[1].value = '';
        this.props.cancelCallback();
    };

    Prompt.prototype.renderDialog = function renderDialog(className) {
        var _this = this;

        var _props = this.props;
        var title = _props.title;
        var isHeaderBackground = _props.isHeaderBackground;
        var isHeader = _props.isHeader;
        var contentAlign = _props.contentAlign;
        var buttonAlign = _props.buttonAlign;
        var submitTxt = _props.submitTxt;
        var cancelTxt = _props.cancelTxt;
        var inputWidth = _props.inputWidth;

        return _react2['default'].createElement(
            this.componentTag,
            { className: _classnames2['default'](this.getProperty(), this.getClassName(className)) },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('header', 'h4', {
                        'header-bg': isHeaderBackground,
                        'hide': !isHeader
                    }) },
                title
            ),
            _react2['default'].createElement(
                'div',
                { className: 'content', style: {
                        textAlign: contentAlign
                    } },
                _react2['default'].createElement(_Input2['default'], { ref: function (ref) {
                        _this.input = ref;
                    }, type: 'text', style: { width: inputWidth }, onChange: this.changHandler.bind(this) })
            ),
            _react2['default'].createElement(
                'div',
                { className: 'footer', style: {
                        textAlign: buttonAlign
                    } },
                _react2['default'].createElement(
                    _Button2['default'],
                    { egSize: 'xs', onClick: this.submitHandler.bind(this) },
                    submitTxt
                ),
                _react2['default'].createElement(
                    _Button2['default'],
                    { egSize: 'xs', egStyle: 'white', onClick: this.cancelHandler.bind(this) },
                    cancelTxt
                )
            )
        );
    };

    Prompt.prototype.render = function render() {
        return this.renderDialog('prompt');
    };

    return Prompt;
})(_utilsComponent2['default']);

exports['default'] = Prompt;
module.exports = exports['default'];