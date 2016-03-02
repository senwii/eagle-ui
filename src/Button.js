/**
 * Created by mac on 15/9/7.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 *  - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择<br/>
 *  - 也可以自定义行内样式和className名字定义UI展示<br/>
 *  - 支持disabled, active, enable等属性定义<br/>
 *  - 可以通过egSize 设置大小，可选xs、sm、lg。<br/>
 *  - 通过egStyle选择按钮颜色，可选error、warning、danger、link、gray、white、success
 *  主要属性和接口：
 * <ul>
 *     <li>egSize:按钮颜色<br>
 *         如：<code>
 *            Button radius egSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>egStyle:按钮的大小。分别为xs、sm、lg，默认sm<br>
 *         如：<code>
 *            Button radius egSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>disabled:按钮禁用状态，默认false<br>
 *         如：<code>
 *            Button radius disabled
 *         </code>
 *     </li>
 *     <li>enable:按钮的可用状态，默认true<br>
 *         如：<code>
 *            Button radius enable
 *         </code>
 *     </li>
 *     <li>active:按钮选中状态，默认false<br>
 *         如：<code>
 *            Button radius active
 *         </code>
 *     </li>
 *      <li>radius:按钮圆角状态<br>
 *         如：<code>
 *            Button radius
 *         </code>
 *     </li>
 *     <li>round:按钮椭圆角<br>
 *         如：<code>
 *            Button round
 *         </code>
 *     </li>
 *     <li>block:是否块级显示，默认false<br>
 *         如：<code>
 *            Button block
 *         </code>
 *     </li>
 * </ul>
 * @class Button
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo empty.html {UI展示}
 * @demo src/modules/button.js {源码}
 * @show true
 * */
export default class Button extends Component{
    //static mixins = [ClassNameMixin];
    static propTypes = {
        /**
         * 按钮尺寸,分别为xs、sm、lg
         * @property egSize
         * @type String
         * @default sm
         * */
        egSize:PropTypes.string,
        /**
         * 禁用
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled:PropTypes.bool,
        /**
         * 启用
         * @property enable
         * @type Boolean
         * @default true
         * */
        enable:PropTypes.bool,
        //success:PropTypes.bool,
        /**
         * 选中
         * @property active
         * @type Boolean
         * @default false
         * */
        active:PropTypes.bool,
        /**
         * 圆角
         * @property radius
         * @type Boolean
         * @default false
         * */
        radius:PropTypes.bool,
        /**
         * 椭圆角
         * @property round
         * @type Boolean
         * @default false
         * */
        round:PropTypes.bool,
        //error:PropTypes.bool,
        //warning:PropTypes.bool,
        //danger:PropTypes.bool,
        /**
         * 颜色[error、warning、danger、link、gray、white、success、'']
         * @property egStyle
         * @type Boolean
         * @default ''
         * */
        egStyle:PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
         * */
        componentTag:PropTypes.string,
        /**
         * 块级显示
         * @property block
         * @type Boolean
         * @default false
         * */
        block:PropTypes.bool,
        egHref:PropTypes.string
    };
    static defaultProps = {
        egSize:'default',
        classPrefix:'btn',
        componentTag:'button'
    };
    //lg
    //sm
    //xs this.getClassName('demo'); eg-demo
    constructor(props, context) {
        super(props, context);
        this.setProperty('hollow','hollow');
    }

    render(){
        //const {} = this.props;
        //什么颜色，大小  类型
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    this.getProperty(),
                    this.props.className
                )
                }>{this.props.children}</Component>
        );
    }
}