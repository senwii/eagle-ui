/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes, Component } from 'react';


export class Col extends Component{

    static propTypes = {
        sm:PropTypes.number.isRequired,
        end:PropTypes.bool
    };

    getWidthClass(){
        let className= ['eg-sm-'+this.props.sm ];

        if(this.props.end){
            className.push('eg-end');
        }

        return className.join(' ');
    }

    render(){

        return (
            <div className={this.getWidthClass()}>
                {this.props.children}
            </div>
        );
    }
}