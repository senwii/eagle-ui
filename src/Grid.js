import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin';

@ClassNameMixin

/**
 * <h5>eagle-ui主要栅格化布局组件</h5>
 * <strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>
 * <strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>
 * <strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>
 * <h6>点击以上链接进行相关查看</h6>
 * @module grid(布局)
 * @main grid
 * @static
 *
 */

/**
 * 布局组件
 * @class Grid
 * @module grid(布局)
 * @extends Component
 * @constructor
 * @demo docDemo/module/grid.html {UI展示}
 * @demo docDemo/grid.js {源码}
 * @show true
 * */
export default class Grid extends Component{

    static propTypes = {
    };

    render(){

        return (
            <div {...this.props}
                className={classnames(this.getClassName('grid'),this.getClassName(this.props.fluid?'grid-'+'fluid':''),this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}