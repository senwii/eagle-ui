import React,{Component,PropTypes} from 'react';
import {RadioGroup,Input,Select,FormGroup,CheckboxGroup,Grid,Row,Col,PanelContent,Panel} from 'eagle-ui.js';
let Demo= class Demo extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            show:false
        }
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
    getValueCallback(val){
        alert(val);
        console.dir(val);
    }
    getValue(val){
        alert(val);
    }
    change(e){
        alert(e.target.value);
        console.dir(e.target.value);
    }
    render(){
        return (
            <Panel>
                <PanelContent>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <Col sm={6}>
                                    <RadioGroup defaultChecked="石榴" name="radio-test">
                                        <Input  type="radio"  label="石榴" value="石榴" />
                                        <Input  type="radio"  label="橘子" value="橘子"  />
                                        <Input  type="radio"  label="苹果" value="苹果" />
                                    </RadioGroup>
                                </Col>
                                <Col sm={6}>
                                    <RadioGroup defaultChecked="鸡蛋" name="radio-foot" getValueCallback={this.getValueCallback}>
                                        <Input  type="radio"  label="大白菜" value="大白菜" />
                                        <Input  type="radio"  label="鸡蛋" value="鸡蛋" disabled={true}  />
                                        <Input  type="radio"  label="猪肉" value="猪肉" />
                                        <Input  type="radio"  label="牛肉" value="牛肉" />
                                        <Input  type="radio"  label="鱼肉" value="鱼肉" disabled={true} />
                                    </RadioGroup>
                                </Col>
                            </Col>
                        </Row>
                    </Grid>
                </PanelContent>
            </Panel>
        );
    }
};
