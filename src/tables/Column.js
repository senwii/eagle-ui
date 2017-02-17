import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 封装Tr,Td组件，直接配合设置data属性的Table使用
 * @class Column
 * @module table(表格)
 * @constructor
 * @content {string} type 内容
 * @demo #/table|table.js
 * @show true
 * */
@ClassNameMixin
export default class Column extends Component{

    static propTypes = {
        /**
         * 表头样式(设置表头，支持JSX)
         * @property header
         * @type String
         * */
        header:PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string
        ]),
        /**
         * 用来声明需要绑定数组对象中的哪一个属性
         * @property field
         * @type String
         * */
        field:PropTypes.string,
        /**
         * 用来描述每个竖排单元格的展示形式
         * 不应该为string
         * @property cell
         * @type Object
         * */
        cell:PropTypes.object

    };

    static defaultProps = {

    };

    render(){
        return null;

    }
}