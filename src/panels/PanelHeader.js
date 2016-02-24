import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelHeader组件
 * @class PanelHeader
 * @module panel
 * @constructor
 * @extends Component
 * @since 0.1.0
 * @demo docDemo/module/panel.html {UI展示}
 * @demo docDemo/panel.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class PanelHeader extends Component{

    static propTypes = {
    };

    static defaultProps = {
        classPrefix:'panel'
    };



    /**
     * @method render
     * @return {ReactElement}
     * */
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