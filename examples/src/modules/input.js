/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';

import querystring from 'querystring';

import {FormGroup,CheckboxGroup,RadioGroup,Grid,Row,Col,Input} from 'eagle-ui';

import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'


export default class Demo extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            show:false,
            radioValue:'橘子',
            checkBoxValue:false
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
    radioCallback(val){
        this.setState({
            radioValue:val
        })
    }
    checkboxCallback(){
        this.setState({
            checkBoxValue:!this.state.checkBoxValue
        })
    }
    render(){
        let {radioValue,checkBoxValue}=this.state;
        return (
            <DemoLayout title="输入控件">
                <DemoItem title="radio类型" desc={'一般结合RadioGroup组件来用'}>
                    <CodeShow>
                        <Code code={getFile('input-radio')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <Grid>
                            <Row>
                                <Col sm={6}>
                                    <RadioGroup defaultChecked={radioValue}
                                                name="radio-test"
                                                getValueCallback={::this.radioCallback}>
                                        <Input  type="radio"  label="石榴" value="石榴" />
                                        <Input  type="radio"  label="橘子" value="橘子"  />
                                        <Input  type="radio"  label="苹果" value="苹果" />
                                    </RadioGroup>
                                </Col>
                                <Col sm={6}>
                                    已选择了：{this.state.radioValue}
                                </Col>
                            </Row>
                        </Grid>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="chechbox类型" desc={'一般结合CheckboxGroup组件来用'}>
                    <CodeShow>
                        <Code code={getFile('input-checkbox')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <Grid>
                            <Row>
                                <Col sm={12}>
                                    <CheckboxGroup>
                                        <Input label="石榴" type="checkbox" checked />
                                        <Input label="橘子" type="checkbox" disabled={true}   />
                                        <Input label="苹果"  type="checkbox" getValueCallback={function(val,dom){console.log(val,dom)}}  value="apple"  />
                                        <Input label="香蕉"  type="checkbox" onChange={::this.checkboxCallback} checked={checkBoxValue} value="banana"  />
                                    </CheckboxGroup>
                                </Col>
                            </Row>
                        </Grid>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="表单组合示例">
                    <CodeShow>
                        <Code code={getFile('input-combine')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <FormGroup>
                            <Row>
                                <Col sm={2}>姓名</Col>
                                <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                            </Row>
                            <Row>
                                <Col sm={2}>姓名</Col>
                                <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                            </Row>
                            <Row>
                                <Col sm={2}>性别</Col>
                                <Col sm={10}>
                                    <RadioGroup defaultChecked="男" name="radio-sex">
                                        <Input  type="radio"  label="男" value="男" />
                                        <Input  type="radio"  label="女" value="女"  />
                                    </RadioGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>体育爱好</Col>
                                <Col sm={10}>
                                    <CheckboxGroup>
                                        <Input  type="checkbox" label="足球" checked   />
                                        <Input  type="checkbox" label="篮球"    />
                                        <Input  type="checkbox" label="羽毛球" checked   />
                                        <Input  type="checkbox" label="乒乓球"    />
                                    </CheckboxGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>姓名</Col>
                                <Col sm={13}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                <FormGroup>
                                    <Col sm={13}>出生日期</Col>
                                    <Col sm={13} end><Input name="test" id="test" placeholder="请输入出生日期"   /></Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={13}>省份证</Col>
                                    <Col sm={13} end><Input name="test" id="test" placeholder="请输入省份证"   /></Col>
                                </FormGroup>
                            </Row>
                        </FormGroup>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        );
    }
};
