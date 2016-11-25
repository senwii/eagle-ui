'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Search2 = require('./sug/Search');

var _Search3 = _interopRequireDefault(_Search2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 搜索联想组件。
 * @Class Suggestion
 * @Module ui
 * @constructor
 * @extends Component
 * @demo star.js {UI展示}
 * @demo suggestion.js {源码}
 * @show true
 * */
var Suggestion = (_temp = _class = function (_Search) {
    _inherits(Suggestion, _Search);

    function Suggestion(props, context) {
        _classCallCheck(this, Suggestion);

        return _possibleConstructorReturn(this, (Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).call(this, props, context, {}));
    }

    _createClass(Suggestion, [{
        key: 'loadedCallback',
        value: function loadedCallback() {}
    }, {
        key: 'focusHandler',
        value: function focusHandler(e) {
            _get(Suggestion.prototype.__proto__ || Object.getPrototypeOf(Suggestion.prototype), 'focusHandler', this).call(this, e);
            var value = this.state.value;

            if (value != '') {
                this.show();
                this.search(value);
            } else if (this.state._activeValue == '') {
                this.hide();
            }
        }
    }, {
        key: 'entryCallback',
        value: function entryCallback() {
            if (this.state._activeValue == '') {
                this.setDefaultData();
                this.hide();
            }
        }
    }]);

    return Suggestion;
}(_Search3.default), _class.defaultProps = {
    /**
     * 回调方法，主要作用将value传给父级元素。默认为null
     * @property callback
     * @type func
     * @default null
     * */
    getValueCallback: null,
    /**
     * 样式类名前缀
     * @property classPrefix
     * @type string
     *
     * */
    classPrefix: 'suggestion-warp',
    componentTag: 'div',
    defaultValue: '',
    icon: '',
    iconDirection: '',
    iconStyle: {},
    noResultTips: '没有匹配结果'
}, _temp);
exports.default = Suggestion;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Suggestion, 'Suggestion', '/Users/panqianjin/work/eagle-ui/src/Suggestion.js');
}();

;