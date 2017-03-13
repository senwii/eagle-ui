import React,{Component, PropTypes} from 'react';
import Code, {getFile} from '../libs/Code';
import { Button, Grid, Row, Col} from 'eagle-ui';

export default class Index extends Component{
    render() {
        let demo='<CalendarPanel defaultDate={this.state.defaultDate}\n' +
            '   startDate="2015-11-11"\n' +
            '   endDate="2017-12-1"\n' +
            '   getValueCallback={::this.getvalue}>\n' +
            '   <Input placeholder="请选择日期" style={{width:"150px"}} />\n' +
        '</CalendarPanel>'
        return (
            <div className='ui-intro' >
                <div className='sec1'>
                    <div>
                        <h1>Eagle-UI</h1>
                        <p >点评商家、销售系统常用的react组件库</p>
                    </div>
                </div>
                <div className='sec2'>
                    <p className="lead">
                        eagle-ui是一款基于react开发的pc端UI组件库，目前主要用于apollo系统，它提供了常用的表单、布局、日历、弹窗等一系列符合apollo style的控件集合。
                    </p>
                    <h2>安装</h2>
                    <Grid>
                        <Row>
                            <Col sm={6}>
                                <Code code='$ npm install eagle-ui --save'/>
                            </Col>
                            <Col sm={6}>
                                <Code code='$ bower install eagle-ui'/>
                            </Col>
                        </Row>
                    </Grid>
                    <h2>如何在项目中引用</h2>
                    <Code code="import {CalendarPanel,Input} from 'eagle-ui';"/>
                    <p>引入需要使用的组件之后在render函数中的调用方式如下：</p>
                    <Code code={demo}/>
                    <h2>其他</h2>
                    <h3>推荐移动端React UI组件库 - Phoenix-ui</h3>
                    <p>Github: <a href="https://github.com/future-team/phoenix-ui">https://github.com/future-team/phoenix-ui</a></p>
                    <p>Document: <a href="http://future-team.github.io/phoenix-ui/doc/index.html">http://future-team.github.io/phoenix-ui/doc/index.html</a></p>
                </div>
                <div className='sec3'>
                    <div>
                        <h3 >
                            Want to help make this project awesome? Check out our repo
                        </h3>
                        <a href="https://github.com/future-team/eagle-ui"  >
                            <div >
                                GitHub
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
};
