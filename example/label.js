/**
 * Created by mac on 15/11/4.
 */
import React from 'react';
import {Label,LabelGroup} from '../index.js';

function show(){
    console.dir('111');
}

React.render(
    <LabelGroup clickCallback={show} url="" defaultChecked="全部" title="类别">
        <Label className="all">全部</Label>
        <Label>啊哈，你是猪</Label>
        <Label>银行帐异常(16)</Label>
        <Label>银异常(6)</Label>
        <Label>银行帐号异常(26)</Label>
        <Label>银行帐号支常(6)</Label>
        <Label>银行帐号支付异常(6)</Label>
        <Label>啊哈，你是猪2</Label>
        <Label>银行帐异常1(16)</Label>
        <Label>银异常3(6)</Label>
        <Label>银行帐号异常4(26)</Label>
        <Label>银行帐号支常6(6)</Label>
        <Label>银行帐号支付异常1(6)</Label>
    </LabelGroup>
    ,document.getElementById('root'));