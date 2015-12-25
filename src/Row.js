//import RowLess from './row.less';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import classNameMixin from './utils/ClassNameMixin.js';
@classNameMixin

/**
 * 行
 * @class Row
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Row extends Component{
    static defaultProps={
        classPrefix:'row'
    };
    static propTypes={
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default row
         * */
        classPrefix:PropTypes.string,
        /**
         * 样式前缀
         * @property bottom
         * @type String
         * @default undefined
         * */
        bottom:PropTypes.bool
    };

    render(){

        return (
            <div {...this.props}
            className={
                    classNames(
                        'eg-row','clearfix',
                        this.getClassNames(this.props),
                        this.props.className
                    )} >
                {this.props.children}
            </div>
        );
    }
}