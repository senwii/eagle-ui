import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';
import Slider from './Slider.js';
import CalendarPanel from './CalendarPanel.js';
import ReactDom from 'react/lib/ReactDOM';
import extend from 'extend';

/**
 * 时间选择器
 * @class TimePicker
 * @module ui
 * @extends CalendarPanel
 * @constructor
 * @demo #/timepicker|timepicker.js
 * @show true
 * */
@ClassNameMixin
export default class TimePicker extends CalendarPanel{
    static propTypes = {
    };

    static defaultProps = {
        /**
         * 格式化时间<br />
         * <code>HH</code>:24小时制<br />
         * <code>hh</code>:12小时制<br />
         * <code>mm</code>:分钟<br />
         * <code>ss</code>:秒<br />
         * <code>tt</code>:上午或下午<br />
         * @property format
         * @type String
         * @default HH:mm tt
         * */
        format:'HH:mm tt',
        /**
         * 默认值
         * @property defaultValue
         * @type String
         * @default ''
         * */
        defaultValue:'',
        direction: 'auto',
        classPrefix:'calendar',
        getValueCallback:function(){}
    };

    constructor(props, context) {
        super(props, context);
        this.state = extend(this.state, {
            hours:0,
            minutes:0,
            second:0,
            posStyle:{}
        });
        this.timerId = this.uniqueId();
        this.tt = '';
        this.matchTime = /\s?(\d{1,2}).(\d{1,2}).{0,1}\s?([a-zA-Z]*)$/;
        this.hhList = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
        this.hhUpList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    }
    uniqueId(){
        return (this.classPrefix||'unique')+'_'+(new Date().getTime()+(Math.random()*1e10).toFixed(0) );
    }
    componentWillReceiveProps(nextProps){
        this.resetValue(nextProps.defaultValue);
    }
    //补位
    fill(d){
        if(typeof(d)!='undefined' ){
            d = parseInt(d,10);
            return d<10?'0'+d:d;
        }
        return d;
    }
    formatTimer(format=this.props.format){
        const timeStr = format.replace(/H{1,2}/i,this.fill(this.getHours(this.state.hours))).replace(/m{1,2}/,this.fill(this.state.minutes) ).replace(/s{1,2}/,this.fill(this.state.second) ).replace(/t{1,2}/i, this.tt )
        return timeStr;
    }
    setTime(key,value){
        if(key ==='hours'){
            this.sliderHoursIndex = value;
        }

        this.setState({
            [key]:value
        });
        setTimeout(()=>{
            let date = this.formatTimer();
            this.changeSlider(date);
            this.props.getValueCallback(date);
        });
    }
    getHours(h){
        //不是24小时制
        if(!this.props.format.match('HH') ){
            return this.hhList[h];
        }
        return h;
    }
    getTT(h){
        let tt = this.sliderHoursIndex>=12?'pm':'am';
        this.tt = tt;
        return tt.toUpperCase();
    }
    getSliderShow(){
        const {format} = this.props
        return {
            h : /[HH|hh]/.test(format),
            m : /mm/.test(format),
            s : /ss/.test(format),
            tt: /\stt/.test(format),
        }
    }
    getTimelayer(){
        const {h, m, s } = this.getSliderShow()
        return (
            <div  style={{marginTop:'20px'}}>
                <div style={{
                    'textAlign':'center'
                }}><span>{this.fill(this.getHours(this.state.hours))}:{this.fill(this.state.minutes)}:{this.fill(this.state.second)} {this.getTT(this.state.hours*1)}</span></div>
                <div>
                    {h && <Slider max={23} min={0} getValueCallback={this.setTime.bind(this,'hours')} defaultValue={this.state.hours*1} initCallback={this.setTime.bind(this,'hours')} style={{marginTop:'20px'}} />}
                    {m && <Slider max={59} getValueCallback={this.setTime.bind(this,'minutes')} defaultValue={this.state.minutes*1} style={{marginTop:'20px'}} />}
                    {s && <Slider max={99} min={0} getValueCallback={this.setTime.bind(this,'second')} defaultValue={this.state.second*1} style={{marginTop:'20px'}} />}
                </div>
            </div>
        );
    }
    // 这个取值问题变得很尴尬啊
    resetValue(){
        let {format} = this.props
        // 排除日期的情况
        const isData = /(yyyy|MM|dd)+/.test(format)
        if(isData) format = format.split(' ').splice(1).join(' ')

        const hasTT = format.split(' ').length > 1;
        const hmsArr = format.replace(/\st{1,2}/, '').split(':')
        let defaultValue =arguments[0]|| this.props.defaultValue;
        let tt ='';
        if(hasTT){
            tt = this.tt = defaultValue.split(' ')[1]
            format = format.replace(/\st{1,2}/, '')
        }
        const valArr = defaultValue.split(':')
        let h = 0;
        let m = 0;
        let s = 0;
        if(hmsArr.length == valArr.length){
            hmsArr.map((val, index)=>{
                if(/[HH|hh]/.test(val)){
                    h = valArr[index]
                }
                if(/mm/.test(val)){
                    m = valArr[index]
                }
                if(/ss/.test(val)){
                    s = valArr[index]
                }
            })
        }
        this.setState({
            hours:h*1,
            minutes:m*1,
            second:s*1
        });
        // let v = defaultValue.match(this.matchTime);
        // if(v && v.length>=3){
        //     let h = v[1]*1;
        //     let m = v[2]*1;
        //     if(v.length>=3){
        //         tt =this.tt = v[4].toLowerCase();
        //     }
        //     if(!this.props.format.match('HH') ){
        //         h = this.hhUpList[h];
        //     }
        //     this.setState({
        //         hours:h*1,
        //         minutes:m*1
        //     });
        // }
    }
    inputChangeHandler(e){
        let target = e.target;

        this.setState({
            value:target.value
        });
        clearTimeout(this.changeTimeObj);
        this.changeTimeObj=setTimeout(()=>{
            this.props.getValueCallback(target.value );
        },600);
    }
    componentDidMount(){
        this.resetValue();
    }
    updateD(style={}, extra = {}){
        this.setState({
            parentExtra: extra,
            posStyle: style
        });
    }
    updateDirectionTop(){
        const posStyle = this.state.posStyle;
        const {isUp = false, dir, inputHeight} = this.state.parentExtra;
        if(isUp){
            const panelHeight = this.refs[this.timerId].clientHeight;
            if(['left', 'right'].indexOf(dir) !== -1){
                posStyle.top = '-' + (panelHeight - inputHeight) + 'px';
            }else{
                posStyle.top = '-' + (panelHeight + 5) + 'px';
            }
            this.setState({
                posStyle: posStyle
            })
        }
    }
    updateDirectionForChild(style,obj){
        this.updateD(style, obj);
    }
    getChildObject(){
        return ReactDom.findDOMNode(this.refs[this.timerId]);
    }
    changeSlider(time=this.formatTimer() ){
        this.selectCallback(time);
    }
    renderTimer(){
        return (
            <div {...this.props}  className={classnames(this.getClassName('container'),this.getClassName(this.state.isShow?'show':'hide',false))} ref={this.timerId} style={extend({
                position:'absolute',
                minWidth:'300px',
                padding:'0 15px 15px'
            },this.props.style,this.state.posStyle) }>
                {this.getTimelayer() }
            </div>
        );
    }
    render(){
        return this.renderHtml(this.renderTimer() );
    }
}




