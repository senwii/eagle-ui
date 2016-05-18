/**
 * Created by panqianjin on 15/11/17.
 */
import React,{Component} from 'react';
import Tooltip from '../../../src/Tooltip.js';
import Button from '../../../src/Button.js';
import TooltipPanel from '../../../src/TooltipPanel.js';
let Demo = class Demo extends Component{
    constructor(){
        "use strict";
        super();
        this.state={
        test:'_'
        }
    }
    change(){
        setTimeout(()=>this.setState({
            test:'hello world hello worldhello worldhello worldhello worldhello world'
        }));
    }
    render(){
        return (
            <div>
            <div style={{width:'300px',marginBottom:'200px'}} onClick={()=>this.change()}>
                <TooltipPanel direction='bottom'>
                <Button radius egSize="sm" egStyle="warning">应在下边2</Button>
                </TooltipPanel>
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