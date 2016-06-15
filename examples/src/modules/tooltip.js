/**
 * Created by panqianjin on 15/11/17.
 */
import React,{Component} from 'react';
import Tooltip from '../../../src/Tooltip.js';
import Button from '../../../src/Button.js';
import TooltipPanel from '../../../src/TooltipPanel.js';
let Demo = class Demo extends Component {
    constructor() {
        "use strict";
        super();
        this.state = {
            test: '_'
        };

        setTimeout(function () {
            this.setState({
                test: 'testaaaatestaaaatestaaaatestaaaatestaaaatestaaaatestaaaatestaaaatestaaaatestaaaatestaaaa'
            });
        }.bind(this), 2000);
    }

    change() {
        setTimeout(()=>this.setState({
            test: 'hello world hello worldhello worldhello worldhello worldhello world'
        }));
    }

    render() {
        return (
            <div>
                <div id='a' style={{width:'500px',height:'500px',border:'1px solid #f00',position:'relative'}}>
                    <div style={{width:'300px',height:'300px',background:'#fff',position:'absolute'}}
                         onClick={()=>this.change()}>
                        <TooltipPanel direction='top' wapper='a'>
                            <Button radius egSize="sm" egStyle="warning">应在上，边界为a</Button>
                        </TooltipPanel>
                    </div>
                    <div style={{marginTop:'300px'}}>
                        <TooltipPanel direction='left' wrapper='a'>
                            <Button radius egSize="sm" egStyle="warning">应在左，边界为a</Button>
                        </TooltipPanel>
                        <TooltipPanel direction='right' style={{marginLeft:'250px'}}>
                            <Button radius egSize="sm" egStyle="warning">应在右，边界为可视窗口</Button>
                        </TooltipPanel>
                    </div>
                </div>
                <div style={{width:'300px',display: 'inline-block'}}>sadasda</div>
                <TooltipPanel direction='left' style={{marginLeft:'100px'}}>
                    <Button radius egSize="sm" egStyle="warning">应在左边</Button>
                </TooltipPanel>
                <TooltipPanel direction='right' style={{marginLeft:'100px'}}>
                    <Button radius egSize="sm" egStyle="warning">应在右边</Button>
                </TooltipPanel>
                <TooltipPanel direction='down' style={{marginLeft:'100px'}} msg={<div>hello world,hello world</div>}>
                    <Button radius egSize="sm" egStyle="warning">应在下边</Button>
                </TooltipPanel>

                <div>
                    <TooltipPanel direction='left' msg={<div>hello world,hello world</div>}>
                        <Button radius egSize="sm" egStyle="warning">应在左边2</Button>
                    </TooltipPanel>

                    <div style={{marginTop:'30px'}}>
                        <TooltipPanel direction='right' msg={<div>hello world,hello world</div>}>
                            <Button radius egSize="sm" egStyle="warning">应在右边2</Button>
                        </TooltipPanel>
                    </div>
                    <TooltipPanel direction='top'
                                  style={{float:'left',marginLeft:'300px'}}
                                  msg={this.state.test}>
                        <Button radius egSize="sm" egStyle="warning">上边应在上边</Button>
                    </TooltipPanel>
                </div>
            </div>)
    }
};
export default Demo;