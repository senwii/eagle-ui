import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';
import Slider from './Slider.js';
import TimePicker from './TimePicker.js';
import ReactDom from 'react/lib/ReactDOM';
import extend from 'extend';

/**
 * 日期时间选择器<br />
 * <strong style="color:red">可使用Calendar类所有API</strong>
 * @class DateTimePicker
 * @module ui
 * @extends TimePicker
 * @constructor
 * @demo #/datetimepicker|datetimepicker.js
 * @show true
 * */
@ClassNameMixin
export default class DateTimePicker extends TimePicker{
    static propTypes = {
    };

    static defaultProps = {
        classPrefix:'calendar',
        componentTag:'Input',
        calendarType:'date',
        direction: 'auto',
        defaultValue:'',
        /**
         * 格式化日期时间<br />
         * <code>yyyy</code>:表示年<br />
         * <code>MM</code>:表示月<br />
         * <code>dd</code>:表示天<br />
         * <code>HH</code>:24小时制<br />
         * <code>hh</code>:12小时制<br />
         * <code>mm</code>:分钟<br />
         * <code>ss</code>:秒<br />
         * <code>tt</code>:上午或下午<br />
         * @property format
         * @type String
         * @default HH:mm tt
         * */
        format:'yyyy-MM-dd HH:mm tt',
        getValueCallback:function(){}
    };

    constructor(props, context) {
        super(props, context);

    }
    isDatePanel(){
        return this.props.format.match(/(yyyy|MM|dd)+/);
    }
    updateDirectionForChild(style,obj){
        this.isDatePanel() ? this.refs[this.calendarContainer + 'calendar'].updateDirection(style, obj) :this.updateD(style, obj);
    }
    getChildObject(){
        return this.isDatePanel() ? ReactDom.findDOMNode(this.refs[this.calendarContainer + 'calendar']) : ReactDom.findDOMNode(this.refs[this.timerId]);
    }
    selectCallback(date,dateTime){
        if(dateTime&& dateTime.length>=3){
            this.__date = date;
        }
        date = this.formatTimer(this.__date || this.props.format);
        if(date.match(/(yyyy|MM|dd)+/) ){
            date=date.substr(date.indexOf(' ')+1);
        }
        this.props.getValueCallback(date);
        this.setState({
            value:date
        });
    }
    dateChange(d){
        this.refs[this.calendarContainer+'calendar'].dateChange(d);
    }
    getDate(year, month, date){
        let {format} = this.props;
        return format.replace(/y{4}/,year).replace(/M{1,2}/, this.fill(month) ).replace(/d{1,2}/, this.fill(date) );
    }
    componentWillReceiveProps(nextProps){
        if(this.isDatePanel() ){
            let date = nextProps.defaultValue.match(/^((\d{4}).(\d{0,2}).(\d{0,2}))+/);
            if(date && date.length>=2){
                this.dateChange(date[1] );
                this.__date = this.getDate(date[2],date[3],date[4]);
            }
        }
        this.resetValue(nextProps.defaultValue);
    }
    render(){
        return this.renderHtml(this.isDatePanel() ?this.renderCalendar(this.props.format.toLowerCase().indexOf('hh')!=-1 ? this.getTimelayer():null ):this.renderTimer() );
    }
}




