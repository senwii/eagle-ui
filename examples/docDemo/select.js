import React,{Component,PropTypes} from 'react';
import querystring from 'querystring';
import {Select,FormGroup,CalendarPanel,CheckboxGroup,RadioGroup,Grid,Row,Col,PanelContent,Panel,Input} from '../../../src/index.js';
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
                            <Col>
                                <FormGroup>
                                    <Row>
                                        <Col sm={2}>所在城市</Col>
                                        <Col sm={10}>
                                            <Select placeholder="请选择城市" >
                                                <item value='bei'>北京</item>
                                                <item value='shang'>上海</item>
                                                <item value='nan'>南京</item>
                                            </Select>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Grid>
                </PanelContent>
            </Panel>
        );
    }
};
