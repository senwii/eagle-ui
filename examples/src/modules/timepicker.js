/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';
import {Input,  Button, Grid, Row, Col,TimePicker} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class Calendar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            time:''
        };

    }
    render(){
        return (
            <div style={{paddingBottom: '250px'}}>
                <DemoLayout title="时间选择器">
                    <DemoItem title="默认">
                        <CodeShow>
                            <Code code={getFile('timepicker-demo1')}/>
                        </CodeShow>
                        <DemoShow>
                            <TimePicker getValueCallback={(val)=>{this.setState({time:val}); }} defaultValue={this.state.time ||''} format="HH:mm">
                                <Input placeholder="请选择时间"  icon="clock" />
                            </TimePicker>
                        </DemoShow>
                    </DemoItem>


                </DemoLayout>
            </div>
        );
    }
}