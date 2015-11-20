/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';

import {Search,Select, Input,Label,LabelGroup,Grid,Row,Col,Panel,PanelHeader,PanelFooter,PanelContent,Paging} from 'eagle-ui';

let SearchSec= class SearchSec extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={2}>
                        <Select  callback={function(val){alert(val)}}>
                            <item> 北京</item>
                            <item> 上海</item>
                            <item> 南京</item>
                        </Select>
                    </Col>
                    <Col sm={4}>
                        <Search callBack={function(val){alert(val)}}>
                        </Search>
                    </Col>
                    <Col sm={6}>
                    </Col>
                </Row>
            </Grid>

        )
    }
}
let FilterSec= class FilterSec extends Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <LabelGroup title='频道' defaultChecked='全部' clickCallback={this.show} >
                    <Label>全部</Label>
                    <Label>美食</Label>
                    <Label>休闲娱乐</Label>
                    <Label>景点</Label>
                    <Label>购物</Label>
                    <Label>丽人</Label>
                    <Label>结婚</Label>
                    <Label>亲子</Label>
                    <Label>教育培训</Label>
                    <Label>运动健身</Label>
                    <Label>酒店</Label>
                    <Label>家装</Label>
                    <Label>酒店</Label>
                    <Label>爱车</Label>
                    <Label>酒店</Label>
                    <Label>医疗健康</Label>
                </LabelGroup>
                <LabelGroup title='行政区' defaultChecked='全部' clickCallback={this.show} >
                    <Label>全部</Label>
                    <Label>卢湾区</Label>
                    <Label>徐汇区</Label>
                    <Label>静安区</Label>
                    <Label>长宁区</Label>
                    <Label>闵行区</Label>
                    <Label>浦东新区</Label>
                    <Label>黄浦区</Label>
                    <Label>普陀区</Label>
                    <Label>闸北区</Label>
                    <Label>虹口区</Label>
                    <Label>杨浦区</Label>
                    <Label>宝山区</Label>
                </LabelGroup>

            </div>
        )
    }
}
var page=1;
let CardListPanel = class CardListPanel extends Component{

    constructor(props,context){
        super(props,context);
    }
    show(){
        console.debug(1);
    }
    render(){
        return (
            <Panel>
                <PanelHeader>
                    <Input  type="checkbox" checked  disabled={true}  />
                    <Input  type="checkbox"  disabled={true}   />
                    <Input  type="checkbox"   />
                    <Input  type="checkbox" checked  />
                </PanelHeader>
                <PanelContent padding={false}>
                    <Grid>
                        <Row>
                            <Col sm={1}>
                                <Input label=''  type="checkbox"  />
                            </Col>
                            <Col sm={10}>
                                <div className='shop-card'>
                                    <h1 className='shop-card-title inline-block'>
                                        西贝莜面村（中山公园店）

                                    </h1>
                                    <Label error radius>运营下线</Label>
                                    <div>
                                        <span className='row-key'>方案ID：</span><span className='row-value'>21355</span>
                                        <span className='row-key'>负责人：</span><span className='row-value'>张三丰</span>
                                        <span className='row-key'>城市：</span><span className='row-value'>上海</span>
                                        <span className='row-key'>售卖时间：</span><span className='row-value'>2014-2015</span>
                                        <span className='row-key'>售卖量：</span><span className='row-value'>0</span>
                                    </div>
                                    <div>
                                        <span className='row-key'>客户：</span><span className='row-value'></span>
                                        <span className='row-key'>已分配（王卓轩 2015-02-01 14:22）</span>
                                    </div>
                                    <div>
                                        <LabelGroup simple clickCallback={this.show} >
                                            <Label>流程历史</Label>
                                            <Label>编辑</Label>
                                            <Label>删除</Label>
                                            <Label>复制</Label>
                                        </LabelGroup>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={1}>审批通过</Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <Input label=''  type="checkbox" checked  />
                            </Col>
                            <Col sm={10}>
                                <div className='shop-card'>
                                    <h1 className='shop-card-title inline-block'>
                                        西贝莜面村（中山公园店）

                                    </h1>
                                    <Label success radius>售卖中</Label>
                                    <div>
                                        <span className='row-key'>方案ID：</span><span className='row-value'>21355</span>
                                        <span className='row-key'>负责人：</span><span className='row-value'>张三丰</span>
                                        <span className='row-key'>城市：</span><span className='row-value'>上海</span>
                                        <span className='row-key'>售卖时间：</span><span className='row-value'>2014-2015</span>
                                        <span className='row-key'>售卖量：</span><span className='row-value'>0</span>
                                    </div>
                                    <div>
                                        <span className='row-key'>客户：</span><span className='row-value'></span>
                                        <span className='row-key'>已分配（王卓轩 2015-02-01 14:22）</span>
                                    </div>
                                    <div>
                                        <LabelGroup simple clickCallback={this.show} >
                                            <Label>流程历史</Label>
                                            <Label>编辑</Label>
                                            <Label>删除</Label>
                                            <Label>复制</Label>
                                        </LabelGroup>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={1}>审批通过</Col>
                        </Row>

                    </Grid>
                </PanelContent>
                <PanelFooter>
                    <Paging currentPage={page} total={1024} />
                </PanelFooter>
            </Panel>

        );
    }
}

ReactDOM.render(
    <Panel className='page-Panel'>
        <PanelContent>
            <SearchSec />
            <FilterSec />
            <CardListPanel />
        </PanelContent>
    </Panel>
    ,document.getElementById('root'));


