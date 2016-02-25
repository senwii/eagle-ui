import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelFooter定义底部区域
 * @class PanelFooter
 * @constructor
 * @module panel(面板)
 * @extends Component
 * @demo docDemo/module/panel.html {UI展示}
 * @demo docDemo/panel.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class PanelFooter extends Component{


    static propTypes = {
        /**
         * 是否加padding
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
                    this.getClassName('footer')
                    ,this.props.padding?this.getClassName('padding'):''
                )}>
                {this.props.children}
            </div>
        );

    }
}