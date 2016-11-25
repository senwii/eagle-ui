'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassNameMixin = require('./utils/ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 表单验证组件对所有带有data-validate属性的子元素input输入框进行验证<br />
 * <!--表单元素初始化值请绑定上data-field=“fieldName”,fieldName对应数据字段名称-->
 * rules属性提供的规则有<br/>
 * <pre>
 *     required：是否必填
 *     date：日期格式验证
 *     number：是否是有效的号码
 *     url：url规则验证
 *     dateISO：日期ISO验证
 *     digits：是否是数字
 *     equalTo：值对比
 *     minlength：最少输入
 *     maxlength：最大输入
 *     email：邮箱验证
 *     rangelength：字符大小需在某个区间之内
 *     min：输入的值需要大于等于此规则定义的值
 *     max：输入的值需要小于等于此规则定义的值
 *     range：一个区间取值范围
 * </pre>
 * @class ValidatorPanel
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo validate.js {源码}
 * @show true
 * */
var ValidatorPanel = (0, _ClassNameMixin2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ValidatorPanel, _Component);

    function ValidatorPanel(props, context) {
        _classCallCheck(this, ValidatorPanel);

        var _this2 = _possibleConstructorReturn(this, (ValidatorPanel.__proto__ || Object.getPrototypeOf(ValidatorPanel)).call(this, props, context));

        _this2.elements = {};

        _this2.formName = 'validate-form';
        _this2.errorClass = _this2.getClassName('validate-error');
        _this2.init = true;
        _this2.update = _this2.props.update;

        _this2.isUpdate = false;

        _this2.vals = {};
        _this2.valueLink = 'data-field';

        _this2.state = {
            message: '',
            show: '',
            fadeShow: 'block'
        };
        return _this2;
    }

    _createClass(ValidatorPanel, [{
        key: 'trim',
        value: function trim(str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
    }, {
        key: 'isArray',
        value: function isArray(value) {
            if (value instanceof Array || !(value instanceof Object) && Object.prototype.toString.call(value) == '[object Array]' || typeof value.length == 'number' && typeof value.splice != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice')) {

                return true;
            }
            return false;
        }
    }, {
        key: 'initVals',
        value: function initVals() {
            var elms = this.elements,
                val = '',
                name = null,
                vals = this.vals;

            var values = this.props.values;

            if (values) {
                for (var element in elms) {
                    name = this.getField(element);
                    val = values[name];
                    if (val) {
                        this.setValue(element, val);
                        vals[name] = val;
                    }
                }
            }
        }
    }, {
        key: 'optional',
        value: function optional(element) {
            var val = this.getValue(element);
            return !this.options.defaultRules.required.call(this, val, element);
        }
    }, {
        key: 'required',
        value: function required(value, element) {

            if (element.nodeName.toLowerCase() === "select") {
                var val = $(element).val();
                return val && val.length > 0;
            }
            if (this.checkable(element)) {
                return this.getLength(value, element) > 0;
            }
            return this.trim(value).length > 0;
        }
    }, {
        key: 'date',
        value: function date(value, element) {
            return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
        }
    }, {
        key: 'number',
        value: function number(value, element) {
            return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
        }
    }, {
        key: 'url',
        value: function url(value, element) {
            return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
        }
    }, {
        key: 'email',
        value: function email(value, element) {

            return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        }
    }, {
        key: 'dateISO',
        value: function dateISO(value, element) {
            return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
        }
    }, {
        key: 'digits',
        value: function digits(value, element) {
            return this.optional(element) || /^\d+$/.test(value);
        }
    }, {
        key: 'equalTo',
        value: function equalTo(value, element, param) {
            var target = document.querySelectorAll(param);
            /*if ( this.onfocus ) {
                target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
                    this.show();
                });
            }*/
            return this.optional(element) || value === target[0].value;
        }
    }, {
        key: 'minlength',
        value: function minlength(value, element, param) {
            var length = this.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length >= param;
        }
    }, {
        key: 'maxlength',
        value: function maxlength(value, element, param) {
            var length = this.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length <= param;
        }
    }, {
        key: 'rangelength',
        value: function rangelength(value, element, param) {
            var length = this.isArray(value) ? value.length : this.getLength(value, element);
            return this.optional(element) || length >= param[0] && length <= param[1];
        }
    }, {
        key: 'min',
        value: function min(value, element, param) {
            return this.optional(element) || value >= param;
        }
    }, {
        key: 'max',
        value: function max(value, element, param) {
            return this.optional(element) || value <= param;
        }
    }, {
        key: 'range',
        value: function range(value, element, param) {
            return this.optional(element) || value >= param[0] && value <= param[1];
        }

        //待改进

    }, {
        key: 'optional',
        value: function optional(element) {
            var val = this.getValue(element);
            return !this.required.call(this, val, element);
        }
        //高亮

    }, {
        key: 'highlight',
        value: function highlight(element) {
            if (!this.checkable(element)) {
                this.addClass(element, this.errorClass);

                if (this.props.shake) {

                    this.addClass(element, 'shake animated');
                    setTimeout(function () {
                        this.removeClass(element, 'shake animated');
                    }.bind(this), 1000);
                }
            }
        }
        //取消高亮

    }, {
        key: 'unhighlight',
        value: function unhighlight(element) {
            this.removeClass(element, this.errorClass);
        }
    }, {
        key: 'checkable',
        value: function checkable(element) {
            return (/radio|checkbox/i.test(element.type)
            );
        }
    }, {
        key: 'getLength',
        value: function getLength(value, element) {
            switch (element.nodeName.toLowerCase()) {
                case "select":
                    return document.querySelectorAll("option:selected", element).length;
                case "input":
                    if (this.checkable(element)) {
                        return document.querySelectorAll("[name='" + element.name + "']:checked").length;
                    }
            }
            return value.length;
        }
    }, {
        key: 'formatString',
        value: function formatString(str, options) {

            if (!options) {
                return str;
            }

            return str.replace(/\{(.+?)\}/ig, function (match, key) {
                var value = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) != 'object' ? options : options[key];
                return typeof value == 'undefined' ? match : value;
            });
        }
    }, {
        key: 'getValue',
        value: function getValue(element) {
            var val = void 0,
                type = element.type.toLowerCase();

            if (type === "radio" || type === "checkbox") {
                var el = document.querySelectorAll('input[name="' + element.name + '"]:checked');
                return el && el.length > 0 ? el[0].value : '';
            } else if (type === "number" && typeof element.validity !== "undefined") {
                return element.validity.badInput ? false : element.value;
            }

            val = element.value;
            if (typeof val === "string") {
                return val.replace(/\r/g, "");
            }
            return val;
        }
    }, {
        key: 'setValue',
        value: function setValue(element, val) {}
        //循环验证单个input上的规则

    }, {
        key: 'check',
        value: function check(element) {

            //从每一项中提取验证规则
            var message = this.props.message;
            //let options = extend(true,{},this.options );

            var val = this.getValue(element),

            //rule = null,
            msg = '',
                text = null,
                rules = this.props.rules[element.name]; //element.getAttribute('data-rules') ;


            /*{
                require:true,
                    isName:function(){
                return true
            },
                number:{
                    text:'不能为空',
                        params:1,
                        rule:function(){
                        return true;
                    }
                }
            }*/
            this.vals[this.getField(element)] = val;
            for (var rule in rules) {

                text = rules[rule];
                //text =typeof(text)!=='string' ? text : {text:text};
                if (typeof text == 'boolean') {
                    text = {};
                }
                if (!text.text) {
                    text.text = message[rule];
                }

                var validate = text.rule && text.rule instanceof Function ? text.rule : this[rule];

                if (!validate.call(this, val, element, text.params)) {
                    msg = text.text;
                    break;
                }
                /*if(text.url && text.url!='' ){
                    msg = this.ajaxValidate(text.url,val,text.params);
                    if(typeof(msg) !== 'string'){
                        msg = text.text;
                    }
                    break;
                }else if(!this[rule].call(this,val,element,text.params)  ){
                    msg = text.text;
                    break;
                }*/
            }
            return this.formatString(msg, text && text.params || '');
        }

        //验证

    }, {
        key: 'validate',
        value: function validate(element) {
            var message = this.check(element) || '';
            if (message !== '' && element.style.display != 'none' && !this.isUpdate) {
                //错误提示
                //this.elements[element.name].status=1;

                this.setTipsOffset(element);

                //设置错误消息
                this.setState({
                    message: message,
                    show: message
                });
                //this.highlight(this.parent, this.options.errorClass, this.options.validClass);
                if (this.props.timeout) {
                    clearTimeout(this.validateTimeout);
                    this.validateTimeout = setTimeout(function () {
                        this.setState({
                            show: ''
                        });
                    }.bind(this), this.props.timeout);
                }
                return false;
            }
            this.setState({
                show: null
            });
            this.unhighlight(element);
            this.isUpdate = false;
            //this.hide();
            return true;
        }
    }, {
        key: 'getField',
        value: function getField(element) {
            var attr = element.getAttribute(this.valueLink);
            return attr ? attr : element.name;
        }
    }, {
        key: 'validateHandler',
        value: function validateHandler(e) {
            var getValueCallback = this.props.getValueCallback,
                target = e.target;

            clearTimeout(this.vaTimeout);
            this.vaTimeout = setTimeout(function () {
                var b = this.validate(target);
                b && getValueCallback && getValueCallback(this.getField(target), this.getValue(target), this.vals);
            }.bind(this), 400);
        }
    }, {
        key: 'submit',
        value: function submit(e) {
            clearTimeout(this.__blurTimeobj);
            var elements = this.elements,
                element = null,
                isSubmit = true;
            if (!elements || elements.length <= 0) {
                return false;
            }
            for (var item in elements) {
                element = elements[item]; //React.findDOMNode(this.props.refs[item] );
                if (element && element.nodeType == 1) {
                    if (!this.validate(element)) {
                        setTimeout(function () {
                            element.focus();
                        });
                        isSubmit = false;
                        break;
                    }
                }
            }

            e.preventDefault();
            e.stopPropagation();
            if (isSubmit && this.props.validateCallback(this.vals)) {
                return this.props.submitCallback && this.props.submitCallback(this.vals, e);
            }
            return false;
        }

        //隐藏错误提示

    }, {
        key: 'hide',
        value: function hide() {}
    }, {
        key: 'parents',
        value: function parents(ele, str) {
            try {
                var tempNode = ele.parentNode;
                while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
                    tempNode = tempNode.parentNode;
                }
                return [tempNode];
            } catch (err) {
                return [];
            }
        }
    }, {
        key: 'getTip',
        value: function getTip() {
            return this.form && this.form.querySelector('.' + this.getClassName("validate-tips"));
        }
        //设置错误提示框的位置

    }, {
        key: 'setTipsOffset',
        value: function setTipsOffset(element) {
            var node = null,
                name = element.name,
                d = this.props.direction,
                tb = d === "bottom" || d === "top",
                tip = this.getTip(),
                tag = this.props.componentTag,
                w = element.offsetLeft,
                t = element.offsetTop,
                h = element.offsetHeight;

            while (element && (element.nodeType !== 1 || !this.hasClass(element, this.getClassName('validate')))) {
                element = element.parentNode;
            }

            if (element) {
                element = element.querySelectorAll('[name="' + name + '"]');

                element = element[tb ? 0 : element.length - 1];

                w = element.offsetLeft;
                t = element.offsetTop;
                node = element.offsetParent;

                while (node && !this.hasClass(node, this.getClassName('validate'))) {
                    t += node.offsetTop;
                    w += node.offsetLeft;
                    node = node.offsetParent;
                }
                //w = tip.offsetWidth;
                this.highlight(element);

                tip.style.display = "block";

                setTimeout(function () {
                    if (tb) {

                        tip.style.cssText = 'left:' + w + 'px;top:' + (d === "bottom" ? t + element.offsetHeight : t - tip.offsetHeight) + 'px;width:' + element.offsetWidth + 'px';
                    } else {
                        //height:${h}px;line-height:${h}px;
                        tip.style.cssText = 'left:' + (w + (d === "right" ? element.offsetWidth + 10 : 0)) + 'px;top:' + (t + (element.offsetHeight / 2 - tip.offsetHeight / 2)) + 'px;';
                    }
                }.bind(this));
            } else {
                //tip.style.display='none';
            }
        }

        //废弃

    }, {
        key: 'bindValidate',
        value: function bindValidate() {
            var _this3 = this;

            //let _this = this;
            var same = null,
                showOrhide = 'show';
            var options = _react2.default.Children.map(this.props.children, function (option) {
                //将validate保存起来，在适当的时候调用
                var _option$props = option.props,
                    rules = _option$props.rules,
                    name = _option$props.name;

                if (rules) {

                    _this3.elements[name] = {
                        rules: rules,
                        status: 0
                    };

                    var opt = _react2.default.cloneElement(option, {
                        onBlur: _this3.validateHandler.bind(_this3),
                        onFocus: _this3.validateHandler.bind(_this3),
                        onClick: _this3.validateHandler.bind(_this3),
                        onKeyUp: _this3.validateHandler.bind(_this3),
                        ref: 'ref-' + name
                    });

                    showOrhide = _this3.state[name] && same != name ? 'show' : 'hide';
                    same = name;
                    return { opt: opt };
                }
                return option;
            }, this);
            return options;
        }
    }, {
        key: 'getForm',
        value: function getForm() {
            return _reactDom2.default.findDOMNode(this.refs[this.props.id ? this.props.id : this.formName]);
        }
    }, {
        key: 'getElements',
        value: function getElements() {
            return this.form.querySelectorAll('[data-validate]');
        }
    }, {
        key: 'setDomEvent',
        value: function setDomEvent() {
            var elements = this.getElements(),
                _this = this,
                _props = this.props,
                trigger = _props.trigger,
                initCallback = _props.initCallback,
                submitElement = _props.submitElement;
            var _loop = function _loop(i, len) {
                trigger.split(' ').forEach(function (event) {
                    elements[i].removeEventListener(event, _this._fun, false);
                    elements[i].addEventListener(event, _this._fun, false);
                });
            };

            for (var i = 0, len = elements.length; i < len; i++) {
                _loop(i, len);
            }

            this.elements = elements;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            this._fun = function (e) {
                this.validateHandler(e);
            }.bind(this);

            this.form = this.getForm();

            var elements = this.getElements(),
                _this = this,
                _props2 = this.props,
                trigger = _props2.trigger,
                initCallback = _props2.initCallback,
                submitElement = _props2.submitElement;

            /*for(let i=0,len=elements.length;i<len;i++){
                trigger.split(' ').forEach((event)=>{
                     elements[i].addEventListener(event,_this.validateHandler.bind(_this),false);
                });
            }*/

            this.setDomEvent();

            initCallback.call(this, this.submit.bind(this));

            if (submitElement) {
                document.querySelector(submitElement).addEventListener('click', this.submit.bind(this), false);
            }
            //let tip = this.getTip();

            this.elements = elements;
            this.init = false;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.update != this.update) {
                this.setDomEvent();

                this.update = this.props.update;
                this.isUpdate = true;
                this.setState({
                    show: ''
                });
            }
        }
    }, {
        key: 'removeFadeout',
        value: function removeFadeout() {
            clearTimeout(this.fadeoutTimeObj);
            this.fadeoutTimeObj = setTimeout(function () {
                if (!this.state.show && !this.init && this.state.fadeShow != 'none') {
                    this.removeClass(this.getTip(), 'fadeout');
                }
            }.bind(this), 400);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                Component = _props3.componentTag,
                direction = _props3.direction,
                id = _props3.id;


            this.removeFadeout();
            return _react2.default.createElement(
                Component,
                _extends({}, this.props, { ref: id ? id : this.formName, className: this.getClassName('validate') }),
                this.props.children,
                _react2.default.createElement(
                    'div',
                    { ref: 'ref-validateTips', className: (0, _classnames2.default)(this.getClassName('validate-tips'), 'animated', '' + (direction === "bottom" || direction === "top" ? 'bottom' : ''), '' + (this.init ? "" : this.state.show ? "fadein" : "fadeout")) },
                    _react2.default.createElement('i', null),
                    this.state.message
                )
            );
        }
    }]);

    return ValidatorPanel;
}(_react.Component), _class2.propTypes = {
    //触发点，change blur  manual（手动）
    trigger: _react.PropTypes.string,
    submitCallback: _react.PropTypes.func,
    /**
     * 需要初始化的表单元素默认值(废弃)
     * @property values
     * @type Object
     * */
    values: _react.PropTypes.object,
    /**
     * 每次验证时值被改变后都会被触发，会回传当前data-field字段、值和所有值对象
     * @property getValueCallback
     * @type Function
     * */
    getValueCallback: _react.PropTypes.func
}, _class2.defaultProps = {
    /**
     * 包装容器
     * @property componentTag
     * @type String
     * @default form
     * */
    componentTag: 'form',
    /**
     * 触发验证的事件集合
     * @property trigger
     * @type String
     * @default blur keyup focus click
     * */
    trigger: 'blur keyup focus click',
    /**
     * 默认规则提示文案
     * @property message
     * @type Object
     * @default
     *       required: '不能为空',
             date: '请正确填写日期',
             number: '请输入一个有效的号码',
             url: '请输入一个有效的URL',
             email: '请输入一个有效的电子邮件地址',
             dateISO: '请输入一个有效的日期(ISO)',
             digits: '请输入数字',
             equalTo:'请再次输入相同的值。',
             minlength: '请输入至少{0}字符',
             maxlength: '请输入不超过{0}字符',
             rangelength: '请输入一个值{0}和{1}字符之间',
             min: '请输入一个值大于或等于{0}',
             max: '请输入一个值小于或等于{0}',
             range: '请输入一个值{0} - {1}'
     * */
    message: {
        required: '不能为空',
        date: '请正确填写日期',
        number: '请输入一个有效的号码',
        url: '请输入一个有效的URL',
        email: '请输入一个有效的电子邮件地址',
        dateISO: '请输入一个有效的日期(ISO)',
        digits: '请输入数字',
        equalTo: '请再次输入相同的值。',
        minlength: '请输入至少{0}字符',
        maxlength: '请输入不超过{0}字符',
        rangelength: '请输入一个值{0}和{1}字符之间',
        min: '请输入一个值大于或等于{0}',
        max: '请输入一个值小于或等于{0}',
        range: '请输入一个值{0} - {1}'
    },
    initCallback: function initCallback() {},
    /**
     * 自定义在提交后的callback
     * @event submitCallback
     * @param {object} opt 表单数据结构
     */
    submitCallback: function submitCallback() {
        return true;
    },
    /**
     * 自定义验证规则之外的其他逻辑
     * @event validateCallback
     * @param {object} opt 表单数据结构
     * */
    validateCallback: function validateCallback() {
        return true;
    },
    /**
     * 提示框消失时间
     * @property timeout
     * @type Number
     * @default 3000
     * */
    timeout: 3000,
    /**
     * 提交按钮id
     * @property submitElement
     * @type String
     * */
    submitElement: '',
    /**
     * 是否增强文本框提示
     * @property shake
     * @type Boolean
     * @default true
     * */
    shake: true,
    /**
     * 规则验证
     * @property rules
     * @type Object
     * */
    rules: {},
    /**
     * 提示方位
     * @property direction
     * @type String
     * @default right
     * */
    direction: 'right',
    /**
     * 重新更新dom
     * @property update
     * @type String
     * @default +new Date()
     * */
    update: +new Date()
}, _temp)) || _class;

exports.default = ValidatorPanel;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ValidatorPanel, 'ValidatorPanel', '/Users/panqianjin/work/eagle-ui/src/ValidatorPanel.js');
}();

;