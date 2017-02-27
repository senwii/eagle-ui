import React, { Component ,PropTypes} from 'react';
import {Button,ImgSlider,Grid,Row,Col} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'

export default class SliderDemo extends Component {
    constructor(props,context) {
        super(props,context);
        this.state={
            showThumbnail:true,
            imgModify:true
        }
    }
    toggleThumbnail(){
        this.setState({
            showThumbnail:!this.state.showThumbnail
        });
    }
    toggleModifier(){
        this.setState({
            imgModify:!this.state.imgModify
        });
    }
    render() {
        let imgList=[
            {
                profile:'1叔2015上传',
                url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
            },
            {
                profile:'1哥2015上传',
                url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=2544720638,729810412&fm=21&gp=0.jpg'
            },
            {
                profile:'2哥2015上传',
                url:'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
            },
            {
                profile:'3哥2015上传',
                url:'http://www.bz55.com/uploads/allimg/150309/139-150309101F2.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
            },
            {
                profile:'4哥2015上传',
                url: 'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=2926840907,3192872789&fm=21&gp=0.jpg'
            },
            {
                profile:'5哥2015上传',
                url: 'http://www.bz55.com/uploads/allimg/150309/139-150309101A8.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img5.imgtn.bdimg.com/it/u=4207978144,3154923917&fm=21&gp=0.jpg'
            },
            {
                profile:'5哥2015上传',
                url: 'http://img3.imgtn.bdimg.com/it/u=227823385,2843041802&fm=21&gp=0.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img2.imgtn.bdimg.com/it/u=1813764503,1895922603&fm=21&gp=0.jpg'
            },
            {
                profile:'5叔2015上传',
                url:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg',
                description:'熊猫野外生存',
                thumbnail:'http://img5.imgtn.bdimg.com/it/u=1432870041,1164599966&fm=21&gp=0.jpg'
            }
        ],
            pageNum=5,
            {showThumbnail,imgModify}=this.state;
        return (
            <div>
                <DemoLayout title="照片浏览插件">
                    <DemoItem title="">
                        <CodeShow>
                            <Code code={getFile('slider')}>
                            </Code>
                        </CodeShow>
                        <DemoShow>
                            <Grid>
                                <Row>
                                    <Col sm={6}>
                                        <ImgSlider  show={true}
                                                    showThumbnail={showThumbnail}
                                                    imgList={imgList}
                                                    profileKey={'profile'}
                                                    urlKey={'url'}
                                                    titleKey={'description'}
                                                    thumbnailKey={'thumbnail'}
                                                    pageNum={pageNum}
                                                    imgModify={imgModify}
                                            />
                                    </Col>
                                    <Col sm={6}>
                                        <Button block success
                                                onClick={::this.toggleThumbnail} >
                                            {(showThumbnail?'隐藏':'显示')+'缩略图'}
                                        </Button>
                                        <Button block style={{marginTop:'10px'}} success
                                                onClick={::this.toggleModifier} >
                                            {(imgModify?'隐藏':'显示')+'缩放控件'}
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </DemoShow>
                    </DemoItem>
                </DemoLayout>
            </div>

        );
    }
};
