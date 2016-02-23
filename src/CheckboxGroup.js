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
 * @module form
 * @main form
 * @static
 *
 */

/**
 * 多选按钮组组件
 * @class CheckboxGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @example
 *          <html>
 *              <div></div>
 *              <div id='root'></div>
 *          </html>
 *          <script>
 *              var script=document.createElement('script');
 *              script.async=true;
 *              script.src='http://uedfamily.com/documents/eagle-ui/examples/js/examples.js';
 *              setTimeout(function(){document.body.appendChild(script)},0);
 *              script.onload = function(e){location.hash='input'};
 *         </script>
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