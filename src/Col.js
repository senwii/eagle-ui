import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 定义列
 * @class Col
 * @module grid(布局)
 * @extends Component
 * @constructor
 * @demo empty.html {UI展示}
 * @demo src/modules/Demo1.js {源码}
 * @show true
 * */
export default class Col extends Component{
    static propTypes = {
        /**
         * 总宽度为100%(12份)，egSize定义宽度占比父元素(100%)的egSize/12
         * @property egSize
         * @type Integer
         * */
        egSize:PropTypes.string,
        /**
         * 是否是最后一列
         * @property end
         * @type Boolean
         * @default false
         * */
        end:PropTypes.bool
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