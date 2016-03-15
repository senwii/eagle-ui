import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 定义栅格中的一列，配合Col组件使用
 * <h5>主要的UI属性接口包括:</h5>
 * <ul>
 *     <li>sm:定义宽度占父元素(100%)的sm/12比例</li>
 * </ul><br>
 * 使用方式:
 * <pre><code>&#60;Col sm={5} &#62;&#60;/Col&#62;</code>
 * </pre>
 * @class Col
 * @module grid(布局)
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo Demo1.js {源码}
 * @show true
 * */
export default class Col extends Component{
    static propTypes = {
        egSize:PropTypes.string,
        /**
         * 是否是最后一列
         * @property end
         * @type Boolean
         * @default false
         * */
        end:PropTypes.bool,
        /**
         * 总宽度为100%(12份)，egSize定义宽度占比父元素(100%)的egSize/12
         * @property sm
         * @type Number
         * @default 12(一整行)
         * */
        sm:PropTypes.number
    };

    static defaultProps = {
        classPrefix:'col',
        componentTag:'div',
        egSize:'md',
        sm:12
    };

    initCallback(){
        let {sm} = this.props;
        //this.setProperty('sm',this.props.egSize+'-'+sm );
        this.setProperty('end','end' );
        this.setProperty('layer','layer');
        //
    }

    render(){
        let {sm,egSize} = this.props;
        return (
            <this.componentTag {...this.props} className={classnames(
                this.getProperty(),
                this.getClassName(`${egSize}-${sm}`),
                this.props.className
            )}  style={this.getStyles(this.props.style)}>
                {this.props.children}
            </this.componentTag>
        );
    }
}