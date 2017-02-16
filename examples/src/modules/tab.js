/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import {Tab,Tabset} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'

let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);

        this.state={
            tabIndex:0
        };
    }
    componentDidMount(){
        let _this=this;
        setTimeout(()=>{
            _this.setState({
                tabIndex:3
            })
        },2000)
    }
    callback(index){
        console.log('i',index);
        if(this.state.tabIndex!==index){
            this.setState({
                tabIndex:index
            });
        }
    }

    tab3(){
        if(this.state.tabIndex==2){
            return (<div>tab3</div>);
        }
    }
    tab2(){
        if(this.state.tabIndex==1){
            return (<div>tab2</div>);
        }
    }
    tab1(){
        if(this.state.tabIndex==0){
            return (<div>tab1</div>);
        }
    }


    render(){
        return (
            <div>
                <DemoLayout title="Tab">
                    <DemoItem title="" desc={'activeTab属性从0开始计'}>
                        <CodeShow>
                            <Code code={getFile('tab')}>
                            </Code>
                        </CodeShow>
                        <DemoShow>
                            <Tabset  activeTab={this.state.tabIndex} tabCallback={::this.callback}>
                                <Tab>
                                    {::this.tab1()}
                                </Tab>
                                <Tab heading='tab2'>
                                    {::this.tab2()}
                                </Tab>
                                <Tab heading='tab3'>
                                    {::this.tab3()}
                                </Tab>
                                <Tab heading='tab4'>
                                    tab4
                                </Tab>
                                <Tab heading='tab5'>
                                    tab5
                                </Tab>
                            </Tabset>
                        </DemoShow>
                    </DemoItem>
                </DemoLayout>
            </div>
        );
    }
}

export default Demo;