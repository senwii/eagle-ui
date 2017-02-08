/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Input from './Input.js';

import Component from './utils/Component';

/**
 * RadioGroup需与Input组件配合使用<br/>
 * 它的作用是将type=radio的Input组件在UI上展示在一起
 * 主要属性接口：
 * <ul>
 *     <li>name:radio组的name值<br>
 *         如：<code>
 *             name='fruits'
 *         </code>
 *     </li>
 *     <li>defaultChecked:默认选中值<br>
 *         如：<code>defaultChecked="石榴"</code>
 *     </li>
 *     <li>getValueCallback:获取选中值的回调函数<br>
 *         如：<code>getValueCallback={function(val){alert(val)}}</code>
 *     </li>
 *
 * </ul>
 * @class RadioGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @example
 *      function getValueCallback(val){
 *          alert(val);
 *          console.dir(val);
 *      }
 *      <RadioGroup defaultChecked="鸡蛋" name="radio-foot" getValueCallback={getValueCallback}>
 *          <Input  type="radio"  label="大白菜" value="大白菜" />
 *          <Input  type="radio"  label="鸡蛋" value="鸡蛋" disabled={true}  />
 *          <Input  type="radio"  label="猪肉" value="猪肉" />
 *          <Input  type="radio"  label="牛肉" value="牛肉" />
 *          <Input  type="radio"  label="鱼肉" value="鱼肉" disabled={true} />
 *      </RadioGroup>
 *
 * <a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/input">demo展示</a>
 * */
export default class RadioGroup extends Component{

    static propTypes = {
        /**
         * radio name
         * @property name
         * @type String
         * @default ''
         * */
        name:PropTypes.string,
        /**
         * 默认选中项
         * @property defaultChecked
         * @type String
         * @default ''
         * */
        defaultChecked:PropTypes.string,
        /**
         * 获取选中的值
         * @event getValueCallback
         * @param null
         * @default void
         * */
        getValueCallback:PropTypes.func
    };

    constructor(props, context) {
        super(props, context);

        this.state={
            checked:this.props.defaultChecked
        };
    }

    _onChange(target){

        if(this.state.checked!=target.value ){

            this.setState({
                checked:target.value
            });
            this.execMethod('getValue',target.value,target);
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.defaultChecked
        });
    }

    render(){

        let options = React.Children.map(this.props.children,(option)=>{
            let {
                name,
                value,
                label,
                ...other,
                } = option.props;

            return <Input
                {...other}
                ref={option.props.value}
                name={this.props.name}
                key={option.props.value}
                value={option.props.value}
                label={option.props.label}
                activeCallback={::this._onChange}
                checked={option.props.value === this.state.checked}/>;

        },this);

        return (
            <div style={this.props.style}
                 className={classnames(this.getClassName('input-group'),this.props.className || '')}>
                <div className={this.getClassName('input-group-container')}>
                {options}
                </div>
            </div>
        );
    }
}