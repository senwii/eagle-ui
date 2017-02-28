import React,{ PropTypes, Component } from 'react';

//import SvgIcon from 'ui-svg-icons/dist/24px';
import 'gfs-icons';
import extend from 'extend';
import classnames from 'classnames';

export default class Icons extends Component{

    render(){
        let defaultStyle = {
            width:'18px',
            height:'18px'
        };
        let {name,className,style,...other} = this.props;
        return (
            <div className={classnames('gfs-icon',`icon-${name}`,className)} style={extend({},defaultStyle,style ||{})} {...other}/>
        );
    }
}
