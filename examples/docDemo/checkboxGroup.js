import React,{Component} from 'react';
import {CheckboxGroup,Grid,Row,Col,PanelContent,Panel,RadioGroup,Input,Select,FormGroup,} from 'eagle-ui.js';
let demo = class extends Component{
    getValue(val){
        alert(val);
    }
    change(e){
        alert(e.target.value);
    }
    render(){
        return (
            <CheckboxGroup>
            <Input  type="checkbox" checked  disabled={true}  />
            <Input  type="checkbox"  disabled={true}   />
            <Input  type="checkbox" getValueCallback={::this.getValue}  value="ccc"  />
            <Input  type="checkbox" checked onChange={::this.change} value="bbb"  />
            </CheckboxGroup>)
    }
};