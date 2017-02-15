'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

/**
 * 定义栅格中的一列，配合Row组件使用
 * <h5>主要的UI属性接口包括:</h5>
 * <ul>
 *     <li>sm:一行Row的宽度为100%(12份)，sm的值表示当前Col的宽度占了12份中的几份</li>
 * </ul><br>
 * 使用方式:
 * <pre><code>&#60;Col sm={5} &#62;&#60;/Col&#62;</code>
 * </pre>
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/Demo1">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Col.js">查看源码</a></div>
 * @class Col
 * @module grid(布局)
 * @extends Component
 * @constructor
 * @example
 *      //没有设置end属性，最后一个Col会向右对齐
 *      <Grid>
 *          <Row>
 *              <Col sm={4}>
 *                  浏览量：151195
 *              </Col>
 *              <Col sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *              <Col sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *          </Row>
 *      </Grid>
 *
 *      //设置end属性，最后一个Col会向左对齐
 *      <Grid>
 *          <Row>
 *              <Col sm={4}>
 *                  浏览量：151195
 *              </Col>
 *              <Col sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *              <Col end sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *          </Row>
 *      </Grid>
 * */

var Col = (function (_Component) {
    _inherits(Col, _Component);

    function Col() {
        _classCallCheck(this, Col);

        _Component.apply(this, arguments);
    }

    Col.prototype.initCallback = function initCallback() {
        var sm = this.props.sm;

        //this.setProperty('sm',this.props.egSize+'-'+sm );
        this.setProperty('end', 'end');
        this.setProperty('layer', 'layer');
        //
    };

    Col.prototype.render = function render() {
        var _props = this.props;
        var sm = _props.sm;
        var egSize = _props.egSize;

        return _react2['default'].createElement(
            this.componentTag,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(), this.getClassName(egSize + '-' + sm), this.props.className), style: this.getStyles(this.props.style) }),
            this.props.children
        );
    };

    _createClass(Col, null, [{
        key: 'propTypes',
        value: {
            egSize: _react.PropTypes.string,
            /**
             * 适用于每个Row下的最后一个Col
             * 当所有的col加起来不满12的情况下：如果不设置end属性，最后一个Col会向右对齐，如果设置end属性，最后一个Col就会向左对齐（float left）
             * @property end
             * @type Boolean
             * @default false
             * */
            end: _react.PropTypes.bool,
            /**
             * Row总宽度为100%(12份)，sm的值表示当前Col宽度占比父元素12份中的几份
             * @property sm
             * @type Number
             * @default 12(一整行)
             * */
            sm: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'col',
            componentTag: 'div',
            egSize: 'xs',
            sm: 12
        },
        enumerable: true
    }]);

    return Col;
})(_utilsComponent2['default']);

exports['default'] = Col;
module.exports = exports['default'];