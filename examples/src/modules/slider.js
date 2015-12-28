/**
 * Created by slashhuang on 15/12/28.
 */


import React, { Component ,PropTypes} from 'react';
import Slider from '../../../src/Slider.js';
export default class SliderDemo extends Component {
    constructor(props,context) {
        super(props,context);
    }
    render() {
        let imgs=[
            'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
            'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
            'http://www.bz55.com/uploads/allimg/150309/139-150309101F2.jpg',
            'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
            'http://www.bz55.com/uploads/allimg/150309/139-150309101A8.jpg',
            'http://img3.imgtn.bdimg.com/it/u=227823385,2843041802&fm=21&gp=0.jpg'
        ];
        let profile=[
            '1叔2015上传',
            '2叔2015上传',
            '3叔2015上传',
            '4叔2015上传',
            '5叔2015上传',
            '6叔2015上传',
            '7叔2015上传'
        ];
        let section='闪惠商户培训资料';
        let pageNum=3;
        return (
            <Slider imgList={imgs} profile={profile} section={section} pageNum={pageNum}/>
        );
    }
};
