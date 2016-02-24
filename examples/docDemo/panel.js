import React,{Component} from 'react';
import {Row,Col,Grid,
    Panel,PanelHeader,PanelFooter,PanelContent,
    Input,Label,LabelGroup,
    FormGroup,RadioGroup,CheckboxGroup,Select} from 'eagle-ui.js';
let Demo = class Demo extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <Grid fluid>
                <Row>
                    <Col>
                        <h3>panel嵌套<small>通过设置panel的heading属性达到此效果</small></h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel heading="我是标题">
                            <PanelContent>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={2}>姓名</Col>
                                                <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>姓名</Col>
                                                <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>性别</Col>
                                                <Col sm={10}>
                                                    <RadioGroup defaultChecked="男" name="radio-sex">
                                                        <Input  type="radio"  label="男" value="男" />
                                                        <Input  type="radio"  label="女" value="女"  />
                                                    </RadioGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>所在城市</Col>
                                                <Col sm={10} layer>
                                                    <Row style={{margin:0}}>
                                                        <Col sm={4} end>
                                                            <Select placeholder="请选择城市" >
                                                                <item value='bei'>北京</item>
                                                                <item value='shang'>上海</item>
                                                                <item value='nan'>南京</item>
                                                            </Select>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel>
                            <PanelHeader>另一种形式的嵌套</PanelHeader>
                            <PanelContent>
                                <Panel>
                                    <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                    <PanelContent>
                                        <Row>
                                            <Col>
                                                我是内容区
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Panel>
                                                    <PanelHeader>另一种形式的嵌套3</PanelHeader>
                                                    <PanelContent>
                                                        <Row>
                                                            <Col>
                                                                我是内容区
                                                            </Col>
                                                        </Row>
                                                    </PanelContent>
                                                </Panel>
                                            </Col>
                                        </Row>
                                    </PanelContent>
                                </Panel>
                                <Panel>
                                    <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                    <PanelContent>
                                        <Row>
                                            <Col>
                                                我是内容区
                                            </Col>
                                        </Row>
                                    </PanelContent>
                                </Panel>
                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
};


