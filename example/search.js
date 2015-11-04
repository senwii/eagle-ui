/**
 * Created by panqianjin on 15/11/4.
 */
import React from 'react';
import {Search} from '../index.js';

React.render(
    <Search callBack={function(val){alert(val)}}>
    </Search>
    ,document.getElementById('root'));