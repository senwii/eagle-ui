/**
 * Created by mac on 15/9/7.
 */
//import RowLess from './row.less';
import React, { PropTypes, Component } from 'react';


export default class Row extends Component{

    static propTypes={

    };

    render(){

        return (
            <div {...this.props} className='eg-row clearfix'>
                {this.props.children}
            </div>
        );
    }
}