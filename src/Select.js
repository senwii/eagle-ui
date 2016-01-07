/**
 * Created by panqianjin on 15/11/12.
 */
import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

import Component from './utils/Component';
/**
 * 下拉选择框组件。
 * 有input参数可以自由输入，否则不在列表中的输入值将改变为第一个item
 * @Class Select
 * @Module form
 * @constructor
 * @extends Component
 * @since 0.1.0
 * @demo select.js {js}
 * */
export default
class Select extends Component {
    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @property callback
         * @type func
         * @default null
         * */
        getValueCallback: null,
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type string
         *
         * */
        classPrefix: 'select',
        componentTag: 'div',
        defaultValue:''
    }

    constructor(props, context) {
        super(props, context);
        this.heightTag = 0;
        let keys = this.getDefaultKey(this.props.keys);

        this.inputId = this.uniqueId();

        /*this.state = {
            show: this.props.show,
            value: keys,
            keys:this.props.keys,
            input:this.props.input
        };*/

        this.optionsList = [];

        this.state = {
            isShow: false,
            selectIndex:0,
            defaultValue:this.props.defaultValue
        };
    }
    getDefaultKey(keys){
        let deKey = this.props.value;
        if(keys != ''){
            this.props.children.forEach((item,index)=>{
                if(item.props.value == keys){
                    deKey = item.props.children;
                }
            });
        }
        return deKey;
    }
    /**
     * 第一次渲染完成后执行,为document添加点击监听事件，判断是否关闭ul
     * 生命周期方法
     * @method componentDidMount
     * */
    componentDidMount() {
        let _this = this;
        let selectContair = ReactDom.findDOMNode(this.refs.selectContair);
        let selectUl = ReactDom.findDOMNode(this.refs.selectUl);
        document.addEventListener('click', function (e) {
            if (_this.isParent(e.target, selectContair)) {
                //console.dir('不要动');
            } else {
                if(_this.state.show){
                    _this.hideUl();
                }
            }
        }, false);
         this.heightTag = selectUl.offsetHeight;
         selectUl.style.height = '0';
        if(!this.state.show){
            this.removeClass(selectUl,'height-none');
        }
    }
    componentDidUpdate(){
        let selectUl = ReactDom.findDOMNode(this.refs.selectUl);
        //this.heightTag = selectUl.offsetHeight;
        let length = selectUl.children.length;
        if(this.state.show){
            if (length < 5) {
                selectUl.style.height = (length * 29 + 2) + 'px';
            } else {
                selectUl.style.height = '150px';
            }
        }else{
            selectUl.style.height = '0';
            clearTimeout(this.timer);
            this.timer = setTimeout(function(){this.removeClass(selectUl,'height-none')}.bind(this),400);
        }
    }
    /**
     * 判断obj是否为parentObj的子元素
     * @method isParent
     * @param obj {Object}
     * @param parentObj {Object}
     * @return {Boolean}
     * */
    isParent(obj, parentObj) {
        while (obj != undefined && obj != null) {
            if (obj == parentObj) {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    }
    /**
     * 显示选项列表,当ul关闭时才changestate
     * @method showUl
     * @return null
     * */
    showUl() {
        if(!this.state.show){
            this.setState({
                show: true
            })
            ReactDom.findDOMNode(this.refs.selectUl).style.height = this.heightTag+'px';
        }
    }
    /**
     * 点击icon时，控制ul的显示与否
     * @method toogleUl
     * @return null
     * */
    toogleUl() {
        this.setState({
            show: !this.state.show
        })
        if(this.state.show){
            ReactDom.findDOMNode(this.refs.selectUl).style.height = '0';
        }else{
            ReactDom.findDOMNode(this.refs.selectUl).style.height = this.heightTag+'px';
        }
    }
    /**
     * 关闭ul，当前ul显示时起作用
     * @method hideUl
     * @return null
     * */
    hideUl() {
        if(this.state.show){
            this.setState({
                show: false
            })
        }
    }
    /**
     * 失去焦点事件
     * @method finishInput
     * @return null
     * */
    finishInput(event) {
        //让出线程
        setTimeout(::this.callBacks);
    }
    /**
     * 取得符合要求的值，父级回调存在的话调用
     * @method callBacks
     * @return null
     * */
    callBacks() {
        if(!this.props.input){
            this.getTrueVal();
        }
        let val = this.state.value;
        let key = this.state.keys;
        if(this.state.show){
            /*this.setState({
                show: false
            })*/
            this.hideUl();
        }
        this.execMethod('getValue',val,key);
    }
    /**
     * 根据当前值是否为select内的值，判断是否改变state的值
     * @method getTrueVal
     * @return null
     * */
    getTrueVal(){
        let target = this.isInSelect();
        if(!target){
            this.setState({
                value:this.props.children[0].props.children,
                keys: this.props.children[0].props.value,
                autoVal: this.props.children[0].props.children
            });
        }
    }
    /**
     * 验证输入值是否为select内容，return true 否则return false
     * @method isInSelect
     * @return flags {Boolean}
     * */
    isInSelect(){
        let val = '^'+this.state.value+'$';
        let reg = new RegExp(val,"g");
        let flags = false;
        React.Children.forEach(this.props.children,(item)=>{
                if(reg.test(item.props.children)){
                   flags = true;
                }
        },this);

        return flags;

    }
    /**
     * 改变input的value
     * @method handlerValue
     * @param event {Object}
     * @return null
     * */
    handlerValue(event){
        let val = event.target.value;
        this.setState({
            value: val,
            autoVal: val
        })
        this.showUl();
    }
    /**
     * 点击或者enter键时，选择当前li的值，并关闭ul
     * @method chooseItem
     * @param event {Object}
     * @return null
     * */
    chooseItem(event) {
        let ulChildren = ReactDom.findDOMNode(this.refs.selectUl).children;
        this.removeAllActive(ulChildren);
        event.target.classList.add('active');
        this.hideUl();
        this.setState({
            //show: !this.state.show,
            value: event.target.textContent,
            keys: event.target.value
        })
        //inputObj.focus();
    }
    /**
     * target为flase移除li的active状态，否则将obj子元素的值付给state.value
     * @method removeAllActive
     * @param obj {Object}
     * @param target {Boolean}
     * @return null
     * */
    removeAllActive(obj,target){
        Array.prototype.slice.call(obj).map((item,index)=>{
            if(item.className.indexOf('active')>-1){
            if(target){
                this.setState({
                    value: item.textContent,
                    keys:item.value,
                    autoVal: item.textContent
                });
            }else{
                item.classList.remove('active');
            }

            }
        });
    }
    /**
    * keydown时触发，不通方向键分别对应不同方法
    * @method keyIn
    * @param event {Object}
    * @return null
    * */
    keyIn(event){
        let selectUl = ReactDom.findDOMNode(this.refs.selectUl);
        let ulChildren = ReactDom.findDOMNode(this.refs.selectUl).children;
        let ulArrey = Array.prototype.slice.call(ulChildren);
        let inputObj = ReactDom.findDOMNode(this.refs.select).children[0];
        let i = -1;
        let obj = ulChildren[0];
        if(event.keyCode == 40 || event.keyCode == 38){
            /**
             * 当ul显示时，方向键移动起作用
             * 遍历寻找当前active元素的位置，并移除active
             * */
                ulArrey.map((item,index)=>{
                    if(item.className.indexOf('active')>-1){
                    i = index;
                    item.classList.remove('active');
                }
                });
                if(event.keyCode == 40){
                    /**
                     * 下方向键，判断active元素是否为最后一个，是则不再向下否则i+1
                     * */
                    obj = (i == ulChildren.length - 1)? ulChildren[i]:ulChildren[i+1];
                }else{
                    /**
                     * 上方向键，判断active元素是否为第一个，是则不再向上否则i－1
                     * */
                    obj = (i == 0)? ulChildren[i]:ulChildren[i-1];
                }
                obj.classList.add('active');
                /**
                 * 如果active为第五个元素之前的元素，则scrollTop不变，否则每向下一个，scrollTop加30
                 * */
                selectUl.scrollTop = i < 4 ? 0 : (i-3)*30;
        }else if(event.keyCode == 13){
            /**
             * enter键，取得当前元素值
             * */
            this.hideUl();
            this.removeAllActive(ulChildren,true);
            inputObj.blur();
        }
    }
    /**
     * 为选中li元素增加active class
     * @method addActive
     * @param event {Object}
     * @return null
     * */
    addActive(event){
        let obj = event.target;
        let ulChildren = ReactDom.findDOMNode(this.refs.selectUl).children;
        this.removeAllActive(ulChildren,false);
        obj.classList.add('active');
    }
    /**
     * 为li元素移除active class
     * @method removeActive
     * @param event {Object}
     * @return null
     * */
    removeActive(event){
        let obj = event.target;
        if(this.state.show){
            obj.classList.remove('active');
        }

    }
    /**
     * 渲染li元素，并根据autoVal来匹配获得符合元素
     * this.state.autoVal 为input输入值，初始为.*匹配任意
     * @method renderLi
     * @return li {ReactElement}
     * */
    renderLi(){
        /*let autoVal = this.state.autoVal == ''? '.*': this.state.autoVal;
        let reg = new RegExp(autoVal,"g");
        let li =React.Children.map(this.props.children,(item,index)=>{
            if(reg.test(item.props.children)){
               if(this.state.keys == item.props.value){
                   return <li className='active' value={item.props.value}  onMouseOver={::this.addActive} onMouseLeave={::this.removeActive} onMouseDown={::this.chooseItem}>{item.props.children}</li>
               }else{
                   return <li value={item.props.value}  onMouseOver={::this.addActive} onMouseLeave={::this.removeActive} onMouseDown={::this.chooseItem}>{item.props.children}</li>
               }
            }
    item.props.children
        },this);

        return li;*/
    }
    renderOption(){
        return getOptions;
    }

    renderInput(){
        return (
            <Input
                ref={this.inputId}
                value={this.state.value}
                icon="arrow_drop_down"
                iconStyle={{
                        width:'30px',
                        height:'30px',
                        top: '15px',
                        right: '0'
                    }}
                onClick={::this.showUl}
                onChange={::this.handlerValue}
                onKeyDown={::this.keyIn}
                onBlur={::this.finishInput}
            />
        );
    }
    /**
     * 渲染select
     * @method renderSelect
     * @return {ReactElement}
     * */
    renderSelect() {
        return (
            <select {...this.props } defaultValue={this.state.defaultValue} style={{display:'none'}}>
                {this.renderOption()}
            </select>
        )
    }

    //获取option

    getOptions(){

        let {selectIndex} = this.state;

        this.optionsList.length = 0;

        let option = React.Children.map(this.props.children,(item,i)=>{

            let {value,children,...other}=item.props;

            this.optionsList.push({
                key:children,
                value:value
            });
            return <option value={value} {selectIndex == i?selected:''}>{children}</option>
        },this);

        return option;
    }

    /**
     * 根据auto存在与否渲染不同类型的元素
     * @method render
     * @return {ReactElement}
     * */
    render() {
        return (
            <this.componentTag className={this.getProperty() } value={this.state.value}>
                {this.renderSelect()}
                {this.renderInput() }
                <ul className={classnames(
                    this.getClassNamesForArguments('ul')
                    )
                }>
                    {this.renderLi()}
                </ul>
            </this.componentTag>
        );
    }
}