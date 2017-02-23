/**
 * Created by min.xiao
 */
import React,{Component} from 'react';
import {Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class DialogCls extends Component{
    static defaultProps = {
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputVal: 123124,
            dialogAlign: 'center',
            alertContent: '哈哈，你好苍老师'
        }
    }
    getScope(dialog){
        this.dialog = dialog;
    }
    show(name){
        Dialog.mask(name).then(function(){
            console.log('success');
            Dialog.close();
        },function(type){
            console.log('cancel');
        });
    }
    showAlert(){
        Dialog.alert('哈哈，我是alert');
    }
    nomask(){
        Dialog.alert('哈哈，我是alert',{
            isMask:false
        });
    }
    showPrompt(){
        Dialog.prompt('这是个prompt',{
            inputWidth:'50%'
        }).then((value)=>{
            console.log(value)
        },()=>{
            console.log('取消回调')
        })
    }
    inputChangeHandler(evt) {
        const value = evt.target.value
        this.setState({
            inputVal: value
        })
    }
    dialogAlignChangeHandler(evt) {
        const value = evt.target.value
        this.setState({
            dialogAlign: value
        })
    }
    showConfirm(){
        Dialog.confirm('确定你已经打开了么？').then(()=>{
            alert('确定');
        },()=>{
            alert('取消');
        });
    }
    render(){
        return (
            <DemoLayout title="弹出框组件">
                <DemoItem title="默认样式">
                    <CodeShow>
                        <Code code={getFile('dialog-demo1')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.show.bind(this,'demo1')} className="mg-right-15">点击我mask</Button>
                        <Dialog id="demo1" egSize="xs" className="xxx" buttonAlign="right" title="苍老师你好"  buttons={[
                            {
                                type: 'success',
                                name: '确认'

                            },
                            {
                                type:'cancel',
                                egStyle:'white',
                                name:'取消'
                            }
                        ]}>
                            <div>
                                {this.state.alertContent}
                            </div>
                        </Dialog>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="改变内部文本">
                    <CodeShow>
                        <Code code={getFile('dialog-demo2')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.show.bind(this,'demo2')} className="mg-right-15">点击我mask</Button>
                        <Dialog id="demo2" egSize="xs" className="xxx" buttonAlign="right" title="苍老师你好"  buttons={[
                            {
                                egStyle:'warning',
                                name:'改变文案',
                                callback:()=>{
                                    {/*alert('自定义按钮');*/}
                                    this.setState({
                                        alertContent: '哈哈哈，改成波多。。。。'
                                    })
                                }
                            }
                        ]}>
                            <div>
                                {this.state.alertContent}
                            </div>
                        </Dialog>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="内嵌表单">
                    <CodeShow>
                        <Code code={getFile('dialog-demo3')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.show.bind(this,'demo3')} className="mg-right-15">点击我mask2表单秀</Button>
                        <Dialog id="demo3" egSize="sm" title="表单验证" contentAlign={this.state.dialogAlign} buttons={[
                            {
                                type: 'success',
                                name: '提交',
                                callback:()=>{}
                            },
                            {
                                type:'cancel',
                                egStyle:'white',
                                name:'取消',
                                callback:()=>{}
                            }
                        ]}>
                            <Panel heading="我是标题">
                                <PanelContent>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={2}>姓名</Col>
                                                    <Col sm={10}><Input name="test1231" id="test" placeholder="请输入姓名" value={this.state.inputVal} onChange={::this.inputChangeHandler}/></Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={2}>姓名</Col>
                                                    <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={2}>改变对齐方式</Col>
                                                    <Col sm={10}><Input name="test222" id="test222" placeholder="left|right|center" value={this.state.dialogAlign} onChange={::this.dialogAlignChangeHandler}/></Col>
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
                                                </Row>
                                                <Row>
                                                    <Col sm={2}>所在城市</Col>
                                                    <Col sm={10} layer>
                                                        <Row style={{margin:0}}>
                                                            <Col sm={4} end>
                                                                <Select placeholder="请选择城市" >
                                                                    <item value='bei'>北京</item>
                                                                    <item value='shang'>上海</item>
                                                                    <item value='nan'>南京</item>
                                                                </Select>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col padding={'0'}>
                                            <Panel heading="我是标题二">
                                                <PanelContent padding={true}>
                                                    我是下一个内容区
                                                </PanelContent>
                                            </Panel>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col padding={'0'}>
                                            <Panel heading="我是标题三" >
                                                <PanelContent padding={true}>
                                                    我是下一个内容区
                                                </PanelContent>
                                            </Panel>
                                        </Col>
                                    </Row>
                                </PanelContent>
                            </Panel>
                        </Dialog>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="内容不在content之内">
                    <CodeShow>
                        <Code code={getFile('dialog-demo4')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.show.bind(this,'demo4')} className="mg-right-15">点击我mask3 outside</Button>
                        <Dialog id="demo4" title="panel" outside egSize="lg">
                            <Panel egType="normal" margin="0">
                                <PanelHeader>另一种形式的嵌套</PanelHeader>
                                <PanelContent>
                                    <Panel egType="normal">
                                        <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                        <PanelContent>
                                            <Row>
                                                <Col>
                                                    我是内容区
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Panel  margin={'0'}>
                                                        <PanelHeader>另一种形式的嵌套3</PanelHeader>
                                                        <PanelContent>
                                                            <Row>
                                                                <Col>
                                                                    我是内容区
                                                                </Col>
                                                            </Row>
                                                        </PanelContent>
                                                    </Panel>
                                                </Col>
                                            </Row>
                                        </PanelContent>
                                    </Panel>
                                    <Panel margin={'0'}>
                                        <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                        <PanelContent>
                                            <Row>
                                                <Col>
                                                    我是内容区
                                                </Col>
                                            </Row>
                                        </PanelContent>
                                    </Panel>
                                </PanelContent>
                            </Panel>
                        </Dialog>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="alert展示">
                    <CodeShow>
                        <Code code={getFile('dialog-demo5')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.showAlert} className="mg-right-15">点击我alert</Button>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="prompt展示">
                    <CodeShow>
                        <Code code={getFile('dialog-demo8')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.showPrompt} className="mg-right-15">点击我prompt</Button>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="无遮罩展示">
                    <CodeShow>
                        <Code code={getFile('dialog-demo6')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.nomask} className="mg-right-15">无遮罩显示</Button>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="confirm展示">
                    <CodeShow>
                        <Code code={getFile('dialog-demo7')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.showConfirm}>点击我Confirm</Button>
                    </DemoShow>
                </DemoItem>

            </DemoLayout>
        );
    }
}