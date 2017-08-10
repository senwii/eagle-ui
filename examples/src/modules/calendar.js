/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';
import {Input, CalendarPanel, Button, Grid, Row, Col} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class Calendar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            show:false,
            defaultDate:'2016-12-1'
        };
        setTimeout(function(){
            this.setState({
                defaultDate:'2017-2-12'
            });
        }.bind(this),2000);
    };

    focus(){
        this.setState({
            show:true
        });
    }
    blur(){
        this.setState({
            show:false
        });
    }
    changeDate(){
        this.setState({
            defaultDate: '2018-03-04'
        });
    }
    getvalue(val){
        this.setState({
            defaultDate: val
        });
    }
    render(){
        return (
            <div style={{paddingBottom: '250px'}}>
                <DemoLayout title="日历组件">
                    <DemoItem title="默认样式">
                        <CodeShow>
                            <Code code={getFile('calendar-demo1')}/>
                        </CodeShow>
                        <DemoShow>
                            <CalendarPanel>
                                <Input placeholder="请选择日期"  icon="calendar" />
                            </CalendarPanel>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="选择年月">
                        <CodeShow>
                            <Code code={getFile('calendar-demo2')}/>
                        </CodeShow>
                        <DemoShow>
                            <CalendarPanel calendarType="yearMonth" format="yyyy年MM月">
                                <Input placeholder="请选择日期"  icon="calendar" />
                            </CalendarPanel>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="起止日期限制">
                        <CodeShow>
                            <Code code={getFile('button-demo3')}/>
                        </CodeShow>
                        <DemoShow>
                            <CalendarPanel defaultDate={this.state.defaultDate} startDate="2017-02-05" endDate="2017-10-01" getValueCallback={::this.getvalue}>
                                <Input placeholder="请选择日期"/>
                            </CalendarPanel>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="日期格式化">
                        <CodeShow>
                            <Code code={getFile('calendar-demo4')}/>
                        </CodeShow>
                        <DemoShow>
                            <CalendarPanel format="yyyy年MM月dd日">
                                <Input placeholder="请选择日期"  icon="calendar" />
                            </CalendarPanel>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="改变时间">
                        <CodeShow>
                            <Code code={getFile('calendar-demo5')}/>
                        </CodeShow>
                        <DemoShow>
                            <Button onClick={::this.changeDate} >改变时间</Button>
                            <br/>
                            <br/>
                            <CalendarPanel defaultDate={this.state.defaultDate} ref='cp' format="yyyy年MM月dd日">
                                <Input placeholder="请选择日期"  icon="calendar"/>
                            </CalendarPanel>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="自定义定位">
                        <CodeShow>
                            <Code code={getFile('calendar-demo6')}/>
                        </CodeShow>
                        <DemoShow>
                            <Grid>
                                <Row>
                                    <Col sm={3}>
                                        <CalendarPanel ref='cp-top' format="yyyy年MM月dd日" direction='top'>
                                            <Input placeholder="上部"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={3}>
                                        <CalendarPanel ref='cp-right' format="yyyy年MM月dd日" direction='right'>
                                            <Input placeholder="右边"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={3}>
                                        <CalendarPanel ref='cp-down' format="yyyy年MM月dd日" direction='down'>
                                            <Input placeholder="底部"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={3}>
                                        <CalendarPanel ref='cp-left' format="yyyy年MM月dd日" direction='left'>
                                            <Input placeholder="左边"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={3}/>
                                    <Col sm={6}>
                                        <CalendarPanel ref='cp-auto-1' format="yyyy年MM月dd日">
                                            <Input placeholder="自动定位"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={3}/>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <CalendarPanel ref='cp-left-1' format="yyyy年MM月dd日" direction='left'>
                                            <Input placeholder="定位到左边，但是左边位置不足"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={4}/>
                                    <Col sm={4}>
                                        <CalendarPanel ref='cp-right-1' format="yyyy年MM月dd日" direction='right'>
                                            <Input placeholder="定位到右边，但是右边位置不足"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={3}>
                                        <CalendarPanel ref='cp-auto-2' format="yyyy年MM月dd日">
                                            <Input placeholder="自动定位，区别左右"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={6}/>
                                    <Col sm={3}>
                                        <CalendarPanel ref='cp-auto-3' format="yyyy年MM月dd日">
                                            <Input placeholder="自动定位，区别左右"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <CalendarPanel ref='cp-auto-4' format="yyyy年MM月dd日">
                                            <Input placeholder="自动定位，区别左右"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                    <Col sm={6}>
                                        <CalendarPanel ref='cp-auto-5' format="yyyy年MM月dd日">
                                            <Input placeholder="自动定位，区别左右"  icon="calendar"/>
                                        </CalendarPanel>
                                    </Col>
                                </Row>
                            </Grid>
                        </DemoShow>
                    </DemoItem>
                </DemoLayout>
            </div>
        );
    }
}