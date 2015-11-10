/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';

export class Col extends Component{

    static propTypes = {
    };

    constructor(props, context) {
        super(props, context);


    }

    render(){

        return (
            <div className={classnames(
                this.getWidthClass(),
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}