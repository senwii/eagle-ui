'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DialogFactory = require('./DialogFactory');

var _DialogFactory2 = _interopRequireDefault(_DialogFactory);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Component2 = require('./../utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _BaseDialog = require('./BaseDialog');

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog(props, context) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props, context));

        _this.state = {
            update: _this.uniqueId()
        };
        _this.update(props);
        return _this;
    }

    _createClass(Dialog, [{
        key: 'loadedCallback',
        value: function loadedCallback() {}
        /**
         * key 报warning，暂时改为keys
         * */

    }, {
        key: 'update',
        value: function update() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            new _DialogFactory2.default(props.keys || props.id || props.name, props.type || 'mask', props.children, props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.update(props);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(props, state) {
            this.update(props);
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { display: 'none' } },
                this.state.update
            );
        }
    }], [{
        key: 'alert',
        value: function alert(message) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                new _DialogFactory2.default().show(_BaseDialog2.default.ALERT, (0, _extend2.default)({}, {
                    successCallback: function successCallback() {
                        resolve();
                        new _DialogFactory2.default().hide();
                    },
                    message: message
                }, opts));
            }).catch(function (ex) {
                console.dir(ex);
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(message) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            try {
                return new Promise(function (resolve, reject) {
                    new _DialogFactory2.default().show(_BaseDialog2.default.CONFRIM, (0, _extend2.default)({}, {
                        successCallback: function successCallback() {
                            resolve();
                            new _DialogFactory2.default().hide();
                        },
                        cancelCallback: function cancelCallback() {
                            reject();
                            new _DialogFactory2.default().hide();
                        },
                        message: message
                    }, opts));
                });
            } catch (ex) {
                console.dir(ex);
            }
        }
    }, {
        key: 'mask',
        value: function mask(dialogId) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                new _DialogFactory2.default().show(dialogId, (0, _extend2.default)({}, {
                    successCallback: resolve,
                    id: dialogId,
                    contentAlign: 'left',
                    cancelCallback: function cancelCallback(type) {
                        reject(type);
                        new _DialogFactory2.default().hide();
                    },
                    closeCallback: function closeCallback(type) {
                        reject(type);
                        new _DialogFactory2.default().hide();
                    }
                }, opts));
            }).catch(function (ex) {
                console.dir(ex);
            });
        }
    }, {
        key: 'close',
        value: function close() {
            new _DialogFactory2.default().hide();
        }
    }]);

    return Dialog;
}(_Component3.default);

exports.default = Dialog;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Dialog, 'Dialog', '/Users/panqianjin/work/eagle-ui/src/dialog/Dialog.js');
}();

;