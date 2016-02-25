
import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';

import ClassNameMixin from './utils/ClassNameMixin';

@ClassNameMixin
export default class FormGroup extends Component{

    static propTypes = {

    };

    constructor(props, context) {
        super(props, context);
    }

    render(){

        return (
            <div style={this.props.style}
                 className={classnames(this.getClassName('form-group'),this.props.className || '')}>
                {this.props.children}
            </div>
        );
    }
}