import React,{Component} from 'react';
import {TooltipPanel,Tooltip,Button,Grid,Col,Row} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'

let Demo = class Demo extends Component {
    render() {
        let test1 = <div className='sds' style={{'color':'red'}}>Holy guacamole!</div>;
        return (
        <DemoLayout title="Tooltip">
            <DemoItem title="基本场景">
                <CodeShow>
                    <Code code={getFile('tooltip-demo1')}>
                    </Code>
                </CodeShow>
                <DemoShow>
                    <Grid>
                        <Row>
                            <Col sm={3}>
                                <TooltipPanel direction='top'>
                                    <Button radius egSize="sm" egStyle="warning">上边</Button>
                                    <Tooltip padding={20}>
                                        <div className='tooltip' style={{width:'150px',color:'#f00'}}>tooltip的children</div>
                                    </Tooltip>
                                </TooltipPanel>
                            </Col>
                            <Col sm={3}>
                                <TooltipPanel direction='right'
                                              msg='我是在右方的tooltip哦' padding={10} trigger='click'>
                                    <Button radius egSize="sm" egStyle="warning">右边</Button>
                                </TooltipPanel>
                            </Col>
                            <Col sm={3}>
                                <TooltipPanel direction='bottom'
                                              msg='我是在下方的tooltip哦'>
                                    <Button radius egSize="sm" egStyle="warning">下边</Button>
                                </TooltipPanel>
                            </Col>
                            <Col sm={3}>
                                <TooltipPanel direction='left'
                                              msg='我是在左方的tooltip哦'>
                                    <Button radius egSize="sm" egStyle="warning">左边</Button>

                                </TooltipPanel>
                            </Col>
                        </Row>
                    </Grid>
                </DemoShow>
            </DemoItem>

            <DemoItem title="通过设置wrapper属性来限定边界" desc={'wrapper为边界容器的的id值，当tooltip设置的方向超出容器的边界时，会被自动改变方向'}>
                <CodeShow>
                    <Code code={getFile('tooltip-demo2')}>
                    </Code>
                </CodeShow>
                <DemoShow>
                    <div id='a' style={{width:'500px',height:'200px',border:'1px solid #f00',position:'relative'}}>
                        <div style={{margin:'10px'}}>
                            <TooltipPanel direction='top' wrapper='a' msg={'sddssdds'}>
                                <Button radius egSize="sm" egStyle="warning">红色边框为边界，设置的方向是top.实际展示为bottom</Button>
                            </TooltipPanel>
                        </div>
                    </div>
                </DemoShow>
            </DemoItem>
        </DemoLayout>
        )
    }
};
export default Demo;