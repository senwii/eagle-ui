import React, { Component ,PropTypes} from 'react';
import {Crumb} from 'eagle-ui.js';
export default class CrumbCls extends Component {
    render() {
        return (
            <Crumb>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url='baidu.html'>菜单</item>
            </Crumb>
        );
    }
}
