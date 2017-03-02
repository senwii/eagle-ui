import React, {PropTypes} from 'react';
import Search from './sug/Search';
/**
 * 搜索联想组件。
 * @Class Suggestion
 * @Module ui
 * @constructor
 * @extends Component
 * @demo #/suggestion|suggestion.js
 * @show true
 * */
export default class Suggestion extends Search {
    constructor(props, context) {
        super(props, context,{});
    }
    static defaultProps = {
        /**
         * 当用户选中sug中的某一提示项时触发的回调函数
         * @event  getValueCallback
         * @param {String} key 每一个sug Item的value属性
         * @param {String} value 每一个sug Item的展示值
         * @default function(){}
         * */
        getValueCallback: null,
        classPrefix: 'suggestion-warp',
        componentTag: 'div',
        defaultValue:'',
        /**
         * input框左侧或者右侧出现的提示图标.默认不加icon.如果想显示放大镜图标可以将icon设置为"search".其他图标可以参考icon fonts
         * @property icon
         * @type String
         * @default ''
         * */
        icon:'',
        /**
         * 图标出现的位置，可以设置为left或者right
         * @property iconDirection
         * @type String
         * @default 'right'
         * */
        iconDirection:'',
        /**
         * icon的样式，比如可以通过设置{color:'red'}来将icon设置为红色
         * @property iconStyle
         * @type Object
         * @default {}
         * */
        iconStyle:{},
        /**
         * 没有匹配结果时下拉框中的匹配文案
         * @property noResultTips
         * @type String
         * @default '没有匹配结果'
         * */
        noResultTips:'没有匹配结果'
        /**
         * input框中没有输入值时的提示文案
         * @property placeholder
         * @type String
         * @default ''
         * */
    };

    loadedCallback(){

    }

    focusHandler(e){
        super.focusHandler(e);
        let {value} = this.state;
        if(value!=''){
            this.show();
            this.search(value);
        }else if(this.state._activeValue ==''){
            this.hide();
        }
    }
    entryCallback(){
        if(this.state._activeValue ==''){
            this.setDefaultData();
            this.hide();
        }

    }
}