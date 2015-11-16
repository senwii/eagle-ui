/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import ButtonGroup from '../../lib/ButtonGroup.js';
import Button from '../../lib/Button.js';

ReactDOM.render(
    <ButtonGroup justify>
        <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
        <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
        <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
    </ButtonGroup>
    ,document.getElementById('root'));