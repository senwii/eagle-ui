import React,{Component,PropTypes}  from 'react';
import {Col,Item,Row,Grid,Button,Suggestion} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'

export default class Demo extends Component{

    static defaultProps = {
        input: true,
        keys:'bei'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: this.props.input
        }
    }

    query(){
        //可以返回ajax
        return [
            {
                key:'上海',
                value:'shanghai',
                subKey:'10个区'
            },
            {
                key:'北京',
                value:'beijing',
                subKey:'10个区'
            },
            {
                key:'哈尔滨',
                value:'haerbin',
                subKey:'5010个区'
            },
            {
                key:'南京',
                value:'nanjing',
                subKey:'10个区'
            },
            {
                key:'南宁',
                value:'nanning',
                subKey:'120个区'
            },
            {
                key:'天津',
                value:'tianjing',
                subKey:'312310个区'
            },
            {
                key:'深圳',
                value:'shenzhen',
                subKey:'101个区'
            }
        ];
    }

    getValue(value,key,type){
        let stype = {
            'init':'加载时调用',
            'enter':'回车时调用',
            'click':'点击每一项元素时调用'
        };
        document.getElementById('showtip').innerHTML = `<strong>${stype[type]}</strong>的值为：<b>"key":<span class="color-error">${key}</span></b>,<b>"value":<span class="color-error">${value}</span></b>`;
    }

    render(){
        return (
        <DemoLayout title="联想词">
            <DemoItem title="" desc={'queryCallback的形式传入数据'}>
                <CodeShow>
                    <Code code={getFile('suggestion-demo1')}>
                    </Code>
                </CodeShow>
                <DemoShow>
                    <Grid fluid>
                        <Row>
                            <Col>
                                <div id="showtip" className="color-info"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10} layer padding={0}>
                                <Suggestion
                                    getValueCallback={::this.getValue}
                                    queryCallback={::this.query}
                                    icon="search"
                                    iconDirection="left"
                                    placeholder="请输入key搜索" />
                            </Col>
                            <Col sm={2} end padding={0}>
                                <Button type="submit">查询</Button>
                            </Col>
                        </Row>
                    </Grid>
                </DemoShow>
            </DemoItem>
            <DemoItem title="子标签的形式传入数据" desc={''}>
                <CodeShow>
                    <Code code={getFile('suggestion-demo2')}>
                    </Code>
                </CodeShow>
                <DemoShow>
                    <Grid fluid>
                        <Row>
                            <Col>
                                <div id="showtip" className="color-info"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10} layer>
                                <Row>
                                    <Col sm={10} end>
                                        <Suggestion
                                            icon="search"
                                            iconDirection="left"
                                            placeholder="请输入测、测试、试进行搜索">
                                            <Item value="测试测试" subKey="222222">
                                                测试测试
                                            </Item>
                                            <Item value="测试" subKey="达到">
                                                测试
                                            </Item>
                                            <Item value="试验" subKey="dsadsad">
                                                试验
                                            </Item>
                                            <Item value="测验">
                                                测验
                                            </Item>
                                            <Item value="检测" >
                                                检测
                                            </Item>
                                        </Suggestion>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={2}>请输入测、测试、试进行搜索</Col>
                        </Row>
                    </Grid>
                </DemoShow>
            </DemoItem>

        </DemoLayout>
        );
    }
}