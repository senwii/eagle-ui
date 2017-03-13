/**
 * Created by mac on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import {Slider} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class SliderDemo extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            val:''
        };

    }
    getValueCallback(val){
        this.setState({
            val:val
        });
    }
    render(){
        return (
            <DemoLayout title="滑块">
                <DemoItem title="基本使用">
                    <CodeShow>
                        <Code code={getFile('slider-demo1')} />
                    </CodeShow>
                    <DemoShow>
                        <Slider getValueCallback={::this.getValueCallback} initCallback={(val)=>{console.dir(val);}} />
                        <div>滑动输出的值：<strong style={{color:'red'}}>{this.state.val}</strong></div>
                    </DemoShow>
                </DemoItem>

            </DemoLayout>
        );
    }
}