import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

import ClassNameMixin from './ClassNameMixin';
import PropertyMixin from './PropertyMixin';
import MethodMixin from './MethodMixin';
import extend from 'extend';


@ClassNameMixin
@PropertyMixin
@MethodMixin
export default class BaseComponent extends Component{

    constructor(props, context) {
        super(props, context);

        this.otherProps = {};
        this.initCallback(this);
        //验证
        this.setProperty(this.props);
        //注册
        this.registerMethod(this.otherProps);

        //ref唯一标识生成

        this.state={
            _isShow:false,
            _checked:false,
            _active:false
        };
    }

    initCallback(){
        this.props.initCallback && this.props.initCallback(this);
    }

    componentWillMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
        this.setProperty(nextProps );
        return true;
    }

    //renderDom(dom){
    //    this.setProperty(this.props);
    //    return dom;
    //}

    componentDidMount(){
        this.loadedCallback && this.loadedCallback(this);
    }
    setMethod(methodName,method ){
        this[methodName+'Callback'] =(function(method){
            let m = method;
            return function(){
                m(arguments );
            };
        })(method);
    }
    //注册回调
    registerMethod(methods){
        //注册回调
        //otherProps
        let method = null,
            methodName='',
            other = {};
        for(let item in methods){
            method = this.methods[methodName = item.replace(/^on/,'').toLowerCase() ];
            if(method){
                this.setMethod(methodName,methods[item] );
            }
        }
        //this.otherProps = other;
    }

    setProperties(props){
        for(let item in props){
            this.setProperty(item,props[item]);
        }
    }

    setProperty(props,val=''){
        let prop = null,
            styleList = [],
            propList = [];

        if(val!=''){
            this.properties[props] = val;
            return this;
        }

        const type = 'property';
        for(let item in props){
            prop = this.properties[item];
            if(prop ){

                switch (typeof(prop)){
                    case 'boolean':
                        if(props[item]){
                            propList.push(item);
                        }
                        break;
                    case 'function':
                        let param = prop.call(this,props[item]);

                        if(typeof(param) == 'string' ){
                            propList.push(param);
                        }else if(param.type && param.type == type){
                            this[item] = param.value;
                        }else{
                            styleList.push(param);
                        }
                        break;
                    default :
                        propList.push(prop);
                        break;
                }

            }else{
                this.otherProps[item] = props[item];
            }

        }

        this._properties = propList;
        this._styles = styleList;
    }

    getProperty(){
        let p = this.classPrefix ? this.classPrefix+' ':'';
        p +=this._properties.join(' ');
        return this.getClassName(p,false)+' '+this.getClassName(p);
    }

    getStyles(style={}){
        return extend({},style,this._styles);
    }

    show(){
        this.setState({
            _isShow:true
        });
    }

    hide(){
        this.setState({
            _isShow:false
        });
    }

    getDisplay(){
        return this.state._isShow;
    }

    render(){
        return (
            <h1>请重写父类render()方法</h1>
        );
    }
}