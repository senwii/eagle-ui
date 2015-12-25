/**
 * Created by slashhuang on 15/12/25.
 */
import React,{Component} from 'react';
import querystring from 'querystring';

import {Search,Select, Input,Label,LabelGroup,Grid,Row,Col,Panel,PanelHeader,PanelFooter,PanelContent,Paging
    ,Tab,Tabset,Dialog,Item
    ,Table,Th,Td,Tr,Star,Button,Column} from '../../../src/index.js';
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

export default class Detail extends Component{
    render(){

        let styles={
        };
        let test=()=>{
            "use strict";
            alert('1')
        }
        return (
            <Grid>
                <Row>
                    <Col sm={12} style={{fontSize:'20px'}} onClick={test}>
                        门店详情
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Panel>
                            {/*门店信息*/}
                            <PanelContent>
                                <Row>
                                    <Col sm={13} >
                                        美丽新世界(旗舰店)
                                        <span> shopID:237489</span>
                                    </Col>
                                    <Col sm={13}>
                                        门店月浏览量
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={13} >
                                        <Star Rate={80} size={'20px'} />
                                        <span style={{verticalAlign:'top'}}>大客户</span>
                                    </Col>
                                    <Col sm={13} >
                                        198283
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <span>分类</span>
                                        <span style={{marginLeft:'10px'}}>美食、小吃、快餐</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <span>地址</span>
                                        <span style={{marginLeft:'10px'}}>上海市 杨浦区 国顺东路237-3（近银扣路）查看地图  </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <span>电话</span>
                                        <span style={{marginLeft:'10px'}}>021-38475738 </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} >
                                        <span>分店</span>
                                        <span style={{marginLeft:'10px'}}>3家 所有分店 </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={13} >
                                        <Button radius egSize="xs" egStyle="white">查看主站页面</Button>
                                    </Col>
                                    <Col sm={13} >
                                        已有21人关注
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            {/*市场份额信息*/}
                            <PanelContent>
                                <Row>
                                    <Col sm={4}>
                                        当前日佣金基数
                                        <span>307.32</span>
                                    </Col>
                                    <Col sm={4}>
                                        <Row>
                                           战区市场份额  2.32%
                                        </Row>
                                        <Row>
                                            门店市场份额 2.32%
                                        </Row>
                                    </Col>
                                    <Col sm={4}>
                                        <Row>
                                            <Col sm={5}>门店补贴</Col>
                                            <Col sm={7} style={{paddingLeft:0}}>2.32%</Col>
                                        </Row>
                                        <Row>
                                            <Col sm={5}>补贴原因</Col>
                                            <Col sm={7} style={{paddingLeft:0}}>在夏天的话，需要有一些降温的应急补贴</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            <PanelContent>
                                <Item>
                                    <Row><Col>合作信息</Col></Row>
                                    {/*合作信息*/}
                                    <Row>
                                        <Col sm={3}>上月闪惠交易额</Col>
                                        <Col sm={9}>111,220,034</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={3}>上月团购交易额</Col>
                                        <Col sm={9}>111,220,034</Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={1}>
                                            <Label active>订</Label>
                                        </Col>
                                        <Col sm={11}>111,220,034</Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={1}>
                                            <Label success>惠</Label>
                                        </Col>
                                        <Col sm={11}>111,220,034</Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={1}>
                                            <Label success>团</Label>
                                        </Col>
                                        <Col sm={3}>双人创意套餐A</Col>
                                        <Col sm={1}>￥12500</Col>
                                        <Col sm={3}><span style={{textDecoration:'line-through'}}>￥13000</span></Col>
                                        <Col sm={13}>已售120份</Col>
                                    </Row>
                                </Item>
                                <Item >
                                    {/*联系人信息*/}
                                    <Row><Col>联系人</Col></Row>
                                    <Row bottom>
                                        <Col sm={3}>李牛牛</Col>
                                        <Col sm={1}>kp</Col>
                                        <Col sm={3}>老板/股东</Col>
                                        <Col sm={3}>123456789</Col>
                                        <Col sm={2}><span>编辑</span>|<span>废弃</span></Col>
                                    </Row>
                                    <Row bottom>
                                        <Col sm={3}>李牛牛</Col>
                                        <Col sm={1}>kp</Col>
                                        <Col sm={3}>老板/股东</Col>
                                        <Col sm={3}>123456789</Col>
                                        <Col sm={2}><span>编辑</span>|<span>废弃</span></Col>
                                    </Row>
                                </Item>
                                <Item>
                                    <Row><Col>拜访记录</Col></Row>
                                    {/*拜访记录*/}
                                    <Grid>
                                            <Row>
                                                <Col sm={2}>
                                                    拜访人
                                                </Col>
                                                <Col sm={2}>王军</Col>
                                                <Col sm={2}>联系人</Col>
                                                <Col sm={2}>李大牛</Col>
                                                <Col sm={2}>KP</Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>
                                                    <Label success>
                                                        有效拜访
                                                    </Label>
                                                </Col>
                                                <Col sm={2}>上门</Col>
                                                <Col sm={2}>谈单</Col>
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
                                    <Grid>
                                        <Row>
                                            <Col sm={2}>
                                                拜访人
                                            </Col>
                                            <Col sm={2}>王军</Col>
                                            <Col sm={2}>联系人</Col>
                                            <Col sm={2}>李大牛</Col>
                                            <Col sm={2}>KP</Col>
                                        </Row>
                                        <Row>
                                            <Col sm={2}>
                                                <Label success>
                                                    有效拜访
                                                </Label>
                                            </Col>
                                            <Col sm={2}>上门</Col>
                                            <Col sm={2}>谈单</Col>
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
                                    <Row><Col>关联客户</Col></Row>
                                    <Row>
                                        <Col>上海市舞虾餐饮有限公司(直营)</Col>
                                    </Row>
                                    <Row>
                                        <Col>上海市舞虾餐饮有限公司(加盟)</Col>
                                    </Row>
                                </Item>
                                <Item>
                                    {/*门店历史*/}
                                    <Row><Col>门店历史</Col></Row>
                                    <Row>
                                        <Col sm={3}>2014-5-12</Col>
                                        <Col sm={9}>孙大力将维护销售从李啦啦变更为孙大力</Col>
                                    </Row>
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
                                            归属信息
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                          责任销售
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
                                            组织
                                        </Col>
                                        <Col sm={8}>
                                            上海大客户团购1-1组
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                            战区
                                        </Col>
                                        <Col sm={8}>
                                            上海公海
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} >
                                            电话
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
                                <Row>
                                    <Col>
                                        pop
                                    </Col>
                                    <Col style={{width:'100%',height:'230px'}}>
                                        <img src='http://www.northtimes.com/u/cms/www/201403/201515050uqo.jpg'/>
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                        <Panel>
                            <PanelContent >
                                <PanelContent>
                                    <Row><Col>附近同类门店</Col></Row>
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
                                                <span style={{verticalAlign:'top'}}>大客户</span>
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


