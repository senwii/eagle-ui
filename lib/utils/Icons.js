'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//import SvgIcon from 'ui-svg-icons/dist/24px';

require('gfs-icons');

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Icon = (function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        _Component.apply(this, arguments);
    }

    Icon.prototype.render = function render() {
        var defaultStyle = {
            width: '18px',
            height: '18px'
        };
        var _props = this.props;
        var name = _props.name;
        var className = _props.className;
        var style = _props.style;

        var other = _objectWithoutProperties(_props, ['name', 'className', 'style']);

        return _react2['default'].createElement('div', _extends({ className: _classnames2['default']('gfs-icon', name, className), style: _extend2['default']({}, defaultStyle, style || {}) }, other));
    };

    return Icon;
})(_react.Component);

exports['default'] = Icon;
module.exports = exports['default'];