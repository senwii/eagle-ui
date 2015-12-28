/**
 * Created by slashhuang on 15/12/25.
 */
import React,{Component} from 'react';
import querystring from 'querystring';

import {Search,Select, Input,Label,LabelGroup,Grid,Row,Col,Panel,PanelHeader,PanelFooter,PanelContent,Paging
    ,Tab,Tabset,Dialog,Item
    ,Table,Th,Td,Tr,Star,Button,Column,Slider} from '../../../src/index.js';
//测试分页功能
let page = 1;
function callback(page){
    page = page;
    window.location = location.href.replace(/\?.*/,'')+'?page='+page+'&pageSize='+pageSize;
}
function loadPageCallback(pageSize){
    window.location = location.href+'?page='+page+'&pageSize='+pageSize;
}
page =location.search ? querystring.parse(location.search.substr(1) ).page*1 : 1;
var pageSize = location.search ? querystring.parse(location.search.substr(1) ).pageSize*1 : 20;
/*测试分页结束*/
/*测试照片展示插件*/
let imgs=[
    'http://www.northtimes.com/u/cms/www/201403/201515050uqo.jpg',
    'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
    'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
    'http://www.bz55.com/uploads/allimg/150309/139-150309101F2.jpg',
    'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
    'http://www.bz55.com/uploads/allimg/150309/139-150309101A8.jpg',
    'http://img3.imgtn.bdimg.com/it/u=227823385,2843041802&fm=21&gp=0.jpg'
];
let profile=[
    'A老板2015上传',
    'B老板2015上传',
    'C叔2015上传',
    'D叔2015上传',
    'E老板2015上传',
    'F老板2015上传',
    'G老板2015上传',
    'H老板2015上传',
    'I老板2015上传',
];
/*测试照片插件数据结束*/

export default class Detail extends Component{
    constructor(props){
       super(props);
        this.state={
            sliderShow:false
        }
    }
    handleSlider(){
        this.setState({
            sliderShow:true
        })
    }
    render(){
        let {sliderShow}=this.state;
        let styleObj={
            visitLabel:{
                color:'#ee5511',
                border:'1px solid #ee5511'
            }
        };

        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <h2>门店详情</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Panel>
                            {/*门店信息*/}
                            <PanelContent>
                                <Row>
                                    <Col sm={13} >
                                        <h3>美丽新世界(旗舰店)</h3>
                                        <h5 className={'ft-gray'}>shopID:237489</h5>
                                        <Label success>团</Label>
                                        <Label active >惠</Label>
                                        <Label disabled >订</Label>
                                    </Col>
                                    <Col sm={13}>
                                        门店月浏览量
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={13} >
                                        <Star Rate={80} size={'20px'} />
                                        <h5 className={'ft-gray'} style={{verticalAlign:'top'}}>大客户</h5>
                                    </Col>
                                    <Col sm={13} >
                                        198283
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <h5 className={'ft-gray'}>分类</h5>
                                        <span style={{marginLeft:'10px'}}>美食、小吃、快餐</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <h5 className={'ft-gray'}>地址</h5>
                                        <span style={{marginLeft:'10px'}}>上海市 杨浦区 国顺东路237-3（近银扣路）查看地图  </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <h5 className={'ft-gray'}>电话</h5>
                                        <span style={{marginLeft:'10px'}}>021-38475738 </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <h5 className={'ft-gray'}>分店</h5>
                                        <span style={{marginLeft:'10px'}}>3家 所有分店 </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={13} >
                                        <Button radius egSize="xs" egStyle="white">查看主站页面</Button>
                                    </Col>
                                    <Col sm={13} >
                                        <h5 className={'ft-gray'}>已有21人关注</h5>
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            {/*市场份额信息*/}
                            <PanelContent>
                                <Row>
                                    <Col sm={4}>
                                        <Row>
                                            <Col>
                                                <h5 className={'ft-gray'} style={{marginRight:'10px'}}>当前日佣金基数</h5>
                                                <h1 className={'ft-orange'}>307.32</h1>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={4}>
                                        <Row>
                                            <Col>
                                                <h5 className={'ft-gray'} style={{marginRight:'10px'}}>战区市场份额</h5>
                                                <h5>3.32%</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className={'ft-gray'} style={{marginRight:'10px'}}>门店市场份额</h5>
                                                <h5>3.32%</h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={4}>
                                        <Row>
                                            <Col sm={5}>
                                                <h5 className={'ft-gray'}>门店补贴</h5>
                                                </Col>
                                            <Col sm={7} style={{paddingLeft:0}}>
                                                <h5>3.32%</h5>
                                                </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={5}>
                                                <h5 className={'ft-gray'}>补贴原因</h5>
                                            </Col>
                                            <Col sm={7} style={{paddingLeft:0}}>在夏天的话，需要有一些降温的应急补贴</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            <PanelContent>
                                <Item>
                                    <Row><Col><h4 style={{'marginBottom':'15px'}}>合作信息</h4></Col></Row>
                                    {/*合作信息*/}
                                    <Row>
                                        <Col sm={13}>
                                            <h5 className={'ft-gray'}>上月闪惠交易额</h5>
                                        </Col>
                                        <Col sm={13}>
                                            <h4 className={'ft-blue'}>111,220,034</h4>
                                        </Col>
                                        <Col sm={13}>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={13}>
                                            <h5 className={'ft-gray'}>上月团购交易额</h5>
                                        </Col>
                                        <Col sm={13}>
                                            <h4 className={'ft-orange'}>111,220,034</h4>
                                        </Col>
                                        <Col sm={13}>
                                        </Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={1}>
                                            <Label active>订</Label>
                                        </Col>
                                        <Col sm={11}>每满100元减50</Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={1}>
                                            <Label success>惠</Label>
                                        </Col>
                                        <Col sm={11}>双人创意套餐A</Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={1}>
                                            <Label success>团</Label>
                                        </Col>
                                        <Col sm={3}>双人创意套餐A</Col>
                                        <Col sm={2}><h5 className={'ft-orange'} >￥12500</h5></Col>
                                        <Col sm={2}><h5 className={'ft-gray'} style={{textDecoration:'line-through'}}>￥13000</h5></Col>
                                        <Col sm={13}>已售120份</Col>
                                    </Row>
                                </Item>
                                <Item >
                                    {/*联系人信息*/}
                                    <Row><Col><h4 style={{'marginBottom':'15px'}}>联系人</h4></Col></Row>
                                    <Row bottom>
                                        <Col sm={13}>李牛牛</Col>
                                        <Col sm={2}><h5 className={'ft-orange'}>kp</h5></Col>
                                        <Col sm={3}>老板/股东</Col>
                                        <Col sm={3}>123456789</Col>
                                        <Col sm={13}>
                                            <h5 className={'ft-gray'}>
                                                <span>编辑</span>|
                                                <span>废弃</span>
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={13}>李牛牛</Col>
                                        <Col sm={2}>
                                            <h5 className={'ft-gray'}>已废弃</h5>
                                        </Col>
                                        <Col sm={3}>老板/股东</Col>
                                        <Col sm={3}>123456789</Col>
                                        <Col sm={13}>
                                            <h5 className={'ft-gray'}>
                                                恢复
                                            </h5>
                                            </Col>
                                    </Row>
                                </Item>
                                <Item>
                                    <Row><Col><h4 style={{'marginBottom':'15px'}}>拜访记录</h4></Col></Row>
                                    {/*拜访记录*/}
                                    <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>拜访人</h5>
                                                </Col>
                                                <Col sm={13}>
                                                    王军
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>联系人</h5>
                                                </Col>
                                                <Col sm={13}>李大牛</Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-orange'}> KP</h5>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>
                                                       2015-3-32礼拜一
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={13}>
                                                    <Label className={'ft-12'} style={styleObj['visitLabel']}>
                                                        有效拜访
                                                    </Label>
                                                </Col>
                                                <Col sm={13}>
                                                        <Label>
                                                            <h5 className={'ft-gray'}>上门</h5>
                                                        </Label>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>
                                                        <Label className={'ft-gray'}>
                                                            <h5 className={'ft-gray'}>谈单</h5>
                                                            </Label>
                                                    </h5>
                                                </Col>
                                                <Col sm={1}></Col>
                                            </Row>
                                            <Row style={{paddingBottom:'20px'}} bottom>
                                                <Col>
                                                    上周五去了一趟门店，感觉还是可以的，店主也是很有合作意向，但是
                                                    还要在跟进谈一谈细节，唯一的在阻碍时店主的帐目量，觉得手续费太高，不愿合作。
                                                    上周五去了一趟门店，感觉还是可以的。
                                                </Col>
                                            </Row>
                                        </Grid>
                                    <Paging loadPageCallback={loadPageCallback}
                                            currentPage={page} pageSize={pageSize} pageCallback={callback} total={5024}></Paging>
                                    </Item>
                                <Item>
                                    {/*关联客户*/}
                                    <Row><Col><h4 style={{'marginBottom':'10px'}}>关联客户</h4></Col></Row>
                                    <Row>
                                        <Col>上海市舞虾餐饮有限公司(直营)</Col>
                                    </Row>
                                    <Row>
                                        <Col>上海市舞虾餐饮有限公司(加盟)</Col>
                                    </Row>
                                </Item>
                                <Item>
                                    {/*门店历史*/}
                                    <Row><Col><h4 style={{'marginBottom':'10px'}}>门店历史</h4></Col></Row>
                                    <Grid>
                                        <Row>
                                            <Col sm={3}>
                                                <h5 className={'ft-gray'}> 2014-5-12</h5>
                                            </Col>
                                            <Col sm={9}>孙大力
                                                <h5 className={'ft-gray'}>将</h5>
                                                维护销售
                                                <h5 className={'ft-gray'}>从</h5>
                                                李啦啦
                                                <h5 className={'ft-gray'}> 变更为</h5>
                                                孙大力
                                                <h5 className={'ft-orange'}>(门店系统变更)</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={3}>
                                                <h5 className={'ft-gray'}> 2014-5-12</h5>
                                            </Col>
                                            <Col sm={9}>孙大力
                                                <h5 className={'ft-gray'}>将</h5>
                                                维护销售
                                                <h5 className={'ft-gray'}>从</h5>
                                                李啦啦
                                                <h5 className={'ft-gray'}> 变更为</h5>
                                                孙大力
                                                <h5 className={'ft-orange'}>(门店系统变更)</h5>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Item>
                            </PanelContent>
                        </Panel>
                    </Col>
                    <Col sm={4}>
                        <Panel>
                            <PanelContent padding={true}>
                                <PanelContent>
                                    <Row>
                                        <Col>
                                            <h4> 归属信息</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                            <h5 className={'ft-gray'}> 责任销售</h5>
                                        </Col>
                                        <Col sm={4}>
                                            老大哥
                                        </Col>
                                        <Col sm={4}>
                                           剩余12天
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                            <h5 className={'ft-gray'}>
                                            组织
                                                </h5>
                                        </Col>
                                        <Col sm={8}>
                                            上海大客户团购1-1组
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                            <h5 className={'ft-gray'}>
                                            战区</h5>
                                        </Col>
                                        <Col sm={8}>
                                            上海公海
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                            <h5 className={'ft-gray'}>
                                            电话</h5>
                                        </Col>
                                        <Col sm={8}>
                                            15005162976
                                        </Col>
                                    </Row>
                                </PanelContent>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            <PanelContent >
                                <Slider imgList={imgs} profile={profile} section={'闪惠商户培训资料'} pageNum={4} show={sliderShow}/>
                                <Row>
                                    <Col>
                                        <h4>pop</h4>
                                    </Col>
                                    <Col style={{width:'100%',height:'230px'}}>
                                        <img src={imgs[0]} onClick={this.handleSlider.bind(this)} style={{cursor:'pointer'}}/>
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            <PanelContent >
                                <PanelContent>
                                    <Row><Col><h4>附近同类门店</h4></Col></Row>
                                    <Grid>
                                        <Row>
                                            <Col sm={13} >
                                                70后饭吧(五角场店)
                                            </Col>
                                            <Col sm={13}>
                                                <Label success>订</Label>
                                                <Label active>惠</Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Star Rate={80} size={'16px'} />
                                                <span style={{verticalAlign:'top'}}>大客户</span>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <Grid>
                                        <Row>
                                            <Col sm={13} >
                                                70后饭吧(五角场店)
                                            </Col>
                                            <Col sm={13}>
                                                <Label success>订</Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Star Rate={80} size={'20px'} />
                                                <span style={{verticalAlign:'top'}}>
                                                     <h5 className={'ft-gray'}>
                                                     大客户</h5>
                                                </span>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </PanelContent>
                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}


