'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip
 * @module ui
 * @constructor
 * @demo #/toolTip|tooltip.js
 * @show true
 * */

var Tooltip = (function (_Component) {
    _inherits(Tooltip, _Component);

    _createClass(Tooltip, null, [{
        key: 'propType',
        value: {
            /**
             * 提示是否展示
             * @property show
             * @type Boolean
             * @default null
             * */
            show: _react.PropTypes.boolean,
            /**
             * 提示内容
             * @property msg
             * @type String
             * @default null
             * */
            msg: _react.PropTypes.string,
            /**
             * 提示方向
             * @property direction
             * @type String
             * @default null
             * */
            direction: _react.PropTypes.string,
            classPrefix: _react.PropTypes.string,
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'tooltip',
            padding: 5
        },
        enumerable: true
    }]);

    function Tooltip(props, context) {
        _classCallCheck(this, _Tooltip);

        _Component.call(this, props, context);
    }

    /**
     * 接收到新props时执行,state.show变为nextProps.show
     * 接收到新props时执行,state.show变为nextProps.show
     * 实现隐藏与显示
     * @method componentWillReceiveProps
     * @return null
     * */
    /*componentWillReceiveProps(nextProps){
        this.setState({
            show : nextProps.show
        });
    }*/

    Tooltip.prototype.componentDidMount = function componentDidMount() {
        /* setTimeout(()=>{
             this.props.onChangeStyle(this.target,this.props.direction);
         });*/
        this.props.setToolTipObj(this.target);
    };

    Tooltip.prototype.render = function render() {
        var _classnames,
            _this = this;

        return _react2['default'].createElement(
            _GridJs2['default'],
            { ref: function (ref) {
                    _this.target = ref;
                }, componentName: 'tooltip', className: _classnames3['default'](this.getClassName('wraper'), this.getClassName('tooltip'), (_classnames = {}, _classnames[this.getClassName('show')] = this.props.show, _classnames)) },
            _react2['default'].createElement(
                'div',
                { className: _classnames3['default'](this.getClassName('arrow-' + this.props.direction)), style: this.getStyle(this.props.bgColor) },
                _react2['default'].createElement('div', { className: 'arrow-tip', style: this.getStyle('#ddd') })
            ),
            _react2['default'].createElement(
                'div',
                { className: _classnames3['default'](this.getClassName('content')), style: { 'backgroundColor': this.props.bgColor, 'padding': parseInt(this.props.padding, 10) + 'px' } },
                this.getContent()
            )
        );
    };

    Tooltip.prototype.getStyle = function getStyle(color) {
        var styles = {};
        var direction = this.props.direction;

        var str = direction.substr(0, 1).toUpperCase() + direction.substr(1);
        styles['border' + str + 'Color'] = color;
        return styles;
    };

    /**
     * 判断是否有子元素，有的话取children，否则取msg
     * 两者均有以children优先
     * */

    Tooltip.prototype.getContent = function getContent() {
        var _props = this.props;
        var children = _props.children;
        var msg = _props.msg;

        return children ? children : msg;
    };

    var _Tooltip = Tooltip;
    Tooltip = _utilsClassNameMixin2['default'](Tooltip) || Tooltip;
    return Tooltip;
})(_react.Component);

exports['default'] = Tooltip;
module.exports = exports['default'];