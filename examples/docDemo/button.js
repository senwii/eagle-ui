import React, { Component ,PropTypes} from 'react';
import {ButtonGroup, Button ,Row ,Col ,Grid }from 'eagle-ui.js';
export default class ButtonCls extends Component{
    onActive(target,html){
        alert('测试');
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col>
                        <ButtonGroup egType="justify" activeCallback={this.onActive}>
                            <Button radius egSize="sm" egStyle="warning">水平按钮组1</Button>
                            <Button radius egSize="sm" egStyle="warning">水平按钮组2</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ButtonGroup egType="tacked">
                            <Button radius egSize="sm" egStyle="">垂直按钮组1</Button>
                            <Button radius egSize="sm" egStyle="">垂直按钮组2</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}><Button radius egSize="sm" egStyle="warning">警告</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="success">成功</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="danger">危险</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="error">错误</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block radius egSize="sm" egStyle="success" disabled>成功不可点</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" >默认</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" disabled>默认不可点</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" egStyle="link" >链接</Button></Col>
                </Row>
            </Grid>
        );
    }
}