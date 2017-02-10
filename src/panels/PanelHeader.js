import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelHeader定义头部区域
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/panel">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/panels/PanelHeader.js">查看源码</a></div>
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
         * 设置leftFlag为true时，header的背景色会变为白色（默认灰色），并在header左边添加高亮flag
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