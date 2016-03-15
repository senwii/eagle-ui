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
                    this.props.className
                )} style={renderStyle}>
                {this.props.children}
            </div>
        );

    }
}