import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';

/**
 * 行
 * @class Row
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Row extends Component{

    static propTypes={

    };

    static defaultProps = {
        classPrefix:'row'
    };

    render(){

        return (
            <div {...this.props} className={classnames(
                this.getProperty(),
                'clearfix',
                this.props.className
            )} >
                {this.props.children}
            </div>
        );
    }
}