import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';

/**
 * 定义栅格中的一行，配合Col组件使用
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/Demo1">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/Row.js">查看源码</a></div>
 * @class Row
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
export default class Row extends Component{
    static propTypes={
        classPrefix:PropTypes.string,
        bottom:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'row'
    };

    render(){

        return (
            <div {...this.props} className={classnames(
                this.getProperty(),
                'clearfix',
                this.props.className
            )} style={this.getStyles(this.props.style)}>
                {this.props.children}
            </div>
        );
    }
}