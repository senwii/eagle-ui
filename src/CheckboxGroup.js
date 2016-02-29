/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Input from './Input.js';

import Component from './utils/Component.js';

/**
 * CheckboxGroup需与Input组件配合使用<br/>
 * 它的作用是将type=checkbox的Input组件在UI上展示在一起
 * @class CheckboxGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo docDemo/empty.html {UI展示}
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