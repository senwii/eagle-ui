/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component,PropTypes} from 'react';
import Calendar from '../../lib/Calendar.js';
import Input from '../../lib/Input.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
import CalendarPanel from '../../lib/CalendarPanel.js';
import querystring from 'querystring';


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

    render(){

        return (
            <Row>
                <Col sm={12}>
                    <CalendarPanel startDate="2015-11-11">
                        <Input placeholder="请选择日期" style={{width:'150px'}} />
                    </CalendarPanel>

                </Col>
            </Row>
        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));