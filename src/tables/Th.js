import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表头单元格组件
 * @class Th
 * @constructor
 * @module table(表格)
 * @extends Component
 * @demo star.js {UI展示}
 * @demo table.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class Th extends Component{

    static propTypes = {

    };

    static defaultProps = {

    };
    constructor(props, context) {
        super(props, context);
    }

    sortHandler(){
        var sortMethod=this.props.sort;
        if(!sortMethod || sortMethod==='asc'){
            sortMethod='des';
        }else{
            sortMethod='asc';
        }
        this.props.clickCallback(this.props.field,sortMethod);
    }

    render(){
        return (
            <th
                onClick={::this.sortHandler}>
                {this.props.children}
                {this.props.sort==='des'? <span>↓</span>:this.props.sort==='asc'?<span>↑</span>:null}
            </th>
        );

    }
}