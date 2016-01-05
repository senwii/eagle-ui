import React, {PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * input表单组件<br />
 * 通过type可以生成radio、checkbox、input等元素标签
 * @class Input
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input.js{js}
 * @show true
 * */
export default class Input extends Component{

    static propTypes = {
        //onClickCallback:PrgiopTypes.fun
    };

    static defaultProps = {
        /**
         * 生成不同的元素标签
         * @property type
         * @type String
         * */
        type:'text',
        /**
         * 默认输入提示
         * @property autoComplete
         * @type String
         * */
        autoComplete:'off',
        /**
         * type为radio或checkbox时，需要显示的标签信息
         * @property label
         * @type String
         * */
        label:'请选择',
        classPrefix:'input'
    };

    constructor(props, context) {
        super(props, context);

        this.className='input-';

        this.state={
            isActive:this.props.checked
        };
    }

    setCheck(){
        this.setState({
            isActive:!this.state.isActive
        });
    }

    checkbox(){
        let checked = typeof(this.props.checked)!='undefined' ? this.props.checked : this.state.isActive;
        return (
            <div ref="" className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )} onClick={::this.setCheck}>
                <input type={this.props.type} {...this.props} onChange={::this.onchange}   />
                <div className="box">
                    <div className={classnames('checkbox',{
                        [this.getClassName('icon-tick',false)]:checked
                    })} >
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }
    //暂时用在图片片选框
    checkboxs(){
        let checked = typeof(this.props.checked)!='undefined' ? this.props.checked : this.state.isActive;
        return (
            <div ref="" className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )} onClick={::this.setCheck}>
                <input  {...this.props} type='checkbox' onChange={::this.onchange}   />
                <div className="box">
                    <div className={classnames('checkbox',{
                        [this.getClassName('icon-tick',false)]:checked
                    })} >
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }

    onchange(e){
        if(this.props.onCheck){
            this.props.onCheck(e.target);
        }
    }

    radio(){
        return (
            <div className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:this.props.checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )}>
                <input type={this.props.type} {...this.props} onChange={::this.onchange}  />
                <div className="box">
                    <div className="checkbox">
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }

    text(){
        return (
            <div className={classnames(
                {
                    [this.getClassName('icon-container')]:!!this.props.icon
                }
            )}>
                <input {...this.props} className={classnames(this.getDefaultClass() )} />
                <i className={'icon-input-right icon-'+this.props.icon} ></i>
            </div>

        );
    }

    render(){

        const {placeholder,disabled,type,active,label} = this.props;
        //return this[type]();

        const classMap = {
            checkbox:{
                active:'icon-checkbox-checked',
                default:'icon-checkbox-unchecked'
            },
            radio:{
                active:'icon-radio-checked2',
                default:'icon-circle'
            }
        };

        let iconType = classMap[type] ||{};

        return (
            <div className={classnames(this.getProperty(),type,active,disabled)}>
                <i className={classnames(
                    "input-icon",
                    iconType['default'],
                    iconType[active]
                )}></i>
                <label>{label}</label>
                <input  type="checkbox" type={type} {...this.otherProps} />
            </div>
        );
    }
}