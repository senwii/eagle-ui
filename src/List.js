import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';
@ClassNameMixin
export default class List extends Component{

    static propTypes = {
    };

    static defaultProps = {

    };
    render(){
        return (
            <div className={
                classnames(
                    this.getClassName('list'),
                    this.props.className
                )}>
                {this.props.children}
            </div>
        );

    }
}