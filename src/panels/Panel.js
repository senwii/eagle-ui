import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import PanelHeader from './PanelHeader';
import Component from '../utils/Component';
/**
 * <h5>eagle-ui主要面板布局组件</h5>
 * <strong><a href='../classes/Panel.html'>Panel定义整个容器</a></strong><br>
 * <strong><a href='../classes/PanelContent.html'>PanelContent定义内容区域</a></strong><br>
 * <strong><a href='../classes/PanelFooter.html'>PanelFooter定义底部区域</a></strong><br>
 * <strong><a href='../classes/PanelHeader.html'>PanelHeader定义头部区域</a></strong><br>
 * @module panel(面板)
 * @main panel(面板)
 * @static
 */

/**
 * Panel定义整个容器<br />
 * 和PanelHeader,PanelContent,PanelFooter配合使用<br />
 * Panel是上面三个标签的父容器，<br />
 * 可以依据不同情况决定是否添加PanelHeader和PanelFooter
 * @class Panel
 * @module panel(面板)
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo panel.js {源码}
 * @show true
 * */
export default class Panel extends Component{

    static propTypes = {
        /**
         * panel的样式风格，默认为default，还可以设置为normal
         * @property egType
         * @type String
         * @default 'default'
         * */
        egType:PropTypes.string,
        /**
         * 标
         * @property heading
         * @type String
         * @default empty
         * */
        heading:PropTypes.string
    };

    static defaultProps = {

        egType:'default',
        classPrefix:'panel'
    };

    renderHeading(){
        const {heading} = this.props;

        if(heading){
            return (
                <PanelHeader className={this.getClassName('panel-header-flag',false)}><h4>{heading}</h4></PanelHeader>
            );
        }

        return null;
    }

    render(){
        return (
            <div {...this.props} className={
                classnames(
                    this.getProperty(),this.props.className
                )}  style={this.getStyles(this.props.style)}>
                {this.renderHeading()}
                {this.props.children}
            </div>
        );

    }
}