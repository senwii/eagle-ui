/**
 * Created by panqianjin on 15/11/3.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
/**
 * 面包屑组件
 * 只需把对应的item依次写在<eagleui.Crumb>下即可:如下
 * <item url='aaa'>菜单</item>
 * 示例见example/Crumb.html
 * */
@ClassNameMixin
export class Crumb extends Component {
    static defaultProps = {}

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='eg-crumb'>
                <ul>
                    {this.props.children.map((item)=>
                        <li>{item.props.url?<a href = {item.props.url}>{item.props.children}</a>:item.props.children}</li>
                    )}
                </ul>
                <div className='clearfix'></div>
            </div>
        )
    }
}