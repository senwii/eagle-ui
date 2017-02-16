/**
 * Created by slashhuang on 15/12/21.
 */
import React, { Component ,PropTypes} from 'react';
import {Star, Button} from 'eagle-ui';

import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';
export default class StarDemo extends Component {
    getValue() {
        alert('rate is'+this.refs['test'].Rate)
    }
    render(){
        return(
            <DemoLayout title="Star">
                <DemoItem title="不可修改数据">
                    <CodeShow>
                        <Code code={getFile('star-demo1')}/>
                    </CodeShow>
                    <DemoShow>
                        <Star/><br/>
                        <Star rate={50} size={15}/>
                        <br/>
                        <Star rate={60} size={16} />
                        <br/>
                        <Star rate={70} size={17}/>
                        <br/>
                        <Star rate={80} size={18} />
                    </DemoShow>
                </DemoItem>
                <DemoItem title="可鼠标浮动修改数据">
                    <CodeShow>
                        <Code code={getFile('star-demo2')}/>
                    </CodeShow>
                    <DemoShow>
                        <Star rate={90} size={18}  disable={false}/>
                        <br/>
                        <Star rate={10} size={19}  disable={false}/>
                        <br/>
                        <Star rate={20} size={20} disable={false}/>
                        <br/>
                        <Star rate={30} size={21} disable={false}/>
                        <br/>
                        <Star rate={40} size={22} disable={false}/>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="获取star的比率数据">
                    <CodeShow>
                        <Code code={getFile('star-demo3')}/>
                    </CodeShow>
                    <DemoShow>
                        <Star rate={50} size={23} disable={false} ref='test'/>
                        <br/>
                        <br/>
                        <Button onClick={this.getValue.bind(this)}>点击获取星星的红色比率数据</Button>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        )
    }
}

