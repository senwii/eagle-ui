/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Calendar from '../../lib/Calendar.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
import querystring from 'querystring';


ReactDOM.render(
    <Row>
        <Col sm={12}>
            <Calendar />
        </Col>
    </Row>
    ,document.getElementById('root'));