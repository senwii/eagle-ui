import React,{Component} from 'react';
import {Tooltip,Button,TooltipPanel} from 'eagle-ui.js';
let Demo = class Demo extends Component{
    render(){
        return (
            <div>
                <div style={{width:'300px',marginBottom:'200px'}}>sadasda
                    <TooltipPanel direction='top'>
                        <Button radius egSize="sm" egStyle="warning">应在上边2</Button>
                    </TooltipPanel>
                </div>
                <div style={{width:'300px',display: 'inline-block'}}>sadasda</div>
                <TooltipPanel direction='left' style={{marginLeft:'100px'}}>
                    <Button radius egSize="sm" egStyle="warning">应在左边</Button>
                </TooltipPanel>
                <TooltipPanel direction='right' style={{marginLeft:'100px'}}>
                    <Button radius egSize="sm" egStyle="warning">应在右边</Button>
                </TooltipPanel>
                <TooltipPanel direction='down' style={{marginLeft:'100px'}}>
                    <Button radius egSize="sm" egStyle="warning">应在下边</Button>
                </TooltipPanel>
                <TooltipPanel direction='top'>
                    <Button radius egSize="sm" egStyle="warning">应在上边</Button>
                </TooltipPanel>
                <div>
                    <TooltipPanel direction='left'>
                        <Button radius egSize="sm" egStyle="warning">应在左边2</Button>
                    </TooltipPanel>
                    <div style={{float:'right'}}>
                        <TooltipPanel direction='right'>
                            <Button radius egSize="sm" egStyle="warning">应在右边2</Button>
                        </TooltipPanel>
                    </div>
                </div>
            </div>)
    }
};
