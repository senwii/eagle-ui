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
            input: this.props.input,
            options:[],
            defaultCity:''
        };
        //=>不用bindthis
        setTimeout(()=>{
            this.setState({options:this.renderC()})
        });

        setTimeout(()=>{
            this.setState({
                defaultCity:'上海'
            });
        },2000 );
    }

    getValue(value,key,type){
        let stype = {
            'init':'加载时调用',
            'enter':'回车时调用',
            'click':'点击每一项元素时调用'
        };
        document.getElementById('showtip').innerHTML = `<strong>${stype[type]}</strong>的值为：<b>"key":<span class="color-error">${key}</span></b>,<b>"value":<span class="color-error">${value}</span></b>`;
    }

    renderC(){

        return [

            <option value='bei' key="bei">北京</option>,
            <option value='shang' key="上海">上海</option>,
            <option value='nan' key="南京">南京</option>,
            <option value='3' key="杭州">杭州</option>,
            <option value='4' key="杭州西">杭州西</option>,
            <option value='5' key="杭州北站">杭州北站</option>,
            <option value='6' key="广州">广州</option>,
            <option value='7' key="深圳">深圳</option>,
            <option value='8' key="澳门">澳门</option>,
            <option value='10' key="太原">太原</option>,
            <option value='11' key="台湾">台湾</option>,
            <option value='12' key="香港">香港</option>
        ];
    }

    render(){
        console.dir(this.state.defaultCity);
        return (
            <Grid fluid>
                <Row>
                    <Col sm={9} layer end>
                        <Row>
                            <Col sm={4} end>
                                <Select defaultChecked={this.state.defaultCity} getValueCallback={::this.getValue} placeholder="请选择" >
                                    {this.state.options}
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="showtip" className="color-info"></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Demo;