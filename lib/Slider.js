'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _utilsClassNameMixinJs = require('./utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _utilsDomJs = require('./utils/Dom.js');

var _utilsDomJs2 = _interopRequireDefault(_utilsDomJs);

/**
 * 滑块组件<br>
 * 目前支持
 *
 * @class Slider
 * @module ui
 * @extends Component
 * @constructor
 * @demo #/slider|slider.js
 * @show true
 * */
//todo 范围滑块，垂直滑块，最小值计算

var Slider = (function (_Component) {
    _inherits(Slider, _Component);

    _createClass(Slider, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'slider',
            /**
             * 滑块初始值
             * @param [{Number}]
             * @type String
             * @default 0
             * */
            min: 0,
            max: 100,
            defaultValue: 0,
            getValueCallback: function getValueCallback() {},
            initCallback: function initCallback() {}
        },
        enumerable: true
    }]);

    function Slider(props, context) {
        _classCallCheck(this, _Slider);

        _Component.call(this, props, context);

        this.state = {
            progressX: 0
        };
        this.value = this.props.defaultValue;
        this.isMove = false;
        this.left = this.state.progressX;
        this.step = 0;
        this.current = {
            x: 0,
            y: 0
        };
    }

    Slider.prototype.mouseDownHandler = function mouseDownHandler(e) {

        this.isMove = true;
        //this.sliderboxWidth = this.sliderbox.offsetWidth;
        this.maxStep = this.getStep();

        this.current.x = e.clientX;
        this.current.y = e.clientY;
    };

    Slider.prototype.getStepByBG = function getStepByBG(s, v) {
        var max = this.sliderboxWidth - this.sliderPoint.offsetWidth;
        if (s <= 0) {
            s = 0;
        }

        if (v >= this.props.max - this.props.min) {
            s = max;
        }

        return s;
    };

    Slider.prototype.getValueByBG = function getValueByBG(p) {
        var step = this.maxStep;
        //边界的判断
        if (p <= 0) {
            p = 0;
        }
        var max = this.sliderboxWidth - this.sliderPoint.offsetWidth;
        if (p >= max) {
            p = max;
        }
        //回弹的判断
        var val = Math.round(Math.abs(p) / step);
        this.step = this.getStepByBG(val * step, val);

        return {
            p: p,
            v: val
        };
    };

    Slider.prototype.moveHandler = function moveHandler(e) {

        if (this.isMove) {
            var x = e.clientX - this.current.x,
                p = this.left + x;
            var vp = this.getValueByBG(p);
            /*let step =this.maxStep;
            //边界的判断
            if(p<=0){
                p = 0;
            }
            let max = this.sliderboxWidth-this.sliderPoint.offsetWidth;
            if(p>=max){
                p = max
            }
            //round
            let val = Math.round(Math.abs(p)/step);
            //回弹的判断
            this.step = val*step;//-this.sliderPoint.offsetWidth;
            if(this.step<=0){
                this.step = 0;
            }
             if(val>=(this.props.max-this.props.min )){
                this.step = max;
            }*/
            this.updateStep(vp.p);
            var val = vp.v;
            val += this.props.min;
            if (this.value != val) {
                this.props.getValueCallback(val);
                this.value = val;
            }
            this.isUpdateValue = true;
        }
        e.preventDefault();
        return false;
    };

    Slider.prototype.upHandler = function upHandler() {
        if (this.isUpdateValue) {
            this.isMove = false;
            this.left = this.step;
            this.updateStep(this.left);
            this.isUpdateValue = false;
        }
    };

    Slider.prototype.updateStep = function updateStep(val) {
        this.setState({
            progressX: val,
            progress: val
        });
    };

    Slider.prototype.setValue = function setValue(val) {
        this.value = val;
    };

    Slider.prototype.getStep = function getStep() {
        return (this.sliderboxWidth - this.sliderPoint.offsetWidth) / (this.props.max - this.props.min);
    };

    Slider.prototype.resetValue = function resetValue() {
        this.maxStep = this.getStep();
        var p = Math.round((this.value - this.props.min) * this.maxStep) || 0;
        var pv = this.getValueByBG(p, this.value);
        this.left = this.step = pv.p;
        this.updateStep(this.left);
    };

    Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setValue(nextProps.defaultValue);
        this.sliderboxWidth = this.sliderbox.offsetWidth;
        /*clearTimeout(this.updateValueTimeout);
        this.updateValueTimeout = setTimeout(()=>{
         },600);*/
        if (!this.isMove) this.resetValue();
    };

    Slider.prototype.componentDidMount = function componentDidMount() {
        this.sliderbox = _reactLibReactDOM2['default'].findDOMNode(this.refs.sliderbox);
        this.sliderPoint = _reactLibReactDOM2['default'].findDOMNode(this.refs.sliderboxM);
        this.sliderboxWidth = this.sliderbox.offsetWidth || 0;
        this.setValue(this.props.defaultValue < this.props.min ? this.props.min : this.props.defaultValue);
        this.resetValue();
        this.props.initCallback(this.value);

        document.addEventListener('mousemove', this.moveHandler.bind(this), false);
        document.addEventListener('mouseup', this.upHandler.bind(this), false);
    };

    Slider.prototype.render = function render() {
        var _classnames;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames3['default'](this.getClassName('slider'), (_classnames = {}, _classnames[this.getClassName('v')] = this.props.direction === 'vertical', _classnames)), ref: 'sliderbox' }),
            _react2['default'].createElement('div', { className: 'drag-progress', style: {
                    width: this.state.progress
                } }),
            _react2['default'].createElement('div', { className: 'drag-bar', style: {
                    left: this.state.progressX
                }, onMouseDown: this.mouseDownHandler.bind(this), ref: 'sliderboxM' })
        );
    };

    var _Slider = Slider;
    Slider = _utilsClassNameMixinJs2['default'](Slider) || Slider;
    return Slider;
})(_react.Component);

exports['default'] = Slider;
module.exports = exports['default'];