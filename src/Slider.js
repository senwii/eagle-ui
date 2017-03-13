import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';
import ReactDom from 'react/lib/ReactDOM';
import dom from './utils/Dom.js';

/**
 * 滑块组件<br>
 * 目前支持水平滑动
 *
 * @class Slider
 * @module ui
 * @extends Component
 * @constructor
 * @demo #/slider|slider.js
 * @show true
 * */
//todo 范围滑块，垂直滑块，最小值计算
@ClassNameMixin
export default class Slider extends Component{
    static propTypes = {

    };

    static defaultProps = {
        classPrefix:'slider',
        /**
         * 滑块初始值
         * @property min
         * @type Number
         * @default 0
         * */
        min:0,
        /**
         * 滑块最大值
         * @property max
         * @type Number
         * @default 100
         * */
        max:100,
        /**
         * 默认滑块值，设置后会默认移动到对应的值上
         * @property defaultValue
         * @type Number
         * @default 0
         * */
        defaultValue:0,
        /**
         * 获取移动后的滑块值，getValueCallback(value)
         * @property getValueCallback
         * @type Function
         * @default null
         * */
        getValueCallback:function(){},
        /**
         * 第一次实例化slider时被调用，initCallback(value)
         * @property initCallback
         * @type Function
         * @default null
         * */
        initCallback:function(){}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            progressX:0
        };
        this.value = this.props.defaultValue;
        this.isMove = false;
        this.left = this.state.progressX;
        this.step = 0;
        this.current = {
            x:0,
            y:0
        };
    }
    mouseDownHandler(e){

        this.isMove=true;
        //this.sliderboxWidth = this.sliderbox.offsetWidth;
        this.maxStep = this.getStep();

        this.current.x = e.clientX;
        this.current.y = e.clientY;
    }
    getStepByBG(s,v){
        let max = this.sliderboxWidth-this.sliderPoint.offsetWidth;
        if(s<=0){
            s = 0;
        }

        if(v>=(this.props.max-this.props.min )){
            s = max;
        }

        return s;
    }
    getValueByBG(p){
        let step =this.maxStep;
        //边界的判断
        if(p<=0){
            p = 0;
        }
        let max = this.sliderboxWidth-this.sliderPoint.offsetWidth;
        if(p>=max){
            p = max
        }
        //回弹的判断
        let val = Math.round(Math.abs(p)/step);
        this.step=this.getStepByBG(val*step,val);

        return {
            p:p,
            v:val
        }
    }
    moveHandler(e){

        if(this.isMove){
            let x =e.clientX-this.current.x,p = this.left+x;
            let vp = this.getValueByBG(p);
            /*let step =this.maxStep;
            //边界的判断
            if(p<=0){
                p = 0;
            }
            let max = this.sliderboxWidth-this.sliderPoint.offsetWidth;
            if(p>=max){
                p = max
            }
            //round
            let val = Math.round(Math.abs(p)/step);
            //回弹的判断
            this.step = val*step;//-this.sliderPoint.offsetWidth;
            if(this.step<=0){
                this.step = 0;
            }

            if(val>=(this.props.max-this.props.min )){
                this.step = max;
            }*/
            this.updateStep(vp.p);
            let val = vp.v;
            val+=this.props.min;
            if(this.value !=val){
                this.props.getValueCallback(val);
                this.value = val;
            }
            this.isUpdateValue = true;
        }
        e.preventDefault();
        return false;
    }
    upHandler(){
        if(this.isUpdateValue){
            this.isMove= false;
            this.left = this.step;
            this.updateStep(this.left);
            this.isUpdateValue = false;
        }
    }

    updateStep(val){
        this.setState({
            progressX:val,
            progress:val
        });
    }
    setValue(val){
        this.value = val;
    }
    getStep(){
        return (this.sliderboxWidth-this.sliderPoint.offsetWidth)/(this.props.max-this.props.min);
    }

    resetValue(){
        this.maxStep = this.getStep();
        let p =  Math.round((this.value-this.props.min)*this.maxStep ) || 0;
        let pv =  this.getValueByBG(p,this.value);
        this.left = this.step =pv.p;
        this.updateStep(this.left);
    }

    componentWillReceiveProps(nextProps) {
        this.setValue(nextProps.defaultValue);
        this.sliderboxWidth = this.sliderbox.offsetWidth;
        /*clearTimeout(this.updateValueTimeout);
        this.updateValueTimeout = setTimeout(()=>{

        },600);*/
        if(!this.isMove) this.resetValue();
    }

    componentDidMount(){
        this.sliderbox = ReactDom.findDOMNode(this.refs.sliderbox);
        this.sliderPoint =ReactDom.findDOMNode(this.refs.sliderboxM);
        this.sliderboxWidth = this.sliderbox.offsetWidth ||0;
        this.setValue(this.props.defaultValue<this.props.min ? this.props.min:this.props.defaultValue);
        this.resetValue();
        this.props.initCallback(this.value);

        document.addEventListener('mousemove',::this.moveHandler,false);
        document.addEventListener('mouseup',::this.upHandler,false);
    }

    render(){
        return (
            <div {...this.props} className={classnames(this.getClassName('slider'),{
                [this.getClassName('v')]:this.props.direction ==='vertical'
            } )}  ref='sliderbox'>
                <div className={'drag-progress'} style={{
                    width:this.state.progress
                }}></div>
                <div className={'drag-bar'}  style={{
                    left:this.state.progressX
                }} onMouseDown={::this.mouseDownHandler} ref='sliderboxM'></div>
            </div>
        );
    }
}




