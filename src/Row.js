import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';

/**
 * 定义栅格中的一行，配合Col组件使用
 * @class Row
 * @module grid(布局)
 * @extends Component
 * @constructor
 * @demo #/Layout|layout.js
 * */
export default class Row extends Component{
    static propTypes={
        classPrefix:PropTypes.string,
        bottom:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'row'
    };

    render(){

        return (
            <div {...this.props} className={classnames(
                this.getProperty(),
                'clearfix',
                this.props.className
            )} style={this.getStyles(this.props.style)}>
                {this.props.children}
            </div>
        );
    }
}