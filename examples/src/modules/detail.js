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
   buttonTest(){
       alert('hello world');
   }
   expandView(e){
        this.setState({

        })
    }
    render(){
        {/*本示例说明:
            数据模型:
            1.state={sliderShow:boolean}仅仅用于处理点击图片出现图片浏览插件
            样式:
            1.styleObj为示例用到的行内样式
            2.ft-gray,ft-orange,mg-bottom-10等为eagle-ui库定义的字体及布局样式，不需要自己定义
            函数:
            1.handleSlider为处理图片展示幻灯片的点击交互函数
            2.buttonTest为示例点击按钮效果，可以定义页面底部按钮的动作
        */}
        let {sliderShow}=this.state;
        let styleObj={
            visitMore:{
                position:'absolute',
                bottom:'1px',
                right:'10px',
                cursor:'pointer'
            },
            visitReplay:{/*有效拜访回复样式*/
                padding:'8px 0 8px 8px',
                background:"#f5f5f5",
                width:'100%',
                lineHeight:'18px'
            },
            visitLabel:{/*有效拜访样式*/
                color:'#ee5511',
                border:'1px solid #ee5511'
            },
            buttonGroup:{ /*页面底部按钮组*/
                position:'fixed',
                bottom:'1px',
                left:'1px',
                background:'#fff',
                padding:' 6px 10% 6px 50%',
                width:'100%',
                boxShadow:'0 -1px 2px rgba(0,0,0,0.5)'

            },
           itemFlag:{ /*每一大项左侧的flag*/
               position:'absolute',
               top:'5px',
               left:'-15px',
               height:'15px',
               width:'3px',
               background:'#ee5511'
           }
        };
        /*附近门店数据*/
        let nearByShops=[
            {
                name:' 70后饭吧(五角场店)',
                labels:['订','惠'],
                rate:80,
                customer:'大客户'
            },
            {
                name:' 80后饭吧(五角场店)',
                labels:['闪','惠'],
                rate:60,
                customer:'小客户'
            }
        ];

        return (
            <div style={{color:'#333'}}>
                <Grid className='mg-bottom-40'>
                    <Row>
                        <Col sm={12}>
                            <h2>门店详情</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} style={{paddingRight:'5px'}}>
                            <Panel>
                                {/*门店信息*/}
                                <PanelContent>
                                    <Row>
                                        <Col sm={13} >
                                            <h3>美丽新世界(旗舰店)</h3>
                                            <h5 className={'ft-gray mg-left-10 mg-right-10 '}>shopID:237489</h5>
                                            <Label success >团</Label>
                                            <Label active  className={'mg-left-10'}>惠</Label>
                                            <Label disabled  className={'mg-left-10'}>订</Label>
                                        </Col>
                                        <Col sm={13}>
                                            <h5 className={'ft-gray' }>门店月浏览量</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={13} >
                                            <Star Rate={80} size={'16px'} />
                                            <h5 className={'ft-gray  mg-left-10'} style={{verticalAlign:'top'}}>大客户</h5>
                                        </Col>
                                        <Col sm={13} className='ft-orange'>
                                            198283
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>分类</h5>
                                            <span className={' mg-left-10'}>美食、小吃、快餐</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>地址</h5>
                                            <span className={' mg-left-10'}>上海市 杨浦区 国顺东路237-3（近银扣路）查看地图  </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>电话</h5>
                                            <span className={' mg-left-10'}>021-38475738 </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>分店</h5>
                                            <span className={' mg-left-10'}>3家 所有分店 </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={13} >
                                            <Button radius egSize="xs" egStyle="white" onClick={this.buttonTest}>查看主站页面</Button>
                                        </Col>
                                        <Col sm={13} className={'ft-gray'}>
                                            <h5 className='eg-hollow-star mg-right-10'></h5> |
                                            <h5 className={'ft-gray mg-left-10'}>已有21人关注</h5>
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
                                        <div style={styleObj['itemFlag']}></div>
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
                                            <Col sm={13}><h5 className={'ft-gray'} >已售120份</h5></Col>
                                        </Row>
                                    </Item>
                                    <Item >
                                        {/*联系人信息*/}
                                        <div style={styleObj['itemFlag']}></div>
                                        <Row><Col><h4 className='mg-bottom-15'>联系人</h4></Col></Row>
                                        <Row bottom>
                                            <Col sm={3}>
                                                李牛牛
                                                <h5 className={'ft-orange mg-left-10'}>kp</h5>
                                            </Col>
                                            <Col sm={3}>老板/股东</Col>
                                            <Col sm={3}>123456789</Col>
                                            <Col sm={13}>
                                                <h5 className={'ft-gray'}>
                                                    <span onClick={this.buttonTest} className='hover-pointer'>编辑</span>
                                                    <span className={'mg-left-10'}>|</span>
                                                    <span className={'mg-left-10 hover-pointer'} onClick={this.buttonTest}>废弃</span>
                                                </h5>
                                            </Col>
                                        </Row>
                                        <Row bottom>
                                            <Col sm={3}>
                                                李牛牛
                                                <h5 className={'ft-gray mg-left-10'}>已废弃</h5>
                                            </Col>
                                            <Col sm={3}>老板/股东</Col>
                                            <Col sm={3}>123456789</Col>
                                            <Col sm={13}>
                                                <h5 className={'ft-gray'}>
                                                    <span onClick={this.buttonTest} className='hover-pointer'>  恢复</span>
                                                   </h5>
                                            </Col>
                                        </Row>
                                    </Item>
                                    <Item>
                                        <Row><Col><h4 className={'ft-orange'}>拜访记录</h4></Col></Row>
                                        {/*拜访记录*/}
                                        <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>拜访人</h5>
                                                    <span className={' mg-left-10'}>王军</span>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>联系人</h5>
                                                    <span className={' mg-left-10'}>李大牛</span>
                                                    <h5 className={'mg-left-10 ft-orange'}> KP</h5>
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
                                                <div style={styleObj['visitMore']} onClick={this.expandView}>
                                                    收起
                                                    <div className='eg-arrow-border-up mg-left-10'></div>
                                                </div>
                                                <Col>
                                                    上周五去了一趟门店，感觉还是可以的，店主也是很有合作意向，但是
                                                    还要在跟进谈一谈细节，唯一的在阻碍时店主的帐目量，觉得手续费太高，不愿合作。
                                                    上周五去了一趟门店，感觉还是可以的。
                                                    <div style={styleObj['visitReplay']}>
                                                        <div>
                                                            <h5 className={'ft-gray'}>陪访人</h5>
                                                            <span className={' mg-left-10'}>李经理</span>
                                                        </div>
                                                        <div>
                                                            上周五去了一趟门店，感觉还是可以的，店主也是很有合作意向，但是
                                                            还要在跟进谈一谈细节，唯一的在阻碍时店主的帐目量，觉得手续费太高，不愿合作。
                                                            上周五去了一趟门店，感觉还是可以的。
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                        <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>拜访人</h5>
                                                    <span className={' mg-left-10'}>王军</span>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>联系人</h5>
                                                    <span className={' mg-left-10'}>李大牛</span>
                                                    <h5 className={'mg-left-10 ft-orange'}> KP</h5>
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
                                                <div style={styleObj['visitMore']}>
                                                    更多
                                                    <div className='eg-arrow-border-down mg-left-10'></div>
                                                </div>
                                                <Col className='pd-right-0'>
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
                                        <div style={styleObj['itemFlag']}></div>
                                        <Row><Col><h4 className='mg-bottom-10'>关联客户</h4></Col></Row>
                                        <Row>
                                            <Col>上海市舞虾餐饮有限公司(直营)</Col>
                                        </Row>
                                        <Row>
                                            <Col>上海市舞虾餐饮有限公司(加盟)</Col>
                                        </Row>
                                    </Item>
                                    <Item>
                                        {/*门店历史*/}
                                        <div style={styleObj['itemFlag']}></div>
                                        <Row><Col><h4 className='mg-bottom-10'>门店历史</h4></Col></Row>
                                        <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}> 2014-5-12</h5>
                                                </Col>
                                                <Col sm={13} end>孙大力
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
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}> 2014-5-12</h5>
                                                </Col>
                                                <Col sm={13} end>孙大力
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
                                <PanelContent>
                                    <Item>
                                        {/*归属信息*/}
                                        <div style={styleObj['itemFlag']}></div>
                                        <Row>
                                            <Col>
                                                <h4> 归属信息</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4}>
                                                <h5 className={'ft-gray'}> 责任销售</h5>
                                            </Col>
                                            <Col sm={8} className='no-pd-left-right'>
                                                老大哥
                                                <span className={' mg-left-10'}> 剩余12天</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4} >
                                                <h5 className={'ft-gray'}>
                                                    组织
                                                </h5>
                                            </Col>
                                            <Col sm={8} className='no-pd-left-right'>
                                                上海大客户团购1-1组
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4} >
                                                <h5 className={'ft-gray'}>
                                                    战区</h5>
                                            </Col>
                                            <Col sm={8} className='no-pd-left-right'>
                                                上海公海
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4} >
                                                <h5 className={'ft-gray'}>
                                                    电话</h5>
                                            </Col>
                                            <Col sm={8} className='no-pd-left-right'>
                                                15005162976
                                            </Col>
                                        </Row>
                                    </Item>
                                </PanelContent>
                            </Panel>
                            <Panel>
                                <PanelContent >
                                    <Item>
                                        {/*归属信息*/}
                                        <div style={styleObj['itemFlag']}></div>
                                        <Slider imgList={imgs} profile={profile} section={'闪惠商户培训资料'} pageNum={4} show={sliderShow}/>
                                        <Row>
                                            <Col>
                                                <h4>pop</h4>
                                            </Col>
                                            <Col style={{width:'100%',height:'230px',position:'relative'}}>
                                                <img src={imgs[0]} onClick={this.handleSlider.bind(this)} style={{cursor:'pointer'}}/>
                                                <div style={{position:'absolute',bottom:'2px',right:'25px',color:'#fff'}}>共{imgs.length}张</div>
                                            </Col>
                                        </Row>
                                    </Item>
                                </PanelContent>
                            </Panel>
                            <Panel>
                                <PanelContent >
                                    <Item>
                                        {/*附近同类门店*/}
                                        <div style={styleObj['itemFlag']}></div>
                                        <Row><Col><h4>附近同类门店</h4></Col></Row>
                                        {
                                          nearByShops.map((shop,index)=>{
                                              return (
                                                  <Grid className={'pd-top-bottom-10'}>
                                                      <Row>
                                                          <Col sm={12} >
                                                             {shop['name']}
                                                              {
                                                                  shop['labels'].map((label)=>{
                                                                    return  <Label success className={'mg-left-10'}>{label}</Label>
                                                                  })
                                                              }
                                                          </Col>
                                                      </Row>
                                                      <Row bottom className={'pd-bottom-15 pd-top-0'}>
                                                          <Col className={'no-pd-top-bottom'}>
                                                              <Star Rate={shop['rate']} size={'16px'} />
                                                              <h5 className={'ft-gray'}  style={{verticalAlign:'top'}}>
                                                                  {shop['customer']}
                                                              </h5>
                                                          </Col>
                                                      </Row>
                                                  </Grid>
                                              )
                                          })

                                        }
                                        <Grid className={'pd-top-bottom-10'}>
                                            <Row>
                                                <Col sm={12} >
                                                    70后饭吧(五角场店)
                                                    <Label success className={'mg-left-10'}>订</Label>
                                                    <Label active className={'mg-left-10'}>惠</Label>
                                                </Col>
                                            </Row>
                                            <Row bottom className={'pd-bottom-15 pd-top-0'}>
                                                <Col className={'no-pd-top-bottom'}>
                                                    <Star Rate={80} size={'16px'} />
                                                    <h5 className={'ft-gray'}  style={{verticalAlign:'top'}}>
                                                        大客户</h5>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Item>
                                </PanelContent>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
                <Grid style={ styleObj['buttonGroup']}>
                    <Col sm={13}>
                        <Button radius egSize="sm" egStyle="white" onClick={this.buttonTest}>报错</Button>
                    </Col>
                    <Col  sm={13}>
                        <Button radius egSize="sm" egStyle="white"  onClick={this.buttonTest}>添加联系人</Button>
                    </Col>
                    <Col sm={13}>
                        <Button radius egSize="sm" egStyle="white"  onClick={this.buttonTest}>拜访</Button>
                    </Col>
                    <Col sm={13} end>
                        <Button radius egSize="sm" onClick={this.buttonTest}>释放</Button>
                    </Col>

                </Grid>
            </div>
        );
    }
}


