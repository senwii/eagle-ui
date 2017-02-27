/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import {Label,LabelGroup,Panel,Grid,Row,Col,PanelContent} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'
export default class Demo extends Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <DemoLayout title="标签">
                <DemoItem title="标签样式">
                    <CodeShow>
                        <Code code={getFile('label-demo1')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <Grid>
                            <Row>
                                <Col sm={2}>
                                    <Label egStyle="error">error</Label>
                                </Col>
                                <Col sm={2}>
                                    <Label egStyle="success">success</Label>
                                </Col>
                                <Col sm={2}>
                                    <Label egStyle="warning">warning</Label>
                                </Col>
                                <Col sm={2}>
                                    <Label egStyle="danger">danger</Label>
                                </Col>
                                <Col sm={2}>
                                    <Label>default</Label>
                                </Col>
                                <Col sm={2}>
                                    <Label disabled>disabled</Label>
                                </Col>
                            </Row>
                        </Grid>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="标签尺寸">
                    <CodeShow>
                        <Code code={getFile('label-demo2')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <Grid>
                            <Row>
                                <Col sm={4}>
                                    <Label egStyle="success" egSize="xs">small</Label>
                                </Col>
                                <Col sm={4}>
                                    <Label egStyle="success" egSize="sm">middle</Label>
                                </Col>
                                <Col sm={4}>
                                    <Label egStyle="success" egSize="lg">large</Label>
                                </Col>
                            </Row>
                        </Grid>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="egType设置为simple的标签组">
                    <CodeShow>
                        <Code code={getFile('label-demo3')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <LabelGroup egType="simple"
                                    activeCallback={
                                            function(value,text,target,active){
                                                console.log(value,text,target,active);
                                            }}>
                            <Label value="all">全部</Label>
                            <Label value="luwan">卢湾区</Label>
                            <Label value="xuhui">徐汇区</Label>
                            <Label value="jinan">静安区</Label>
                            <Label value="changning">长宁区</Label>
                            <Label value="minhang">闵行区</Label>
                        </LabelGroup>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="egType设置为default的标签组">
                    <CodeShow>
                        <Code code={getFile('label-demo4')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <LabelGroup spacing={94}
                                    title='行政区'
                                    egType='default'
                                    defaultChecked='卢湾区'
                                    activeCallback={
                                            function(value,text,target,active){
                                                console.log(value,text,target,active);
                                            }}
                            >
                            <Label value="0" className="all">全部</Label>
                            <Label value="1">卢湾区</Label>
                            <Label value="10">徐汇区</Label>
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
                    </DemoShow>
                </DemoItem>
                <DemoItem title="egType设置为form的标签组">
                    <CodeShow>
                        <Code code={getFile('label-demo5')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <Row>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1"><h1 className="color-error">9112</h1></Label>
                                </LabelGroup>
                            </Col>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1"><h1 className="color-error">9112</h1></Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1">121212121</Label>
                                </LabelGroup>
                            </Col>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1"><h1 className="color-error">9112</h1></Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                    </DemoShow>
                </DemoItem>

            </DemoLayout>

        );
    }
};
