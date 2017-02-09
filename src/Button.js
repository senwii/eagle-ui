/**
 * Created by mac on 15/9/7.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 *  - 按钮组件提供内置样式<br/>
 *  - 也可以自定义行内样式和className<br/>
 *  - 支持disabled, active等属性定义<br/>
 *  - 可以通过egSize 设置大小，可选xs、sm、lg。<br/>
 *  - 通过egStyle选择按钮颜色，可选'success','error','warning','danger','default','link','white'
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/button">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Button.js">查看源码</a></div>
 * @class Button
 * @module form(表单)
 * @extends Component
 * @constructor
 * @example
 *      import {Button} from 'eagle-ui';
 *      ...
 *      //设置背景颜色
 *      <Button   egStyle="default">按钮2</Button>
 *      <Button   egStyle="link">按钮3</Button>
 *      <Button   egStyle="white">按钮4</Button>
 *
 *      //设置hollow属性将颜色应用于按钮边框，而不是背景色
 *      <Button hollow  egStyle="warning">按钮2</Button>
 *      <Button hollow  egStyle="danger">按钮3</Button>
 *      <Button hollow  egStyle="success">按钮4</Button>
 *
 *      //设置大小
 *      <Button radius egSize="xs" egStyle="">小按钮</Button>
 *      <Button radius egSize="sm" egStyle="">中按钮</Button>
 *      <Button radius egSize="lg" egStyle="">大按钮</Button>
 *
 *      //设置onClick事件
 *      <Button onClick={function(){alert('clicked')}} >点击触发回调</Button>
 *
 *      //禁用按钮
 *      <Button disabled>禁用按钮</Button>
 * */
export default class Button extends Component{
    static propTypes = {
        /**
         * 按钮尺寸,分别为xs、sm、lg
         * @property egSize
         * @type String
         * @default sm
         * */
        egSize:PropTypes.string,
        /**
         * 是否禁用按钮
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled:PropTypes.bool,
        //success:PropTypes.bool,
        /**
         * 按钮是否处于选中状态
         * @property active
         * @type Boolean
         * @default false
         * */
        active:PropTypes.bool,
        /**
         * 按钮颜色样式，可以为['success','error','warning','danger','default','link','white']中任何一个
         * @property egStyle
         * @type Boolean
         * @default ''
         * */
        egStyle:PropTypes.string,
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default 'button'
         * */
        componentTag:PropTypes.string,
        /**
         * 是否为块级显示
         * @property block
         * @type Boolean
         * @default false
         * */
        block:PropTypes.bool,
        egHref:PropTypes.string
        /**
         * 是否只将主题颜色应用于边框，而不是应用于背景色
         * @property hollow
         * @type Boolean
         * @default false
         * */
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