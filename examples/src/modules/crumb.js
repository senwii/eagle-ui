/**
 * Created by panqianjin on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import {Crumb} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'

export default class CrumbCls extends Component {
    render() {
        return (
        <DemoLayout title="面包屑">
            <DemoItem title="">
                <CodeShow>
                    <Code code={getFile('crumb')}>
                    </Code>
                </CodeShow>
                <DemoShow>
                    <Crumb>
                        <item url="dddd.html">菜单</item>
                        <item url="dddd.html">菜单</item>
                        <item url="dddd.html">菜单</item>
                        <item url="dddd.html">菜单</item>
                        <item url="dddd.html">菜单</item>
                        <item url='baidu.html'>菜单</item>
                    </Crumb>
                </DemoShow>
            </DemoItem>
        </DemoLayout>
        );
    }
}
