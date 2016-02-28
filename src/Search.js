import React,{Component, PropTypes, ReactDOM} from 'react';
import classnames from 'classnames';

import Suggestion from './Suggestion';
/**
 * 搜索按钮组件
 * 参数： id/callBack/placeholder 均可不传
 * @class Search
 * @module ui
 * @constructor
 * @demo docDemo/empty.html {UI展示}
 * @demo docDemo/search.js {源码}
 * @show true
 * */
export default class Search extends Suggestion {
    constructor(props, context) {
        super(props, context);
    }

}