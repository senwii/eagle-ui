import React,{Component} from 'react';
import {Tabset,Tab,CalendarPanel,ValidatorPanel,Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from 'eagle-ui.js';
let Demo = class Demo extends Component{
    constructor(props,context){
        super(props,context);
        this.rules = {
            calendar:{
                required:true
            },
            userName:{
                required:true
            },
            checkbox:{
                required:true,
                //自定义规则
                isValueToNumber:{
                    text:'value值不是字符串',
                    rule:function(value){
                        console.dir(value);
                        return true;
                    }
                }
            },
            date:{
                date:true
            },
            number:{
                number:true,
                digits:true
            },
            equalTo:{
                digits:true,
                equalTo:{
                    params:'[name="number"]'
                }
            },
            minlength:{
                minlength:{
                    params:10
                },
                maxlength:{
                    params:15
                }
            },
            email:{
                email:true
            }
        };
        this.state={
            showTab:0,
            update:'uid',
            show:false
        };
    }
    submit(vals){
        alert('验证成功'+JSON.stringify(vals));
    }
    render(){
        return (
            <Panel>
                <Dialog id="demo2" egSize="sm" title="表单验证">
                    <Grid>
                        <ValidatorPanel rules={this.rules} submitElement="#ssubmit" direction="top" id="testDialogFrom" submitCallback={::this.submit}>
                            <Row>
                                <Col>
                                    <Input placeholder="请输入姓名"  name="userName" data-validate />

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input placeholder="请输入有效的号码" name="number" data-validate />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input placeholder="请输入有效的号码" name="equalTo" data-validate />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input placeholder="最大最小字符10-15" name="minlength" data-validate />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input placeholder="请输入您的email" name="email" data-validate />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button radius egSize="xs" id="ssubmit" >点我提交表单</Button>
                                </Col>
                            </Row>
                        </ValidatorPanel>
                    </Grid>
                </Dialog>
            </Panel>
        );
    }
};