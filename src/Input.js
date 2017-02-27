import React, {PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Icon from './utils/Icons';
/**
 * <h5>form表单模块集成了常见的表单元素形式:</h5>
 * <strong><a href='../classes/CheckboxGroup.html'>checkbox多选框</a></strong><br>
 * <strong><a href='../classes/RadioGroup.html'>radio单选框</a></strong><br>
 * <strong><a href='../classes/Input.html'>input输入框</a></strong><br>
 * <strong><a href='../classes/Select.html'>select下拉框</a></strong><br>
 * <strong><a href='../classes/ButtonGroup.html'>button按钮组</a></strong>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 *
 * @module form(表单)
 * @main form(表单)
 * @static
 *
 */

/**
 * input表单组件<br />
 * 设置type属性可以生成radio、checkbox、input等元素标签，并包裹初始化样式.<br/>
 * 提供自动补全功能，autoComplete为true即可。
 *
 * 主要属性和接口：
 * <ul>
 *     <li>type:input的不同类型，可选'text,radio..'等，默认text<br>
 *         如：<code>
 *            Input  type="radio"
 *         </code>
 *     </li>
 *     <li>autoComplete:是否自动补全，默认false<br>
 *         如：<code>
 *            Button radius egSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>label:type为radio,checkbox时，需要显示的标签信息。默认''<br>
 *         如：<code>
 *            Input  type="radio"  label="大白菜"
 *         </code>
 *     </li>
 *     <li>onChange:状态改变时的回调方法，默认null<br>
 *         如：<code>
 *            Input  type="checkbox" checked onChange={::this.change} value="bbb"
 *         </code>
 *     </li>
 * </ul>
 * @class Input
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo #/input|input.js
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
        /**
         * 需要显示的icon
         * @property icon
         * @type String
         * */
        /**
         * 给icon设置样式
         * @property iconStyle
         * @type Object
         * */
        classPrefix:'input',
        /**
         * icon,input类型只能是text这种的
         * @property icon
         * @type String
         * */
        icon:'',
        /**
         * icon展示的方向，{left,right}
         * @property iconDirection
         * @type String
         * */
        iconDirection:'',
        /**
         * icon点击事件
         * @property iconClickCallback
         * @type Function
         * */
        iconClickCallback:()=>{}
    };

    constructor(props, context) {
        super(props, context);

        this.className='input-';

        this.state={
            _active:this.props.checked
        };
    }

    getIcon(type,checked,icon){
        const classMap = {
            radio:{
                active:'radio-checked',
                default:'radio-unchecked'
            },
            checkbox:{
                active:'checkbox-checked-fill',
                default:'checkbox-unchecked'
            }
        };

        let iconType = classMap[type];

        let html = null,
            iconStyle= this.props.iconStyle||{},
            name ='';

        if(iconType){
            name = iconType[checked?'active':'default'];
        }else{
            name = icon;
        }


        if(name){
            return (
                <Icon onClick={this.props.iconClickCallback}  className={classnames(
                    "input-icon"
                )} name={name} style={iconStyle} />
            );
        }

        return html;
    }

    changeHander(e){
        let target = e.target,
            type = target.type.toLowerCase();

        if(this.isRadio(type) ){
            this.execMethod('active',target);

        }else if(this.isCheckbox(type) ){

            this.setState({
                _active:!this.state._active
            });
            this.execMethod('getValue',target.value ||'',target);
        }

        if(this.props.onChange){
            this.props.onChange(e);
        }
    }

    isCheckbox(type){
        return /checkbox/.test(type ||this.props.type);
    }

    isRadio(type){
        return /radio/.test(type || this.props.type);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            _active: nextProps.checked
        });
    }

    render(){
        const {disabled,type,label,icon} = this.props;

        let {iconDirection} = this.props;

        let {checked} = this.props;

        if(this.isCheckbox()){
            checked = this.state._active;
        }

        if(icon){
            if(iconDirection==''){
                iconDirection = 'right';
            }

            iconDirection = this.getClassName('icon-'+iconDirection);
        }
        return (
            <div className={classnames(this.getProperty(),type,{
                'active':checked,
                'disabled':disabled,
                'show-icon':!!icon,
                [`${iconDirection}`]:!!iconDirection
            })}>
                {this.getIcon(type,checked,icon)}
                <label>{label}</label>
                <input type={type} {...this.otherProps} onChange={disabled?()=>{}: this.changeHander.bind(this)} />
            </div>
        );
    }
}