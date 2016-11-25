'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

var _BaseDialog = require('./BaseDialog');

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogFactory = function () {
    function DialogFactory(key, type, c) {
        var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, DialogFactory);

        this.params = {
            children: c,
            type: type,
            key: key,
            opts: opts
        };
        //this.type = type;
        this.baseUtils = _BaseDialog2.default.getInstance();
        //添加dialog
        //需要对类型做分析
        this.setFactory();
    }

    _createClass(DialogFactory, [{
        key: 'setProperty',
        value: function setProperty(key, val) {
            this.params[key] = val;
        }
    }, {
        key: 'setFactory',
        value: function setFactory() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.type;
            var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.key;
            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.params.children;


            if (type) {
                switch (type.toLowerCase()) {
                    case _BaseDialog2.default.ALERT:
                        this.add(_BaseDialog2.default.ALERT, _Alert2.default);
                        break;
                    case _BaseDialog2.default.CONFRIM:
                        this.add(_BaseDialog2.default.CONFRIM, _Confirm2.default);
                        break;
                    default:
                        //将自定义dialog添加进主dialog
                        _Mask2.default.push(key, c);
                        key && this.add(key, _Mask2.default, this.params.opts);
                }
            }
        }

        //添加dialog

    }, {
        key: 'add',
        value: function add() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.key;
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            this.baseUtils.pushStack(key, value, props);
        }
        //删除dialog

    }, {
        key: 'del',
        value: function del() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.key;

            this.baseUtils.removeStack(key);
        }
        //获取lialog

    }, {
        key: 'getFactory',
        value: function getFactory() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.key;


            var modal = this.baseUtils.get(key);

            if (!modal || modal.length <= 0) {
                this.setFactory(key, null);
                modal = this.baseUtils.get(key);
            }

            return modal;
        }
        //设置dialog默认属性

    }, {
        key: 'set',
        value: function set() {
            this.baseUtils.setOptions(arguments[0]);
        }
    }, {
        key: 'show',
        value: function show(dialogId) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            //先将dialog放入容器，
            //debugger;
            var _this = this;
            setTimeout(function () {
                var modal = _this.getFactory(dialogId);

                _this.baseUtils.renderDialog(modal[0], (0, _extend2.default)(true, {}, modal[1] || {}, props));
                //打开
                _this.baseUtils.open();
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.baseUtils.close();
        }
    }]);

    return DialogFactory;
}();

exports.default = DialogFactory;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DialogFactory, 'DialogFactory', '/Users/panqianjin/work/eagle-ui/src/dialog/DialogFactory.js');
}();

;