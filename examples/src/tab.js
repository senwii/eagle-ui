/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Tab from '../../lib/Tab.js';
import Tabset from '../../lib/Tabset.js';

ReactDOM.render(
    <Tabset >
        <Tab heading='tab1'>
            <ul class="dropdown-menu dropdown-menu-right">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </Tab>
        <Tab heading='tab2'>
            <img src='http://static.bootcss.com/www/assets/img/gruntjs.png' />
        </Tab>
        <Tab heading='tab3'>
            hahaha
        </Tab>
    </Tabset>
    ,document.getElementById('root'));