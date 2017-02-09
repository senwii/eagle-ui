import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 定义栅格中的一列，配合Row组件使用
 * <h5>主要的UI属性接口包括:</h5>
 * <ul>
 *     <li>sm:一行Row的宽度为100%(12份)，sm的值表示当前Col的宽度占了12份中的几份</li>
 * </ul><br>
 * 使用方式:
 * <pre><code>&#60;Col sm={5} &#62;&#60;/Col&#62;</code>
 * </pre>
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/Demo1">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Col.js">查看源码</a></div>
 * @class Col
 * @module grid(布局)
 * @extends Component
 * @constructor
 * @example
 *      //没有设置end属性，最后一个Col会向右对齐
 *      <Grid>
 *          <Row>
 *              <Col sm={4}>
 *                  浏览量：151195
 *              </Col>
 *              <Col sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *              <Col sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *          </Row>
 *      </Grid>
 *
 *      //设置end属性，最后一个Col会向左对齐
 *      <Grid>
 *          <Row>
 *              <Col sm={4}>
 *                  浏览量：151195
 *              </Col>
 *              <Col sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *              <Col end sm={2}>
 *                  门店市场份额:100.00%
 *              </Col>
 *          </Row>
 *      </Grid>
 * */
export default class Col extends Component{
    static propTypes = {
        egSize:PropTypes.string,
        /**
         * 适用于每个Row下的最后一个Col
         * 当所有的col加起来不满12的情况下：如果不设置end属性，最后一个Col会向右对齐，如果设置end属性，最后一个Col就会向左对齐（float left）
         * @property end
         * @type Boolean
         * @default false
         * */
        end:PropTypes.bool,
        /**
         * Row总宽度为100%(12份)，sm的值表示当前Col宽度占比父元素12份中的几份
         * @property sm
         * @type Number
         * @default 12(一整行)
         * */
        sm:PropTypes.number
    };

    static defaultProps = {
        classPrefix:'col',
        componentTag:'div',
        egSize:'xs',
        sm:12
    };

    initCallback(){
        let {sm} = this.props;
        //this.setProperty('sm',this.props.egSize+'-'+sm );
        this.setProperty('end','end' );
        this.setProperty('layer','layer');
        //
    }

    render(){
        let {sm,egSize} = this.props;
        return (
            <this.componentTag {...this.props} className={classnames(
                this.getProperty(),
                this.getClassName(`${egSize}-${sm}`),
                this.props.className
            )}  style={this.getStyles(this.props.style)}>
                {this.props.children}
            </this.componentTag>
        );
    }
}