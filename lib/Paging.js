'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ClassNameMixin = require('./utils/ClassNameMixin.js');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 分页组件
 * @class Paging
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @demo star.js {UI展示}
 * @demo paging.js {源码}
 * @show true
 * @author min.xiao@dianping.com
 * */
var Paging = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Paging, _Component);

    /**
     * @constructor
     * @param props {Object}
     * @param context {Object}
     * */
    function Paging(props, context) {
        _classCallCheck(this, Paging);

        /**
         * @type Integer
         * @default
         * */
        var _this = _possibleConstructorReturn(this, (Paging.__proto__ || Object.getPrototypeOf(Paging)).call(this, props, context));

        _this.pages = _this.getPages();

        _this.index = 0;

        _this.number = 5;

        /**
         * @type Boolean
         * @default false
         * */
        _this.init = false;
        //总数：this.total


        _this.state = {
            /**
             * 当前页
             * @type Integer
             * */
            currentPage: _this.props.currentPage,
            defaultNumber: _this.props.pageSize
        };
        return _this;
    }

    /**
     * 上一页
     * @method prev
     * */


    _createClass(Paging, [{
        key: 'prev',
        value: function prev() {
            this.gotoPage(this.props.currentPage - 1);
        }

        /**
         * 下一页
         * @method prev
         * */

    }, {
        key: 'next',
        value: function next() {
            this.gotoPage(this.props.currentPage + 1);
        }

        /**
         * 获取页大小
         * @method getPages
         * @return {Integer}
         * */

    }, {
        key: 'getPages',
        value: function getPages() {
            return Math.ceil(this.props.total / this.props.pageSize);
        }

        /**
         * 跳转至N页
         * @method goto
         * @param page {Integer} 页码，从1开始
         * @private
         * @return {Array}
         * */

    }, {
        key: 'goto',
        value: function goto() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentPage;


            this.pages = this.getPages();
            if (page <= 1) {
                page = 1;
            }
            if (page >= this.pages) {
                page = this.pages;
            }

            /*if(this.init){
                this.setState({
                    currentPage:page
                });
                this.init = false;
            }*/

            return this.generate();
        }

        /**
         * 跳转至N页
         * @method gotoPage
         * @param index {Integer} 页码，从1开始
         * @return {Array}
         * */

    }, {
        key: 'gotoPage',
        value: function gotoPage(index) {
            this.init = true;
            this.props.pageCallback && this.props.pageCallback(index);
            return this.goto(index);
        }
        /**
         * 生成页码
         * @method generate
         * @return {Array}
         * */

    }, {
        key: 'generate',
        value: function generate() {
            var _props = this.props,
                currentPage = _props.currentPage,
                activeClass = _props.activeClass;

            var i = 1,
                htmlList = [],
                distance = 4,
                len = currentPage + distance;

            i = currentPage <= 6 ? i : currentPage - distance;
            i = i <= 1 ? 1 : i;

            len = len > this.pages ? this.pages : len;

            if (currentPage > 1) {
                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: '\u4E0A\u4E00\u9875', className: '', onClick: this.prev.bind(this) },
                    '\u4E0A\u4E00\u9875'
                ));
            }

            //9     ....4....|.
            if (currentPage >= 7) {
                var _context;

                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: 1, onClick: (_context = this.gotoPage).bind.call(_context, this, 1) },
                    1
                ));
                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: '...\u4E0A\u4E00\u9875' },
                    '...'
                ));
                //i+=1;
            }

            for (; i <= len; i++) {
                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: i, onClick: this.gotoPage.bind(this, i), className: (0, _classnames3.default)(_defineProperty({}, this.getClassName(activeClass), i == currentPage)) },
                    i
                ));
            }
            //pages-currentPage =
            var bt = this.pages - currentPage;
            if (bt >= 7) {
                var _context2;

                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: '...\u4E0B\u4E00\u9875' },
                    '...'
                ));
                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: this.pages, onClick: (_context2 = this.gotoPage).bind.call(_context2, this, this.pages) },
                    this.pages
                ));
            }

            if (this.pages > 1 && currentPage != this.pages) {
                htmlList.push(_react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', key: '\u4E0B\u4E00\u9875', onClick: this.next.bind(this) },
                    '\u4E0B\u4E00\u9875'
                ));
            }

            return htmlList;
        }
    }, {
        key: 'changePageSizeHandler',
        value: function changePageSizeHandler(e) {
            var val = e.target.value;
            //this.setState({
            //    defaultNumber:val*1
            //});
            var loadPageCallback = this.props.loadPageCallback;


            loadPageCallback && loadPageCallback(val);

            this.setState({
                defaultNumber: val
            });
        }
    }, {
        key: 'accordingNumber',
        value: function accordingNumber() {
            var opts = [],
                num = 10,
                choosePageSize = this.props.choosePageSize,
                chooseMaxPageSize = this.props.chooseMaxPageSize || 100;
            /**
             * if 提供自定义数组 且非空。
             * */
            if (choosePageSize instanceof Array && choosePageSize.length > 0) {
                choosePageSize.forEach(function (i) {
                    opts.push(_react2.default.createElement(
                        'option',
                        { value: i, key: i },
                        i
                    ));
                });
            } else {
                for (var i = 1, n; i < 11; i++) {
                    n = num * i;
                    if (n <= chooseMaxPageSize) {

                        opts.push(_react2.default.createElement(
                            'option',
                            { value: n, key: n },
                            n
                        ));
                    } else {
                        break;
                    }
                }
            }

            return _react2.default.createElement(
                'span',
                { style: {
                        marginRight: '20px'
                    } },
                '\u6BCF\u9875\u663E\u793A\xA0\xA0',
                _react2.default.createElement(
                    'select',
                    { defaultValue: this.props.pageSize, onChange: this.changePageSizeHandler.bind(this) },
                    opts
                ),
                '\xA0\xA0\u6761'
            );
        }

        /**
         * @method render
         * @return {ReactElement}
         * */

    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                Component = _props2.componentTag,
                activeClass = _props2.activeClass,
                showItemsNumber = _props2.showItemsNumber;


            return _react2.default.createElement(
                Component,
                { className: (0, _classnames3.default)(this.getClassName('container')) },
                showItemsNumber ? this.accordingNumber() : null,
                this.goto(),
                _react2.default.createElement(
                    'span',
                    { className: 'info' },
                    _react2.default.createElement(
                        'span',
                        { className: (0, _classnames3.default)(this.getClassName(activeClass)) },
                        this.props.currentPage
                    ),
                    '/',
                    this.getPages(),
                    '\uFF0C\u5171',
                    this.props.total,
                    '\u6761'
                )
            );
        }
    }]);

    return Paging;
}(_react.Component), _class2.propTypes = {
    /**
     * 总页数
     * @property currentPage
     * @type Integer
     * @default 1
     * */
    currentPage: _react.PropTypes.number.isRequired,
    /**
     * 每页显示多少条数据
     * @property pageSize
     * @type Integer
     * @default 20
     * */
    pageSize: _react.PropTypes.number.isRequired,
    /**
     * 数据总数
     * @property total
     * @type Integer
     * */
    total: _react.PropTypes.number.isRequired,
    /**
     * 点击分页回调
     * @property pageCallback
     * @type Function
     * */
    pageCallback: _react.PropTypes.func,
    /**
     *
     * @property activeClass
     * @type String
     * @default active
     * */
    activeClass: _react.PropTypes.string,
    classPrefix: _react.PropTypes.string,
    componentTag: _react.PropTypes.string,
    /**
     * 开启选择每页显示数量选项
     * @property showItemsNumber
     * @type Boolean
     * */
    showItemsNumber: _react.PropTypes.bool,
    /**
     * 自定义每页显示数量数组,需为非空数组。默认为[]
     * @property choosePageSize
     * @type array
     * @default []
     * */
    choosePageSize: _react.PropTypes.array
}, _class2.defaultProps = {
    activeClass: 'active',
    currentPage: 1,
    pageSize: 20,
    classPrefix: 'paging',
    componentTag: 'div',
    chooseMaxPageSize: 0,
    /**
     * 默认每页显示数量为［］
     * */
    choosePageSize: [],
    /**
     * 跟showItemsNumber一起使用 arguments{pageSize}
     * @property loadPageCallback
     * */
    loadPageCallback: function loadPageCallback() {
        console.warn('Is not defined loadPageCallback');
    }
}, _temp)) || _class;

exports.default = Paging;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Paging, 'Paging', '/Users/panqianjin/work/eagle-ui/src/Paging.js');
}();

;