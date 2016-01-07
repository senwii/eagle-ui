/**
 * Created by panqianjin on 15/11/12.
 */
import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';

import Component from './Component';
import extend from 'extend';

export default class Suggestion extends Component {

    static defaultProps = {
        delay:400
    };

    constructor(props, context) {
        super(props, context);

        //获取初始数据
        this.options = this.getOptions();

        //this.setState();
        //缓存
        this._cache={};

        //selectItem 选中项
        this.selectItem = null;
    }

    setDefaultState(obj){
        super.setDefaultState(extend({},{
            _reload:false,
            _data:this.options,
            _selectedIndex:-1,
            _selectedValue:'',
            _key:this.props.defaultChecked||'',
            value:this.props.defaultChecked||'',
            _activeValue:''
        },obj));
    }
    //渲染列表选项

    renderItem(){

    }

    setCache(key,value){
        this._cache[key] = value;
    }

    getCache(key){
        return this._cache[key];
    }

    //搜索 数据查询方式 ajax或者直接查询或者缓存中获取
    search(key){

        let data = this.getCache(key),_this = this;

        //缓存中没有数据
        try{
            if((!data ||data.length<=0 ) && key!=''){

                //拿取query异步数据
                data =_this.execMethod('query',key);
                //data = data(key);
                //没拿到数据则从原始数据中查询
                if(!data){
                    //options
                    let str = JSON.stringify(this.options);
                    ///([^}]+"key":"[^"]*北京[^"]*".+?\})/gi
                    //let reg = new RegExp('(\{[^}]+"key":"[^"]*'+key+'[^"]*".+?\})','gi');
                    let reg = new RegExp('([^[},]*\{+"key":"[^"]*'+key+'[^"]*".+?\})','gi');

                    str = str.match(reg);

                    data = str ?str :[];//this._cache[key];
                }

                this.setCache(key,data);
            }

            //重新绑定data渲染数据
            if(data && data.length>0){
                this.setState({
                    _data:data,
                    _selectedIndex:-1
                });
            }
        }catch(ex){
            throw new Error(ex);
        }
    }

    getOptions(){
        let optionsList = [];
        React.Children.map(this.props.children,(item,i)=>{

            let {value,children,...other}=item.props;

            optionsList.push({
                key:children,
                value:value,
                index:i
            });
        },this);

        return optionsList;
    }

    hide(){
        super.hide();
    }

    show(){
        super.show();
    }

    moveActive(type){
        let {_data} = this.state;
        let _selectedIndex = this.state._selectedIndex;
        _selectedIndex = type =='up' ? _selectedIndex-1 : _selectedIndex+1;

        if(_selectedIndex>=_data.length ){
            _selectedIndex = 0;
        }

        if(_selectedIndex < 0){
            _selectedIndex = _data.length-1;
        }
        //selectUl.scrollTop = i < 4 ? 0 : (i-3)*30;
        this.setState({
            _selectedIndex:_selectedIndex,
            _activeValue:this.state._data[_selectedIndex].key||''
        });
        /*clearTimeout(this.__clearTimeoutForValue);
        this.__clearTimeoutForValue = setTimeout(,this.props.delay*3);*/
    }

    //监听用户输入
    keyHandler(event){
        if (event.type != 'keydown') {
            var val = this.trim(event.target.value);
            if (val === '') {
                this.hide();
                return;
            }

            switch (event.keyCode) {
                case 27:
                    //this.hide();
                    return;
                case 38: //up键
                    //this.show();
                    this.moveActive('up');
                    return;
                case 40: //down键
                    //this.show();
                    this.moveActive('down');
                    return;
                case 13: //回车
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.activeIndex === -1) {
                        //当用户没有选择任何sug项而直接按回车时
                        this.onEnterCallback(val);
                    } else {
                        //当用户通过上下键选择了某一项sug项后按回车时

                        //this.selectSug($(this.items[this.activeIndex]).html(),this.activeIndex );
                    }
                    this.hide();
                    return;
                default:
                    this.valChange(val);
            }
        }
    }

    valChange(key){
        clearTimeout(this.timeOutId);
        this.timeOutId = setTimeout(function() {
            this.search(key);
        }.bind(this), this.props.delay);
    }

    _mouseEnterHandler(i){
        this.setState({
            _selectedIndex:i
        });
    }

    setValue(value){
        this.setState({
            value:value
        });
    }

    _clickHandler(item){
        this.selectItem = item;

        this.setValue(item.key);
        this.setState({
            _selectedIndex:-1
        });

        this.execMethod('getValue',item.value,item.key);
    }

    renderList(){
        let data = this.state._data,
            value = this.state.value,
            selectedValue = this.state._selectedValue,
            list = [];

        for(let i=0,len=data.length,item;i<len;i++){
            item = data[i];
            if(typeof(item) =='string' ){
                item = JSON.parse(item);
            }

            if(value == item.key){
                this.selectItem = item;
            }

            list.push(
                <li
                    key={item.value}
                    data-value={item.value}
                    className={classnames(
                        {
                            'active':i==this.state._selectedIndex//item.value == selectedValue
                        }
                    )}
                    onMouseEnter={this._mouseEnterHandler.bind(this,i)}
                    onMouseLeave={this._mouseEnterHandler.bind(this,-1)}
                    onClick={this._clickHandler.bind(this,item)}
                >{item.key}</li>
            );
        }
        return list;
    }

    getValue(){
        return this.selectItem;
    }
    getTextValue(){
        let {value,_activeValue} = this.state;
        return _activeValue ? _activeValue:value;
    }

    removeActiveValue(){
        this.setState({
            _activeValue:''
        });
    }

    //渲染列表
    renderSuggestion() {
        return (
            <ul className={classnames(`${this.getClassNamespace()}-suggestion`,{
                '':!!this.state._key
            })}>
                {this.renderList()}
            </ul>
        );
    }
}