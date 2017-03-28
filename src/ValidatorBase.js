import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import ReactDom from 'react/lib/ReactDOM';

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
 *     自定义，比如rules:{
 *          checkbox:{
 *                required:true,
 *                //自定义规则
 *                isValueToNumber:{
 *                    text:'value值不是数字',
 *                    rule:function(value){
 *                        return !isNaN(value-0);
 *                    }
 *                }
 *            }
 *       }
 *     会验证name为checkbox的输入控件。
 *     自定义的规则作为key、value配置，validator会依据rule方法返回的true或者false来决定是否提示text中的文案
 * </pre>
 * @class ValidatorPanel
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo #/validate|validate.js
 * @show true
 * */
@ClassNameMixin
export default class ValidatorPanel extends Component {
    static propTypes = {
        //触发点，change blur  manual（手动）
        trigger:PropTypes.string,
        submitCallback:PropTypes.func,
        /**
         * 需要初始化的表单元素默认值(废弃)
         * @property values
         * @type Object
         * */
        values:PropTypes.object,
        /**
         * 每次验证时值被改变后都会被触发，会回传当前data-field字段、值和所有值对象
         * @property getValueCallback
         * @type Function
         * */
        getValueCallback:PropTypes.func
    };

    static defaultProps = {
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
        trigger:'blur keyup focus click',
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
        message:{
            required: '不能为空',
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
        },
        initCallback:function(){},
        /**
         * 自定义在提交后的callback
         * @event submitCallback
         * @param {object} opt 表单数据结构
         */
        submitCallback:function(){
            return true;
        },
        /**
         * 自定义验证规则之外的其他逻辑
         * @event validateCallback
         * @param {object} opt 表单数据结构
         * */
        validateCallback:function(){
            return true;
        },
        /**
         * 提示框消失时间
         * @property timeout
         * @type Number
         * @default 3000
         * */
        timeout:3000,
        /**
         * 提交按钮id
         * @property submitElement
         * @type String
         * */
        submitElement:'',
        /**
         * 是否增强文本框提示
         * @property shake
         * @type Boolean
         * @default true
         * */
        shake:true,
        /**
         * 规则验证
         * @property rules
         * @type Object
         * */
        rules:{},
        /**
         * 提示方位
         * @property direction
         * @type String
         * @default right
         * */
        direction:'right',
        /**
         * 重新更新dom
         * @property update
         * @type String
         * @default +new Date()
         * */
        update:+new Date()
    };

    constructor(props, context) {
        super(props, context);

        this.elements = {};

        this.formName = 'validate-form';
        this.errorClass = this.getClassName('validate-error');
        this.init = true;
        this.update = this.props.update;

        this.isUpdate = false;

        this.vals={};
        this.valueLink = 'data-field';

        this.state = {
            message:'',
            show:'',
            fadeShow:'block'
        };
    }

    trim(str){
        return str.replace(/(^\s*)|(\s*$)/g,"");
    }

    isArray(value){
        if (value instanceof Array ||
            (!(value instanceof Object) &&
            (Object.prototype.toString.call((value)) == '[object Array]') ||
            typeof value.length == 'number' &&
            typeof value.splice != 'undefined' &&
            typeof value.propertyIsEnumerable != 'undefined' &&
            !value.propertyIsEnumerable('splice')) ) {

            return true;
        }
        return false;
    }

    initVals(){
        let elms = this.elements,
            val = '',
            name=null,
            vals= this.vals;

        let {values} = this.props;
        if(values){
            for(let element in elms){
                name = this.getField(element);
                val = values[name];
                if(val){
                    this.setValue(element,val);
                    vals[name] = val;
                }
            }
        }

    }

    optional(element) {
        let val = this.getValue(element );
        return !this.options.defaultRules.required.call( this, val, element );
    }

    required( value, element ) {

        if ( element.nodeName.toLowerCase() === "select" ) {
            let val = $( element ).val();
            return val && val.length > 0;
        }
        if ( this.checkable( element ) ) {
            return this.getLength( value, element ) > 0;
        }
        return this.trim( value ).length > 0;
    }

    date( value, element ) {
        return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
    }

    number( value, element ) {
        return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
    }

    url( value, element ) {
        return this.optional( element ) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
    }
    email( value, element ) {

        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
    }
    dateISO( value, element ) {
        return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
    }
    digits( value, element ) {
        return this.optional( element ) || /^\d+$/.test( value );
    }
    equalTo( value, element, param ) {
        let target = document.querySelectorAll(param);
        /*if ( this.onfocus ) {
         target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
         this.show();
         });
         }*/
        return this.optional( element ) || value === target[0].value;
    }
    minlength( value, element, param ) {
        let length = this.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || length >= param;
    }
    maxlength( value, element, param ) {
        let length = this.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || length <= param;
    }
    rangelength( value, element, param ) {
        let length = this.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
    }
    min( value, element, param ) {
        return this.optional( element ) || value >= param;
    }
    max( value, element, param ) {
        return this.optional( element ) || value <= param;
    }
    range( value, element, param ) {
        return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
    }

    //待改进
    optional(element) {
        let val = this.getValue(element );
        return !this.required.call( this, val, element );
    }
    //高亮
    highlight(element){
        if(!this.checkable(element)){
            this.addClass(element,this.errorClass);

            if(this.props.shake){

                this.addClass(element,'shake animated');
                setTimeout(function(){
                    this.removeClass(element,'shake animated');
                }.bind(this),1000 );
            }

        }

    }
    //取消高亮
    unhighlight(element){
        this.removeClass(element,this.errorClass);
    }

    checkable( element ) {
        return ( /radio|checkbox/i ).test( element.type );
    }

    getLength( value, element ) {
        switch ( element.nodeName.toLowerCase() ) {
            case "select":
                return document.querySelectorAll( "option:selected", element ).length;
            case "input":
                if ( this.checkable( element ) ) {
                    return document.querySelectorAll("[name='" + element.name + "']:checked" ).length;
                }
        }
        return value.length;
    }

    formatString(str, options){

        if(!options){
            return str;
        }

        return str.replace(/\{(.+?)\}/ig, function(match, key){
            let value = typeof(options) != 'object'?options: options[key];
            return typeof value == 'undefined' ? match : value;
        });
    }

    getValue(element){
        let val,
            type = element.type.toLowerCase();

        if ( type === "radio" || type === "checkbox" ) {
            let el = document.querySelectorAll( `input[name="${element.name}"]:checked` );
            return el && el.length>0? el[0].value:'';
        } else if ( type === "number" && typeof element.validity !== "undefined" ) {
            return element.validity.badInput ? false : element.value;
        }

        val = element.value;
        if ( typeof val === "string" ) {
            return val.replace(/\r/g, "" );
        }
        return val;
    }

    setValue(element,val){

    }
    //循环验证单个input上的规则
    check(element){

        //从每一项中提取验证规则
        let {message} = this.props;
        //let options = extend(true,{},this.options );
        let val = this.getValue(element),
        //rule = null,
            msg = '',
            text = null,
            rules = this.props.rules[element.name];//element.getAttribute('data-rules') ;


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
        this.vals[this.getField(element)]=val;
        for(let rule in rules){

            text = rules[rule];
            //text =typeof(text)!=='string' ? text : {text:text};
            if(typeof(text) == 'boolean'){
                text = {};
            }
            if(!text.text){
                text.text = message[rule ];
            }

            let validate = text.rule && text.rule instanceof  Function ? text.rule:this[rule];

            if(!validate.call(this,val,element,text.params ) ){
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
        return this.formatString(msg,(text &&text.params) || '');
    }



    getField(element){
        let attr = element.getAttribute(this.valueLink);
        return attr ? attr : element.name;
    }

    validateHandler(e){
        let {getValueCallback} = this.props,target = e.target;

        clearTimeout(this.vaTimeout);
        this.vaTimeout = setTimeout(function(){
            let b = this.validate(target);
            b && getValueCallback &&(getValueCallback(this.getField(target),this.getValue(target),this.vals ) );

        }.bind(this),400 );
    }

    submit(e){
        clearTimeout(this.__blurTimeobj);
        let elements = this.elements,
            element = null,
            isSubmit = true;
        if(!elements || elements.length<=0 ){
            return false;
        }
        for(let item in elements){
            element = elements[item];//React.findDOMNode(this.props.refs[item] );
            if(element && element.nodeType==1){
                if(!this.validate(element  ) ){
                    setTimeout(function(){
                        element.focus();
                    });
                    isSubmit = false;
                    break;
                }
            }
        }

        e.preventDefault();
        e.stopPropagation();
        if(isSubmit && this.props.validateCallback(this.vals) ){
            return this.props.submitCallback &&(this.props.submitCallback(this.vals,e) );
        }
        return false;
    }

    //隐藏错误提示
    hide(){

    }
    parents (ele,str) {
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

    getTip(){
        return this.form && this.form.querySelector(`.${this.getClassName("validate-tips")}`);
    }
    //设置错误提示框的位置
    setTipsOffset(element){
        let node = null,
            name = element.name,
            d = this.props.direction,
            tb=d==="bottom" || d==="top",
            tip =this.getTip(),
            tag = this.props.componentTag,
            w = element.offsetLeft,
            t = element.offsetTop,
            h = element.offsetHeight;

        while(element && (element.nodeType!==1 || !this.hasClass(element, this.getClassName('validate'))) ){
            element = element.parentNode;
        }

        if(element){
            element = element.querySelectorAll(`[name="${name}"]`);

            element = element[tb ? 0:element.length-1];

            w = element.offsetLeft;
            t = element.offsetTop;
            node = element.offsetParent;

            while(node && !this.hasClass(node,this.getClassName('validate'))) {
                t+=node.offsetTop;
                w+=node.offsetLeft;
                node = node.offsetParent;

            }
            //w = tip.offsetWidth;
            this.highlight(element);

            tip.style.display="block";

            setTimeout(function(){
                if(tb){

                    tip.style.cssText=`left:${w}px;top:${(d==="bottom"?t+element.offsetHeight:t-tip.offsetHeight)}px;width:${element.offsetWidth}px`;
                }else{
                    //height:${h}px;line-height:${h}px;
                    tip.style.cssText = `left:${w+(d==="right"?element.offsetWidth+10:0)}px;top:${t+(element.offsetHeight/2-(tip.offsetHeight/2) )}px;`;
                }
            }.bind(this));
        }else{
            //tip.style.display='none';
        }

    }

    getForm(){
        return ReactDom.findDOMNode(this.refs[this.props.id?this.props.id:this.formName]);
    }
    getElements(){
        return this.form.querySelectorAll(`[data-validate]`);
    }

    setDomEvent(){
        let elements = this.getElements(),_this = this,{trigger,initCallback,submitElement} = this.props;
        for(let i=0,len=elements.length;i<len;i++){
            trigger.split(' ').forEach((event)=>{
                elements[i].removeEventListener(event,_this._fun,false);
                elements[i].addEventListener(event,_this._fun,false);
            });
        }

        this.elements = elements;
    }

    componentDidMount(){

        this._fun = function(e){
            this.validateHandler(e);
        }.bind(this);

        this.form = this.getForm();

        let elements = this.getElements(),_this = this,{trigger,initCallback,submitElement} = this.props;

        /*for(let i=0,len=elements.length;i<len;i++){
         trigger.split(' ').forEach((event)=>{

         elements[i].addEventListener(event,_this.validateHandler.bind(_this),false);
         });
         }*/

        this.setDomEvent();

        initCallback.call(this,this.submit.bind(this));

        if(submitElement){
            document.querySelector(submitElement).addEventListener('click',this.submit.bind(this),false);
        }
        //let tip = this.getTip();

        this.elements = elements;
        this.init = false;

    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.update!=this.update){
            this.setDomEvent();

            this.update = this.props.update;
            this.isUpdate = true;
            this.setState({
                show:''
            });
        }
    }


    removeFadeout(){
        clearTimeout(this.fadeoutTimeObj);
        this.fadeoutTimeObj=setTimeout(function(){
            if(!this.state.show &&!this.init && this.state.fadeShow!='none'){
                this.removeClass(this.getTip(),'fadeout');

            }
        }.bind(this),400 );
    }

}