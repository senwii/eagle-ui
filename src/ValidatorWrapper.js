import React, { Component ,PropTypes} from 'react';
import ValidatorBase from './ValidatorBase.js';
import classnames from 'classnames';

/**
 * 表单验证组件对所有带有data-validate属性的子元素input输入框进行验证。<br/>
 * <strong>rules配置对象的key值必须和子元素Input的name值保持一致</strong><br />
 * <strong>区别于ValidatorPanel：ValidatorWrapper用于包裹单个输入组件，不像ValidatorPanel包裹一系列输入组件。
 * ValidatorWrapper的错误信息会出现在输入框下方，直到验证通过后错误信息才会消失。
 * </strong>
 * <br/>
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
 *        }
 *     会验证name为checkbox的输入控件。
 *     自定义的规则作为key、value配置，validator会依据rule方法返回的true或者false来决定是否提示text中的文案
 * </pre>
 * @class ValidatorWrapper
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo #/validate|validate.js
 * @show true
 * */

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

/**
 * 规则验证
 * @property rules
 * @type Object
 * */
export default class ValidatorWrapper extends ValidatorBase{
    constructor(props,context){
        super(props,context);
    }

    //验证
    validate(element){
        let message = this.check(element) || '';
        if(message !== '' && element.style.display!='none' && !this.isUpdate){
            //设置错误消息
            this.setState({
                message:message,
                show:message
            });
            return false;
        }
        this.setState({
            show:null,
            message:''
        });
        this.unhighlight(element);
        this.isUpdate = false;
        //this.hide();
        return true;
    }

    render() {

        let {componentTag:Component,direction,id} = this.props;

        this.removeFadeout();
        return (
            <div {...this.props} ref={id?id:this.formName} className={this.getClassName('validate')}>
                {this.props.children}
                <div ref="ref-validateTips" className={classnames(
                            this.getClassName(`validate-tips`),'animated',
                            `${direction==="bottom"||direction==="top"?'bottom':''}`,
                            `${this.init ? "":this.state.show ? "fadein" :"fadeout"}`,
                            'relative'
                        )}>
                    <i></i>
                    {this.state.message}
                </div>
            </div>
        );
    }
}