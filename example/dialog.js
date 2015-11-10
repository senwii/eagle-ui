/**
 * Created by mac on 15/11/4.
 */
import React from 'react';
import {Dialog} from '../index.js';
React.render(
    <div>
        <Dialog type='dialog' title='重要提示' show successCallback={function(){alert('a');}}>
            <div style={{color:'#333'}}>
                确认删除小肥羊华东自账户吗？
                删除后将无法恢复
                确认删除小肥羊华东自账户吗？
                删除后将无法恢复
            </div>
        </Dialog>
    </div>
    ,document.getElementById('root'));