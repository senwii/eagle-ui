import React,{ PropTypes, Component } from 'react';
import classNames from 'classnames';
import classNameMixin from './utils/ClassNameMixin.js';
@classNameMixin
/**
 * 列
 * @class Col
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Col extends Component{
    static defaultProps={
        classPrefix:'sm'
    };
    static propTypes = {
        /**
         * 占几列，共12列
         * @property egSize
         * @type Integer
         * */
        sm:PropTypes.number,
        /**
         * 是否是最后一列
         * @property end
         * @type Boolean
         * @default false
         * */
        end:PropTypes.bool
    };

    getWidthClass(){
        let className= ['eg-sm-'+(this.props.sm?this.props.sm:'12') ];

        if(this.props.end){
            className.push('eg-end');
        }

        return className.join(' ');
    }

    render(){
        let renderStyle=this.props.style||{};
        return (
            <div className={classNames(
                this.getClassNames(this.props),
                this.getWidthClass(),
                this.props.className
            )} style={renderStyle}>
                {this.props.children}
            </div>
        );
    }
}