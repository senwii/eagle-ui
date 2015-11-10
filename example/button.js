/**
 * Created by mac on 15/11/4.
 */
import React from 'react';
import {ButtonGroup,Button} from '../index.js';

React.render(
    <ButtonGroup justify>
        <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
        <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
        <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
    </ButtonGroup>
    ,document.getElementById('root'));