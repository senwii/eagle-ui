import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin';

@ClassNameMixin

/**
 * <h5>eagle-ui主要栅格化布局组件</h5>
 * <pre><code>
 *     &#60;Grid&#62;//定义栅格
 *         &#60;Row&#62;//定义一行
 *              &#60;Col sm={6}&#62;//定义一列，总长度为12份
 *              &#60;/Col&#62;
 *         &#60;/Row&#62;
 *     &#60;/Grid&#62;
 * </code></pre>
 *
 * <strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>
 * <strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>
 * <strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>
 * <h6>点击以上链接进行相关查看</h6>
 * @module grid(布局)
 * @main grid(布局)
 * @static
 *
 */

/**
 * 定义栅格容器,配合Col和Row使用
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/Demo1">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Grid.js">查看源码</a></div>
 * @class Grid
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
export default class Grid extends Component{

    static propTypes = {
    };

    render(){

        return (
            <div {...this.props}
                className={classnames(this.getClassName('grid'),this.getClassName(this.props.fluid?'grid-'+'fluid':''),this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}