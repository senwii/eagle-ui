'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Component2 = require('.././utils/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestion = function (_Component) {
    _inherits(Suggestion, _Component);

    function Suggestion(props, context) {
        _classCallCheck(this, Suggestion);

        //获取初始数据
        var _this2 = _possibleConstructorReturn(this, (Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).call(this, props, context));

        _this2.options = _this2.getOptions();

        //this.setState();
        //缓存
        _this2._cache = {};

        _this2.suggestion = _this2.uniqueId();

        //selectItem 选中项
        _this2.selectItem = null;
        return _this2;
    }

    _createClass(Suggestion, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.options = this.getOptions(nextProps.children);
            this.setState({
                value: nextProps.defaultChecked || nextProps.value || ''
            });
        }
    }, {
        key: 'setDefaultState',
        value: function setDefaultState(obj) {
            _get(Suggestion.prototype.__proto__ || Object.getPrototypeOf(Suggestion.prototype), 'setDefaultState', this).call(this, (0, _extend2.default)({}, {
                _reload: false,
                _data: this.options,
                _selectedIndex: -1,
                _selectedValue: '',
                _key: this.props.defaultChecked || this.props.value || '',
                value: this.props.defaultChecked || this.props.value || '',
                _activeValue: '',
                delay: 400
            }, obj));
        }
    }, {
        key: 'setCache',
        value: function setCache(key, value) {
            this._cache[key] = value;
        }
    }, {
        key: 'getCache',
        value: function getCache(key) {
            return this._cache[key];
        }
    }, {
        key: 'setDefaultData',
        value: function setDefaultData() {
            this.setState({
                _selectedIndex: -1,
                _data: this.options
            });
        }

        //搜索 数据查询方式 ajax或者直接查询或者缓存中获取

    }, {
        key: 'search',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(key) {
                var data, _this, str, reg, newData;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = this.getCache(key), _this = this;
                                //缓存中没有数据

                                _context.prev = 1;

                                if (!((!data || data.length <= 0) && key != '')) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 5;
                                return _this.execMethod('query', key);

                            case 5:
                                data = _context.sent;

                                //没拿到数据则从原始数据中查询
                                if (!data) {
                                    //options
                                    str = JSON.stringify(this.options);
                                    ///([^}]+"key":"[^"]*北京[^"]*".+?\})/gi
                                    //let reg = new RegExp('(\{[^}]+"key":"[^"]*'+key+'[^"]*".+?\})','gi');

                                    reg = new RegExp('([^[},]*\{+"key":"[^"]*' + key + '[^"]*".+?\})', 'gi');


                                    str = str.match(reg);

                                    data = str ? str : []; //this._cache[key];
                                }
                                this.setCache(key, data);

                            case 8:

                                //重新绑定data渲染数据
                                newData = [];

                                this.setState({
                                    _data: newData = data && data.length > 0 ? data : this.props.noResultTips ? [{
                                        key: this.props.noResultTips,
                                        value: 'noResult'
                                    }] : [],
                                    _selectedIndex: -1
                                });
                                if (newData.length > 0) {
                                    this.show();
                                }

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](1);
                                throw new Error(_context.t0);

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 13]]);
            }));

            function search(_x) {
                return _ref.apply(this, arguments);
            }

            return search;
        }()
    }, {
        key: 'getOptions',
        value: function getOptions() {
            var chElem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.children;

            var optionsList = [];
            _react2.default.Children.map(chElem, function (item, i) {
                var _item$props = item.props,
                    value = _item$props.value,
                    children = _item$props.children,
                    subKey = _item$props.subKey,
                    other = _objectWithoutProperties(_item$props, ['value', 'children', 'subKey']);

                optionsList.push({
                    key: children,
                    value: value,
                    subKey: subKey || '',
                    index: i
                });
            }, this);

            return optionsList;
        }
    }, {
        key: 'moveActive',
        value: function moveActive(type) {
            var _data = this.state._data;

            var _selectedIndex = this.state._selectedIndex;
            _selectedIndex = type == 'up' ? _selectedIndex - 1 : _selectedIndex + 1;

            if (_selectedIndex >= _data.length) {
                _selectedIndex = 0;
            }

            if (_selectedIndex < 0) {
                _selectedIndex = _data.length - 1;
            }
            var data = this.getData(_selectedIndex);
            this.setState({
                _selectedIndex: _selectedIndex,
                _activeValue: data ? data.key : ''
            });
            //checkedCallback
            this.execMethod('checked', this.refs[this.suggestion], _selectedIndex);
            /*clearTimeout(this.__clearTimeoutForValue);
            this.__clearTimeoutForValue = setTimeout(,this.props.delay*3);*/
        }

        //监听用户输入

    }, {
        key: 'keyHandler',
        value: function keyHandler(event) {
            var _this = this;
            if (event.type != 'keydown') {
                var val = this.trim(event.target.value);
                if (val === '') {
                    this.hide();
                    clearTimeout(this.timeOutId);
                    this.entryCallback();
                    return;
                } else {
                    clearTimeout(this.__entryTimeout);
                    this.__entryTimeout = setTimeout(function () {
                        _this.entryCallback(val);
                    }, this.state.delay);
                }
                switch (event.keyCode) {
                    case 27:
                        this.hide();
                        return;
                    case 38:
                        //up键
                        this.show();
                        this.moveActive('up');
                        return;
                    case 40:
                        //down键
                        this.show();
                        this.moveActive('down');
                        return;
                    case 13:
                        //回车
                        event.preventDefault();
                        event.stopPropagation();
                        if (this.state._selectedIndex <= -1) {
                            //当用户没有选择任何sug项而直接按回车时
                            this.execMethod('success', val);
                        } else {
                            //当用户通过上下键选择了某一项sug项后按回车时
                            this._clickHandler(this.getData(this.state._selectedIndex), 'enter');
                        }
                        return;
                    default:
                        this.setState({
                            _activeValue: ''
                        });
                        this.valChange(val);
                }
            }
        }
    }, {
        key: 'entryCallback',
        value: function entryCallback() {
            //可重写
            //this.hide();
        }
    }, {
        key: 'valChange',
        value: function valChange(key) {
            clearTimeout(this.timeOutId);
            this.timeOutId = setTimeout(function () {
                this.search(key);
            }.bind(this), this.state.delay);
        }
    }, {
        key: '_mouseEnterHandler',
        value: function _mouseEnterHandler(i, item) {

            if (this.isEmptyItems(item.key)) {
                return this;
            }
            this.setState({
                _selectedIndex: i
            });
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.setState({
                value: value
            });
        }
    }, {
        key: 'getData',
        value: function getData(index) {
            var data = this.state._data[index];
            return data ? typeof data == 'string' ? JSON.parse(data) : data : null;
        }
    }, {
        key: 'isEmptyItems',
        value: function isEmptyItems(key) {

            return key != '' && key == this.props.noResultTips;
        }
    }, {
        key: '_clickHandler',
        value: function _clickHandler(item) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "click";


            if (this.isEmptyItems(item.key)) {
                return this;
            }

            this.selectItem = item;

            this.setValue(item.key);
            this.setState({
                _activeValue: '',
                _selectedIndex: -1
            });

            this.execMethod('getValue', item.value, item.key, type);

            this.hide();
        }
    }, {
        key: 'renderSubKey',
        value: function renderSubKey(subKey) {

            var html = [];

            if (subKey) {
                html.push(_react2.default.createElement(
                    'div',
                    { className: 'subkey', key: subKey },
                    subKey
                ));
            }
            return html;
        }
    }, {
        key: 'renderList',
        value: function renderList() {
            var data = this.state._data,
                value = this.state.value,
                selectedValue = this.state._selectedValue,
                list = [];

            for (var i = 0, len = data.length, item; i < len; i++) {
                item = this.getData(i);
                if (value == item.key) {
                    this.selectItem = item;
                }

                list.push(_react2.default.createElement(
                    'li',
                    {
                        key: item.value,
                        'data-value': item.value,
                        className: (0, _classnames2.default)({
                            'active': i == this.state._selectedIndex,
                            'noresult': this.isEmptyItems(item.key)
                        }),
                        onMouseEnter: this._mouseEnterHandler.bind(this, i, item),
                        onMouseLeave: this._mouseEnterHandler.bind(this, -1, item),
                        onMouseDown: this._clickHandler.bind(this, item, 'click')
                    },
                    item.key,
                    this.renderSubKey(item.subKey)
                ));
            }
            return list;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.selectItem;
        }
    }, {
        key: 'getTextValue',
        value: function getTextValue() {
            var _state = this.state,
                value = _state.value,
                _activeValue = _state._activeValue;

            return _activeValue ? _activeValue : value;
        }
    }, {
        key: 'removeActiveValue',
        value: function removeActiveValue() {
            this.setState({
                _activeValue: ''
            });
        }

        //渲染列表

    }, {
        key: 'renderSuggestion',
        value: function renderSuggestion() {
            return _react2.default.createElement(
                'ul',
                { ref: this.suggestion, className: (0, _classnames2.default)(this.getClassNamespace() + '-suggestion', {}, this.state._isShow ? '' : 'hide'), style: { zIndex: this.props.zIndex || 1 } },
                this.renderList()
            );
        }
    }]);

    return Suggestion;
}(_Component3.default);

exports.default = Suggestion;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Suggestion, 'Suggestion', '/Users/panqianjin/work/eagle-ui/src/sug/Suggestion.js');
}();

;