/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * 导航标签组件，用户可以在不同的tab之间进行切换<br/>
 * 需要和Tabset组件配合使用,Tabset相当于是Tab的容器
 * @class Tab
 * @module ui
 * @extends Component
 * @constructor
 * @demo empty.html {UI展示}
 * @demo src/modules/tab.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class Tab extends Component{
    static propTypes = {
        /**
         * tab导航标签的title
         * @property heading
         * @type String
         * @default 'tab'
         * */
        heading:PropTypes.string
    };
    static defaultProps = {
        classPrefix:'tab',
        heading:'tab'
    };
    handlerClick(){
        this.props.clickCallback(this.props.index);
    };
    handleMouseEnter(e){
        this.props.mouseEnterCallback(e.target.offsetLeft,e.target.offsetWidth);
    };
    render(){

        return (
            <a className={
                classnames(
                    this.getClassName('item'),
                    this.getClassNames(this.props)
                )
                }
                {...this.props}
                onClick={::this.handlerClick}
                onMouseEnter={::this.handleMouseEnter}>
                {this.props.heading}
            </a>
        );
    }
}