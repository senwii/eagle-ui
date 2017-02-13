/**
 * Created by mac on 15/9/7.
 */
import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 标签组件<br />
 * 提供基本的标签样式，通常结合LabelGroup组件一起使用
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/label">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Label.js">查看源码</a></div>
 * @class Label
 * @module ui
 * @constructor
 * @demo star.js {UI展示}
 * @demo label.js {源码}
 * @show true
 * */
export default class Label extends Component{
    static propTypes = {
        /**
         * label的链接地址（不设置的话默认不进行跳转）
         * @property url
         * @type String
         * @default 'javascript:void(0);'
         * */
        url:PropTypes.string,
        activeCallback:PropTypes.func,
        /**
         * 标签尺寸,分别为xs、sm、lg
         * @property egSize
         * @type String
         * @default sm
         * */
        egSize:PropTypes.string,
        /**
         * 是否禁用Label
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled:PropTypes.bool,
        /**
         * 标签是否处于选中状态
         * @property active
         * @type Boolean
         * @default false
         * */
        active:PropTypes.bool,
        /**
         * 标签颜色样式，可以为['success','error','warning','danger','']中任何一个
         * @property egStyle
         * @type Boolean
         * @default ''
         * */
        egStyle:PropTypes.string
    };
    static defaultProps = {
        classPrefix:'label',
        url:'javascript:void(0);',
        componentTag:'a'
    };
    constructor(props, context) {
        super(props, context);
    }

    /**
     * 点击回调函数
     * */
    mouseDownHandler(e){
        let target = e.target;

        this.execMethod('active',target.getAttribute('value'),target.innerHTML,target,!this.props.active);
    }

    render(){
        const {url} = this.props;
        return (
            <this.componentTag href={url} {...this.props} className={
                    classnames(
                        this.getProperty(),
                        this.props.className
                    )
                }
                onMouseDown={::this.mouseDownHandler}
                >
                {this.props.children}
            </this.componentTag>
        );
    }
}