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
 * Panel定义整个容器
 * @class Panel
 * @module panel(面板)
 * @extends Component
 * @constructor
 * @demo docDemo/empty.html {UI展示}
 * @demo docDemo/panel.js {源码}
 * @show true
 * */
export default class Panel extends Component{

    static propTypes = {
        /**
         * 标题
         * @property heading
         * @type String
         * @default empty
         * */
        heading:PropTypes.string
    };

    static defaultProps = {

        heading:'',
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