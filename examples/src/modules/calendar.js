/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';
import {Input, CalendarPanel, Button} from 'eagle-ui';
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
      this.refs.cp.dateChange('2015-03-02');
    }
    getvalue(val){
        this.setState({
            defaultDate: val
        });
    }
    render(){

        return (
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
                        <CalendarPanel calendarType="yearMonth">
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
                        <CalendarPanel ref='cp' format="yyyy年MM月dd日">
                            <Input placeholder="请选择日期"  icon="calendar"/>
                        </CalendarPanel>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        );
    }
}