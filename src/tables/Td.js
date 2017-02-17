import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表格单元格组件
 * @class Td
 * @constructor
 * @module table(表格)
 * @extends Component
 * @demo #/table|table.js
 * @show true
 * */
@ClassNameMixin
export default class Td extends Component{

    static propTypes = {

    };

    static defaultProps = {

    };


    render(){
        return (
            <td {...this.props}>
                {this.props.children}
                {classnames(
                    this.getClassNames(this.props))===''
                    ? null:
                    <span className={
                        classnames(
                            this.getClassNames(this.props)
                        )}>
                    </span>
                }
            </td>
        );

    }
}