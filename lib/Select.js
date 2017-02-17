'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var _sugSearch = require('./sug/Search');

var _sugSearch2 = _interopRequireDefault(_sugSearch);

/**
 * 下拉选择框组件<br>
 *     支持在input框中输入文字或者点击下拉菜单中的选项进行查询,同时支持上下方向键进行选择。
 * 主要属性接口：
 * <ul>
 *     <li>defaultChecked:默认显示的选项即选中的选项<br>
 *         如：<code>
 *             defaultChecked="上海"
 *         </code>
 *     </li>
 *     <li>getValueCallback:获取元素之后的回调方法，主要将选中值传递给父级元素<br>
 *         如：<code>getValueCallback={::this.getValue}</code>
 *     </li>
 *     <li>placeholder:提示框的内容<br>
 *         如：<code>placeholder="请选择"</code>
 *     </li>
 *
 * </ul>
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/select">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Select.js">查看源码</a></div>
 * @class Select
 * @module form(表单)
 * @constructor
 * @extends Component
 * @example
 *      import {Select} from 'eagle-ui';
 *      ...
 *      function getValue(value,key,type){
 *          let stype = {
 *              'enter':'回车时调用',
 *              'click':'点击每一项元素时调用'
 *          };
 *          console.log(value,key,stype[type]);
 *      }
 *      ...
 *      <Select defaultChecked={"上海"} getValueCallback={getValue} placeholder="请选择" >
 *          <option value='bei' key="bei">北京</option>
 *          <option value='shang' key="上海">上海</option>
 *          <option value='nan' key="南京">南京</option>
 *          <option value='3' key="杭州">杭州</option>
 *      </Select>
 * */

var Select = (function (_Search) {
    _inherits(Select, _Search);

    _createClass(Select, null, [{
        key: 'defaultProps',
        value: {
            /**
             * 回调方法，主要作用将value传给父级元素。默认为null
             * @event  getValueCallback
             * @param {primitive/pointer} value 值
             * @param {string} key 键
             * @param {string} type 类型
             * @default null
             * */
            getValueCallback: null,
            /**
             * 没有选中任何item时的占位文案
             * @property placeholder
             * @type string
             * */
            classPrefix: 'select',
            componentTag: 'div',
            defaultValue: '',
            /**
             * 默认选中值，即初始显示内容
             * @property defaultChecked
             * @type String
             * @default ''
             * */
            defaultChecked: '',
            icon: 'arrow_drop_down',
            /**
             * 报svg的warning竟然在这里。。 真尴尬
             * */
            iconStyle: {
                width: '30px',
                height: '30px',
                top: '15px',
                right: 0
            }
        },
        enumerable: true
    }]);

    function Select(props, context) {
        var defaultState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        _classCallCheck(this, Select);

        _Search.call(this, props, context);
        this.inputId = this.uniqueId();
        _Search.prototype.setDefaultState.call(this, defaultState);
    }

    Select.prototype.entryCallback = function entryCallback() {
        if (this.state._activeValue == '' && this.state.value == '') {
            this.setDefaultData();
            this.show();
        }
    };

    return Select;
})(_sugSearch2['default']);

exports['default'] = Select;
module.exports = exports['default'];