'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./../utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDialog = function (d) {
    var _class;

    var stack = {},
        options = {
        successCallback: function successCallback() {},
        cancelCallback: function cancelCallback() {},
        //是否显示头部背景
        isHeaderBackground: true,
        //footer按钮对齐方式
        buttonAlign: 'center',
        //mask类型的是否显示头部，头部颜色是否需要显示
        isHeader: true,
        //内容对其方式
        contentAlign: 'center',
        //是否显示蒙版层
        isMask: true,
        //内容不在content之内 mask属性
        outside: false,
        //是否点击mask蒙版也能关闭弹窗
        isMaskClose: true

    };

    var BaseDialog = (0, _ClassNameMixin2.default)(_class = function () {
        function BaseDialog() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, BaseDialog);

            this.wrapName = 'dialog-' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
            this.container = d.getElementById(this.wrapName);

            this.dialogClass = 'dialog-mask';
            this.props = {};
            this.isShow = false;

            if (!this.container) {
                this.createWrap();
            }

            options = (0, _extend2.default)(options, opts);
            this.isMaskClose = options.isMaskClose;
        }

        _createClass(BaseDialog, [{
            key: 'close',
            value: function close() {
                //this.isShow = false;
                this.removeClass(this.container, this.setPrefix('dialog-show'));
            }
        }, {
            key: 'open',
            value: function open() {
                /*this.isShow = true;*/
                this.addClass(this.container, this.setPrefix('dialog-show'));
            }
        }, {
            key: 'pushStack',
            value: function pushStack(key, dialog, props) {
                //stack
                stack[key] = props ? [dialog, props] : dialog;
            }
        }, {
            key: 'removeStack',
            value: function removeStack(key) {
                stack[key] = null;
                delete stack[key];
            }

            //获取dialog

        }, {
            key: 'get',
            value: function get(key) {
                var modal = stack[key];

                return modal instanceof Array ? modal : modal ? [modal] : [];
            }
        }, {
            key: 'setOptions',
            value: function setOptions(opts) {
                options = (0, _extend2.default)({}, options, opts || {});
            }
        }, {
            key: 'maskClickFn',
            value: function maskClickFn(event) {

                if (this.isMaskClose) {
                    // 点击Icon button 时, 返回的className 是 SVGAnimatedString 对象
                    if (event.target.className.match && event.target.className.match('dialog-mask') != null) {
                        this.close();
                    }
                }
            }

            //创建放置弹窗的容器

        }, {
            key: 'createWrap',
            value: function createWrap() {
                this.props = {};
                var dom = d.createElement('div'),
                    _this = this;
                dom.id = this.wrapName;
                dom.className = this.setPrefix(this.dialogClass, false) + ' ' + this.setPrefix('dialog-hide');

                d.body.appendChild(dom);
                this.container = dom;

                this.container['addEventListener']('click', this.maskClickFn.bind(this), false);
            }
        }, {
            key: 'renderDialog',
            value: function renderDialog(Modal, props) {
                var params = (0, _extend2.default)(true, {}, options, props || {});

                this.isMaskClose = params.isMaskClose;

                this[!params.isMask ? 'removeClass' : 'addClass'](this.container, this.setPrefix(this.dialogClass, false));

                _reactDom2.default.render(_react2.default.createElement(Modal, params), this.container);
            }
        }]);

        return BaseDialog;
    }()) || _class;

    return BaseDialog;
}(document);

var dialog = null;

var _default = {
    getInstance: function getInstance(opts) {
        return dialog ? dialog : dialog = new BaseDialog(opts);
    },
    ALERT: 'alert',
    CONFRIM: 'confirm',
    MASK: 'mask'
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BaseDialog, 'BaseDialog', '/Users/panqianjin/work/eagle-ui/src/dialog/BaseDialog.js');

    __REACT_HOT_LOADER__.register(dialog, 'dialog', '/Users/panqianjin/work/eagle-ui/src/dialog/BaseDialog.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/panqianjin/work/eagle-ui/src/dialog/BaseDialog.js');
}();

;