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
 * 定义栅格中的一行，配合Col组件使用
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/Demo1">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Row.js">查看源码</a></div>
 * @class Row
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

var Row = (function (_Component) {
    _inherits(Row, _Component);

    function Row() {
        _classCallCheck(this, Row);

        _Component.apply(this, arguments);
    }

    Row.prototype.render = function render() {

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(), 'clearfix', this.props.className), style: this.getStyles(this.props.style) }),
            this.props.children
        );
    };

    _createClass(Row, null, [{
        key: 'propTypes',
        value: {
            classPrefix: _react.PropTypes.string,
            bottom: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'row'
        },
        enumerable: true
    }]);

    return Row;
})(_utilsComponent2['default']);

exports['default'] = Row;
module.exports = exports['default'];