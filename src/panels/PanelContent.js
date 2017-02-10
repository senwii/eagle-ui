import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelContent定义内容区域
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/panel">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/panels/PanelContent.js">查看源码</a></div>
 * @class PanelContent
 * @constructor
 * @module panel(面板)
 * @extends Component
 * @demo star.js {UI展示}
 * @demo panel.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class PanelContent extends Component{

    static propTypes = {
        /**
         * 是否为panelContent添加padding，默认true
         * @property padding
         * @type bool
         * @default true
         * */
        padding:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'panel',
        padding:true
    };
    render(){
        return (
            <div className={
                classnames(
                    this.getClassName('content')
                    ,this.props.padding?this.getClassName('padding'):'',
                    this.props.className
                )}>
                {this.props.children}
            </div>
        );

    }
}