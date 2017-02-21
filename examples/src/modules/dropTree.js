
import React, { Component ,PropTypes} from 'react';
import MultiDropDown from "eg-drop-tree";
import {Button} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'

export default class Demo extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            mockMultiDropData:[],
            selected:'1000034'
        }
    }
    componentDidMount(){
        var self=this;
        setTimeout(function(){
            self.setState({
                mockMultiDropData:[
                    {
                        "typeId": 2,
                        "parentTypeId": 0,
                        "typeName": "测试",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 1000023,
                                "parentTypeId": 10005,
                                "typeName": "线上测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            }, {
                                "typeId": 1000022,
                                "parentTypeId": 10005,
                                "typeName": "线上测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000024,
                                "parentTypeId": 10005,
                                "typeName": "ppe测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000025,
                                "parentTypeId": 10005,
                                "typeName": "beta测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 3,
                        "parentTypeId": 0,
                        "typeName": "POI相关",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10014,
                                "parentTypeId": 3,
                                "typeName": "评价评分",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000034,
                                        "parentTypeId": 10014,
                                        "typeName": "美团侧评价",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37743,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000035,
                                        "parentTypeId": 10014,
                                        "typeName": "点评侧评价",
                                        "leadingAnswer": "点评评价的恶意差评、炒作的举报和申诉请到<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://trust.dianping.com\" target=\"_blank\">http://trust.dianping.com</a>提交反馈",
                                        "level": 3,
                                        "firstOwnerId": 20779,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000036,
                                        "parentTypeId": 10014,
                                        "typeName": "美团侧星级评分",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 25305,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000037,
                                        "parentTypeId": 10014,
                                        "typeName": "点评侧评分",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 34348,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 1000026,
                                "parentTypeId": 10006,
                                "typeName": "门店基本信息/地图报错",
                                "leadingAnswer": "\n【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000027,
                                "parentTypeId": 10007,
                                "typeName": "门店营业状态报错",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000028,
                                "parentTypeId": 10008,
                                "typeName": "举报重复/拆分/美大关联",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000029,
                                "parentTypeId": 10009,
                                "typeName": "门店品牌连锁",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000030,
                                "parentTypeId": 10010,
                                "typeName": "举报虚假门店",
                                "leadingAnswer": "【举报虚假门店】需要提供对应的shop ID及对应的举证，不接受只提供商户名的虚假门店报错；一个shop ID至少对应一张能证明门店确实虚假的照片，即提供的照片可以证明在该地址上的确不存在该门店，因此照片需要能同时将该地址和门头照拍下来，如果一张照片无法同时体现地址和门头照，可以分成有共同之处的两张照片，提供以上资质到qc.mdc@meituan.com审核处理",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000031,
                                "parentTypeId": 10011,
                                "typeName": "门店首图展示",
                                "leadingAnswer": "美团首图设置请到以下链接自行报错，1个工作日内17:00前处理完毕\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/img\" target=\"_blank\">http://mdc.sankuai.com/web/report/img</a>",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000032,
                                "parentTypeId": 10012,
                                "typeName": "门店品类划分",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在MDC门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n以上报错都会在1个工作日内17:00前处理完毕",
                                "level": 3,
                                "firstOwnerId": 37434,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000033,
                                "parentTypeId": 10013,
                                "typeName": "门店罚款相关",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000038,
                                "parentTypeId": 10015,
                                "typeName": "其他POI问题",
                                "leadingAnswer": "闪惠二维码自助重置，请点击此链接自助恢复扫码功能，处理后立即生效：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://bd.hui.dper.com/hui/poi/shop_query\" target=\"_blank\">http://bd.hui.dper.com/hui/poi/shop_query</a>\n补充点评侧商区体系结构，请在阿波罗商机（门店）标签→【POI报错】入口→新增商区结构提交报错，每周三迭代上线，可每周四查看：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a>",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    }
                ]
            }  )
        },0);
    }
    render(){
        let _this=this;
        return (
        <DemoLayout title="树状层级下拉菜单">
            <DemoItem title="" desc={''}>
                <CodeShow>
                    <Code code={getFile('dropTree')}>
                    </Code>
                </CodeShow>
                <DemoShow>
                    <div style={{fontSize:'12px',display:'inline-block',width:'200px'}}>
                        <MultiDropDown selected={this.state.selected}
                                       onChange={
                                        function(e){
                                            _this.setState({
                                            selected:e  })
                                        }

                                   }
                                       dropDownData={this.state.mockMultiDropData}
                                       keyName='typeName'
                                       leafName='leaf'
                                       title="树状列表选择"
                                       ref="MultiDropDown"/>
                    </div>
                </DemoShow>
            </DemoItem>
        </DemoLayout>
        );
    }
    getDropDownData(type){
        console.log(this.refs[type].getParams());
    }
}

