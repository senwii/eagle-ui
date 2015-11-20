/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin';

@ClassNameMixin
export default class Grid extends Component{

    static propTypes = {
    };


    render(){

        return (
            <div {...this.props}
                className={classnames(this.getClassName('grid'),this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}