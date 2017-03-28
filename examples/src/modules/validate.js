/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import {Tabset,Tab,CalendarPanel,ValidatorPanel,ValidatorWrapper,Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'
import Code, {getFile} from '../libs/Code';
let Demo = class Demo extends Component{
    constructor(props,context){
        super(props,context);
        this.rules = {
            //key对应的是表单元素的name
            calendar:{
                //组件默认规则
                required:true
            },
            userName:{
                required:true
            },
            checkbox:{
                required:true,
                //自定义规则
                isValueToNumber:{
                    text:'value值不是数字',
                    rule:function(value){
                        return !isNaN(value-0);
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

    show(value,text,target,active){
        console.dir(value);
    }
    getDialog(d){
        //this.dialog = d;
    }
    change(value){
       this.setState({
           showTab:value,
           update:'uid'+(+new Date())
       });

    }
    submit(vals){
        alert('验证成功'+JSON.stringify(vals));
    }
    showMask(){
        Dialog.mask('demo2');
    }
    render(){
        return (
            <DemoLayout title="验证控件">
                <DemoItem title="非必填项">
                    <CodeShow><Code code={getFile('validate-demo1')}/></CodeShow>
                    <DemoShow>
                        <ValidatorPanel rules={this.rules} submitElement="#submit1" direction="right" id="testFrom" update={this.state.update} submitCallback={::this.submit}>
                            <CheckboxGroup>
                                <Input  type="checkbox" label='1'  name="checkbox" value="1"  data-validate />
                                <Input  type="checkbox" label='2'  name="checkbox" value="2" data-validate  />
                                <Input  type="checkbox" label='3'  name="checkbox" value="3" data-validate  />
                                <Input  type="checkbox" label='4a'  name="checkbox" value="4a" data-validate  />
                            </CheckboxGroup>
                            <Row>
                                <Col>
                                    <CalendarPanel>
                                        <Input placeholder="请选择日期" icon="calendar" name="date" data-validate />
                                    </CalendarPanel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input placeholder="请输入手机号码" name="number" data-validate />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input placeholder="请再次确认手机号码" name="equalTo" data-validate />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button radius egSize="xs" id="submit1" >点我提交表单</Button>
                                </Col>
                            </Row>
                        </ValidatorPanel>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="必填项">
                    <CodeShow>
                        <Code code={getFile('validate-demo2')}/>
                    </CodeShow>
                    <DemoShow>
                        <ValidatorPanel rules={this.rules} submitElement="#submit2" direction="right" id="testFrom" update={this.state.update} submitCallback={::this.submit}>
                            <Row>
                                <Col>
                                    <Input placeholder="请输入姓名"  name="userName" data-validate />
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
                                    <Button radius egSize="xs" id="submit2" >点我提交表单</Button>
                                </Col>
                            </Row>
                        </ValidatorPanel>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="弹出验证表单">
                    <CodeShow>
                        <Code code={getFile('validate-demo3')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.showMask}>弹出验证表单</Button>
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
                    </DemoShow>
                </DemoItem>


                <DemoItem title="ValidatorWrapper">
                    <CodeShow>
                        <Code code={getFile('validate-demo4')}/>
                    </CodeShow>
                    <DemoShow>
                        <ValidatorWrapper
                            rules={{
                                userName:{
                                    required:true
                                }}} >
                            <Input placeholder="请输入姓名"  name="userName" data-validate />
                        </ValidatorWrapper>
                        <br />
                        <ValidatorWrapper
                            rules={{
                                minlength:{
                                    minlength:{
                                    params:10
                                 },
                                 maxlength:{
                                     params:15
                                 }
                             }   }} >
                            <Input placeholder="最大最小字符10-15" name="minlength" data-validate />
                        </ValidatorWrapper>
                    </DemoShow>
                </DemoItem>

            </DemoLayout>
        );
    }
};
export default Demo;