/**
 * Created by slashhuang on 15/12/21.
 */
require('../../../src/css/star.less');
import React, { Component ,PropTypes} from 'react';
import Star from '../../../src/Star.js';

export default class StarDemo extends Component {
    render(){
        return(
            <div>
                <Star Rate={50} size={15}/><br/>
                <Star Rate={60} size={16}/><br/>
                <Star Rate={70} size={17}/><br/>
                <Star Rate={80} size={18}/><br/>
                <Star Rate={90} size={19}/><br/>
                <Star Rate={10} size={14}/><br/>
                <Star Rate={20} size={13}/><br/>
                <Star Rate={30} size={12}/><br/>
                <Star Rate={40} size={11}/><br/>
                <Star Rate={50} size={10}/><br/>
            </div>
        )
    }
}

