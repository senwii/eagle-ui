/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component,PropTypes}  from 'react';
import Select from '../../../src/Select.js';
import Button from '../../../src/Button.js';
import Grid from '../../../src/Grid.js';
import Row from '../../../src/Row.js';
import Col from '../../../src/Col.js';
let Demo= class Demo extends Component{

    static defaultProps = {
        input: true,
        keys:'bei'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: this.props.input
        }
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={3}><Button block radius egSize="sm" onClick={::this.changeIn} >切换至限定值模式</Button></Col>
                <Col sm={9} layer>
                    <Row>
                        <Col sm={4} end>
                            <Select keys={this.props.keys} callback={function(val,key){console.log(val+':'+key)}} input={this.state.input} >
                                <option value='bei'>北京</option>
                                <option value='shang'>上海</option>
                                <option value='nan'>南京</option>
                                <option value='3'>ssdd</option>
                                <option value='4'>sd饭否否</option>
                                <option value='5'>南京</option>
                                <option value='6'>ssdd</option>
                                <option value='7'>sd饭否否</option>
                                <option value='8'>北京</option>
                                <option value='9'>上海</option>
                                <option value='10'>南京</option>
                                <option value='11'>ssdd</option>
                                <option value='12'>sd饭否否</option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </Grid>
        );
    }
    changeIn(){
        this.setState({
          input: false
        })
        alert('输入值必须为select之中的值');
    }
}

export default Demo;