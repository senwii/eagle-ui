/**
 * Created by panqianjin on 15/11/3.
 */
import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './utils/Component';


/**
 * <h5>eagle-ui部分UI组件</h5>
 * <strong><a href='../classes/Crumb.html'>Crumb封装层级链接(面包屑)</a></strong><br>
 * <strong><a href='../classes/Slider.html'>Slider组件展示幻灯片形式的照片展示</a></strong><br>
 * <strong><a href='../classes/Label.html'>Label定义标签展示的形式</a></strong><br>
 * <strong><a href='../classes/Search.html'>Search定义不同的搜索框</a></strong><br>
 * <strong><a href='../classes/Star.html'>Star以星星的形式定义不同的星级展示</a></strong><br>
 * <strong><a href='../classes/Calendar.html'>Calendar为日期选择组件</a></strong><br>
 * <strong><a href='../classes/Dialog.html'>Dialog模拟了浏览器弹出的alert、confirm等交互形式</a></strong><br>
 * <strong><a href='../classes/Paging.html'>Paging展示了常见的分页形式标签，封装了点击功能</a></strong><br>
 * <strong><a href='../classes/Suggestion.html'>Suggestion在Search的基础上，动态联想匹配项</a></strong><br>
 * <strong><a href='../classes/Tab.html'>Tab模拟了常见的导航条样式</a></strong><br>
 * <strong><a href='../classes/Toast.html'>Toast可以模拟Ajax请求成功或者失败后，通知用户的UI界面展示</a></strong><br>
 * <strong><a href='../classes/Tooltip.html'>Tooltip在Label的基础上，增加了鼠标hover或者点击的提示功能</a></strong>
 * @module ui
 * @main ui
 * @static
 */


/**
 * 面包屑组件
 * @class Crumb
 * @module ui
 * @extends Component
 * @constructor
 * @demo empty.html {UI展示}
 * @demo src/modules/crumb.js {源码}
 * @show true
 * */
export default class Crumb extends Component {
    static propTypes = {
        /**
         * 类名样式前缀
         * @property classPrefix
         * @type sting
         * @default crumb
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default div
         * */
        componentTag: PropTypes.string
    }
    static defaultProps = {
        classPrefix: 'crumb',
        componentTag: 'div'
    }
    constructor(props, context) {
        super(props, context);
    }
    /**
     * @method render
     * @return {ReactElement}
     */
    render() {
        let length = this.props.children.length;
        let li = this.props.children.map((item,index)=>{
                const {children} = item.props;
                return <li key={children+index}>{
                    index < length-1?<a href={item.props.url}>{children}</a>:children
                }</li>;
            }
        );
        return (
            <this.componentTag {...this.props} className={
                classnames(
                    this.getProperty(),
                    'clearfix',
                    this.props.className
                )
            }>
                <ul>
                    {li}
                </ul>
            </this.componentTag>
        )
    }
}