/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';
import {Input, CalendarPanel, Button, Grid, Row, Col,TimePicker,DateTimePicker} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class Calendar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            dateTime:''
        };

    };
    render(){
        return (
            <div style={{paddingBottom: '250px'}}>
                <DemoLayout title="日期时间选择器">
                    <DemoItem title="默认">
                        <CodeShow>
                            <Code code={getFile('datetimepicker-demo1')}/>
                        </CodeShow>
                        <DemoShow>
                            <DateTimePicker>
                                <Input placeholder="请选择日期时间"  icon="calendar" />
                            </DateTimePicker>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="日期选择器">
                        <CodeShow>
                            <Code code={getFile('datetimepicker-demo2')}/>
                        </CodeShow>
                        <DemoShow>
                            <DateTimePicker format="yyyy年MM月dd日">
                                <Input placeholder="请选择日期时间"  icon="calendar" />
                            </DateTimePicker>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="时间选择器">
                        <CodeShow>
                            <Code code={getFile('datetimepicker-demo3')}/>
                        </CodeShow>
                        <DemoShow>
                            <DateTimePicker format="hh:mm">
                                <Input placeholder="请选择日期时间"  icon="clock" />
                            </DateTimePicker>
                        </DemoShow>
                    </DemoItem>
                    <DemoItem title="默认值更改">
                        <CodeShow>
                            <Code code={getFile('datetimepicker-demo4')}/>
                        </CodeShow>
                        <DemoShow>
                            <DateTimePicker defaultValue={this.state.dateTime} getValueCallback={(val)=>{
                                this.setState({
                                    dateTime:val
                                });
                            }}>
                                <Input placeholder="请选择日期时间"  icon="clock" />
                            </DateTimePicker>
                        </DemoShow>
                    </DemoItem>

                </DemoLayout>
            </div>
        );
    }
}