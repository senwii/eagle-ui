/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Input from './Input.js';

import Component from './utils/Component.js';

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
 * CheckboxGroup需与Input组件配合使用<br/>
 * 它的作用是将type=checkbox的Input组件在UI上展示在一起
 * @class CheckboxGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo docDemo/checkboxGroup.js {源码}
 * @show true
 * */
export default class CheckboxGroup extends Component{
    static propTypes = {

    };
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
    }
    render(){
        return (
            <div style={this.props.style}
                 className={classnames(this.getClassName('input-group'),this.props.className || '')}>
                <div className={this.getClassName('input-group-container')}>
                {this.props.children}
                </div>
            </div>
        );
    }
}