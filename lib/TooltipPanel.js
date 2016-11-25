'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tooltip = require('./Tooltip.js');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Button = require('./Button.js');

var _Button2 = _interopRequireDefault(_Button);

var _Row = require('./Row.js');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col.js');

var _Col2 = _interopRequireDefault(_Col);

var _Grid = require('./Grid.js');

var _Grid2 = _interopRequireDefault(_Grid);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * tipsPanel组件
 * 方向可选：top,down,left,right.默认down
 * 存在边界判断，若指定方向容纳不了提示，会转为默认
 * 可以指定边界，即将边界的id值，赋给wrapper属性。则提示超出该元素范围则取反方向。
 * 主要属性和接口：
 * <ul>
 *     <li>direction:提示的方向，取值范围［top,down,left,right］默认down<br>
 *         如：<code>
 *           TooltipPanel direction='top' wapper='a'
 *         </code>
 *     </li>
 *     <li>msg:提示文字，必须要写，不然默认的没什么用吧<br>
 *         如：<code>
 *           TooltipPanel direction='top' wapper='a' msg='this is msg'
 *         </code>
 *     </li>
 *     <li>wrapper:指定边界元素，默认为可视窗口，如下则id为a的div为边界元素<br>
 *         如：<code>
 *            TooltipPanel direction='top' wapper='a'
 *         </code>
 *     </li>
 * </ul>
 * @class TooltipPanel
 * @module ui
 * @constructor
 * @demo star.js {UI展示}
 * @demo tooltip.js {源码}
 * @show true
 * */
var TooltipPanel = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(TooltipPanel, _Component);

    function TooltipPanel(props, context) {
        _classCallCheck(this, TooltipPanel);

        var _this = _possibleConstructorReturn(this, (TooltipPanel.__proto__ || Object.getPrototypeOf(TooltipPanel)).call(this, props, context));

        _this.state = {
            /**
             * 显示与否由父组件控制
             * @type Boolean
             * */
            show: _this.props.show
        };
        _this.isOldDir = true;
        return _this;
    }

    /**
     * 动态更新展示
     */


    _createClass(TooltipPanel, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.changeStyle(this.props.direction);
        }

        /**
         * 渲染完成时进行方向和边界判断，调整tips的位置
         * @method componentDidMount
         * @return null
         * */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.changeStyle(this.props.direction);
        }

        /**
         * @method render
         * @return ReactElement
         * */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var componentTag = this.props.children.props.componentTag;

            return _react2.default.createElement(
                _Grid2.default,
                _extends({}, this.props, { className: (0, _classnames2.default)(this.getClassName('container')), ref: 'container' }),
                this.props.children,
                _react2.default.createElement(_Tooltip2.default, _extends({}, this.props, { ref: function ref(obj) {
                        _this2.tips = obj;
                    } }))
            );
        }

        /**
         * 获得限制区域的宽，若未指定则默认可视区域大小
         *
         * */

    }, {
        key: 'getWarpperWH',
        value: function getWarpperWH() {
            var warp = this.props.wrapper;
            var warpWH = void 0;
            if (warp) {
                var warpNode = document.querySelector('#' + this.props.wrapper);
                warpWH = this.getClientWH(warpNode);
            } else {
                var bodys = this.getClientWH(document.body);
                var docs = this.getClientWH(document.documentElement);
                warpWH = this.getMaxBody(bodys, docs);
            }
            return warpWH;
        }

        /**
         * 获取元素的client宽高
         * */

    }, {
        key: 'getClientWH',
        value: function getClientWH(obj) {
            var wh = {
                width: obj.clientWidth,
                height: obj.clientHeight
            };
            return wh;
        }

        /**
         * 获取tips的offset
         * 宽高容易获取，top和left循环向上直到body，如果指定边界a，则取两者之差
         * */

    }, {
        key: 'getOffsetWH',
        value: function getOffsetWH(obj) {
            var wh = {
                height: obj.offsetHeight,
                width: obj.offsetWidth
            };
            var warp = this.props.wrapper;
            var warpNode = warp ? document.querySelector('#' + warp) : null;
            wh.left = this.getTrueLT(obj, true, warpNode);
            wh.top = this.getTrueLT(obj, false, warpNode);
            return wh;
        }
        /**
         * 获取处理之后的offset，top和left
         * */

    }, {
        key: 'getTrueLT',
        value: function getTrueLT(tipNode, isLeft, warpNode) {
            var tipNodeLT = this.getOffsetLT(tipNode, isLeft);
            if (warpNode) {
                var warpLT = this.getOffsetLT(warpNode, isLeft);
                tipNodeLT = tipNodeLT - warpLT;
            }
            return tipNodeLT;
        }
        /**
         * 获取offset top、left。
         * 两者获取方式相同，根据isleft区分left或top
         * */

    }, {
        key: 'getOffsetLT',
        value: function getOffsetLT(ele, isLeft) {
            var dir = isLeft ? 'offsetLeft' : 'offsetTop';
            var actuDir = ele[dir],
                current = ele.offsetParent;
            if (current != null) {
                actuDir = actuDir + current[dir];
                current = current.offsetParent;
            }
            return actuDir;
        }

        /**
         * tips方向和边界判断，调整tips的位置
         * @method changeStyle
         * @param direction {String}
         * @return null
         * */

    }, {
        key: 'changeStyle',
        value: function changeStyle(direction) {
            var dir = direction;
            var _ref = [_reactDom2.default.findDOMNode(this.tips), _reactDom2.default.findDOMNode(this.refs.container).children[0]],
                tipNode = _ref[0],
                arrowNode = _ref[1];

            var tips = this.getOffsetWH(tipNode);
            var arrow = this.getOffsetWH(arrowNode);
            var warpperWH = this.getWarpperWH();
            dir = this.isValidate(dir, tips, arrow, warpperWH);
            switch (dir) {
                case 'down':
                    tipNode.style.top = arrow.height + 'px';
                    tipNode.style.left = (arrow.width - tips.width) / 2 + 'px';
                    break;
                case 'top':
                    tipNode.style.top = '-' + (tips.height + 10) + 'px';
                    tipNode.style.left = (arrow.width - tips.width) / 2 + 'px';
                    break;
                case 'left':
                    tipNode.style.right = arrow.width + 5 + 'px';
                    tipNode.style.top = (arrow.height - tips.height) / 2 - 5 + 'px';
                    break;
                case 'right':
                    tipNode.style.left = arrow.width + 5 + 'px';
                    tipNode.style.top = (arrow.height - tips.height) / 2 - 5 + 'px';
                    break;
                default:
                    break;
            }
            !this.isOldDir && this.getNewArrow(tipNode, dir);
        }

        /**
         * 获得浏览器的边界大小
         * @method getMaxBody
         * @param body {Object}
         * @param doc {Object}
         * @return maxBody {Object}
         * */

    }, {
        key: 'getMaxBody',
        value: function getMaxBody(body, doc) {
            var maxBody = {
                height: body.height > doc.height ? body.height : doc.height,
                width: body.width > doc.width ? body.width : doc.width

            };
            return maxBody;
        }

        /**
         * 如果方向改变，重新设置箭头方向
         * */

    }, {
        key: 'getNewArrow',
        value: function getNewArrow(tipNode, dir) {
            var arrow = tipNode.children[0];
            this.removeClass(arrow, (0, _classnames2.default)(this.getClassName('arrow-' + this.props.direction)));
            this.addClass(arrow, (0, _classnames2.default)(this.getClassName('arrow-' + dir)));
        }

        /**
         * 判断是否满足边界条件,返回满足的方向
         * 不满足的话应该说直接取相反方向
         * @method isValidate
         * @param dir {String}
         * @param tips {Object}
         * @param ele {Object}
         * @param maxBody {Object} 边界
         * @return flag {Boolean}
         * */

    }, {
        key: 'isValidate',
        value: function isValidate(dir, tips, ele, maxBody) {
            var newDir = dir;
            switch (dir) {
                case 'down':
                    if (maxBody.height - ele.top < ele.height + tips.height) {
                        newDir = 'top';
                        this.isOldDir = false;
                    }
                    return newDir;
                    break;
                case 'top':
                    if (ele.top < tips.height) {
                        newDir = 'down';
                        this.isOldDir = false;
                    }
                    return newDir;
                    break;
                case 'left':
                    if (ele.left < tips.width) {
                        newDir = 'right';
                        this.isOldDir = false;
                    }
                    return newDir;
                    break;
                case 'right':
                    if (maxBody.width - ele.left < ele.width + tips.width) {
                        newDir = 'left';
                        this.isOldDir = false;
                    }
                    return newDir;
                    break;
                default:
                    return newDir;
                    break;
            }
        }
    }]);

    return TooltipPanel;
}(_react.Component), _class2.propType = {
    /**
     * 提示内容
     * @property msg
     * @type String
     * @default 这是个提示
     * */
    msg: _react.PropTypes.string,
    /**
     * 是否指定tips的边界，如果指定超出该边界则改变方向，否则默认以可是窗口边界来判断
     * @property wrapper
     * @type string
     * @default ''
     * */
    wrapper: _react.PropTypes.string,
    /**
     * 提示方向
     * @property direction
     * @type String
     * @default down
     * */
    direction: _react.PropTypes.string,
    classPrefix: _react.PropTypes.string,
    componentTag: _react.PropTypes.string
}, _class2.defaultProps = {
    show: false,
    msg: "这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示",
    direction: 'down',
    classPrefix: 'tooltip',
    wrapper: '',
    componentTag: 'div'
}, _temp)) || _class;

exports.default = TooltipPanel;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TooltipPanel, 'TooltipPanel', '/Users/panqianjin/work/eagle-ui/src/TooltipPanel.js');
}();

;