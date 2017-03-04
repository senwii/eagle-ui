//http://future-team.github.io/gfs-icons/index.html
import React, { Component ,PropTypes} from 'react';
import {Slider} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class SliderDemo extends Component{

    render(){
        return (
            <iframe src="http://future-team.github.io/gfs-icons/index.html" frameborder="0" style={{width: '100%',height: '2000px',border:'none'}}></iframe>
        );
    }
}