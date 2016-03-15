import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelHeader定义头部区域
 * @class PanelHeader
 * @module panel(面板)
 * @constructor
 * @extends Component
 * @demo star.js {UI展示}
 * @demo panel.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class PanelHeader extends Component{

    static propTypes = {
        /**
         * 是否要在标题左侧添加高亮flag
         * @property leftFlag
         * @type Boolean
         * @default false
         * */
        leftFlag:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'panel'
    };
    render(){
        let renderStyle=this.props.style?this.props.style:{};
        return (
            <div className={
                classnames(
                    this.getClassName('header'),
                    {
                        [this.getClassName('header-flag')]:this.props.leftFlag || false
                    },
                    this.props.className
                )} style={renderStyle}>
                {this.props.children}
            </div>
        );

    }
}