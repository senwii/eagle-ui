import ReactDom from 'react/lib/ReactDOM';
import React,{PropTypes} from 'react';

import ClassNameMixin from './../utils/ClassNameMixin';
import extend from 'extend';

let BaseDialog = ((d)=>{

    let stack = {},
        options = {
            successCallback:function(){},
            cancelCallback:function(){},
            //是否显示头部背景
            isHeaderBackground:true,
            //footer按钮对齐方式
            buttonAlign:'center',
            //mask类型的是否显示头部，头部颜色是否需要显示
            isHeader:true,
            //内容对其方式
            contentAlign:'center',
            //是否显示蒙版层
            isMask:true,
            //内容不在content之内 mask属性
            outside:false,
            //是否点击mask蒙版也能关闭弹窗
            isMaskClose:true

        };

    @ClassNameMixin
    class BaseDialog{

        constructor(opts={} ){

            this.wrapName = 'dialog-'+(new Date().getTime()+(Math.random()*1e10).toFixed(0) );
            this.container = d.getElementById(this.wrapName);

            this.dialogClass='dialog-mask';
            this.props = {};
            this.isShow = false;

            if(!this.container){
                this.createWrap();
            }

            options = extend(options,opts);
            this.isMaskClose = options.isMaskClose;
        }

        close(){
            //this.isShow = false;
            for(let p in stack){
                if(stack.hasOwnProperty(p)){
                    let modal = stack[p]
                    if(modal instanceof Array){
                        let params = extend(true,{},modal[1]);
                        params.isShow = false
                        stack[p] = [modal[0], params]
                    }
                }
            }
            this.removeClass(this.container,this.setPrefix('dialog-show') );
        }

        open(){
            /*this.isShow = true;*/
            this.addClass(this.container,this.setPrefix('dialog-show') );
        }

        pushStack(key,dialog,props){
            //stack
            stack[key] =props?[dialog,props]:dialog ;
        }

        removeStack(key){
            stack[key] = null;
            delete stack[key];
        }

        //获取dialog
        get(key){
            let modal = stack[key];

            return modal instanceof Array ? modal :modal?[modal]:[];
        }

        setOptions(opts){
            options = extend({},options,opts||{});
        }

        maskClickFn(event){

            if(this.isMaskClose){
                // 点击Icon button 时, 返回的className 是 SVGAnimatedString 对象
                if(event.target.className.match && event.target.className.match('dialog-mask')!=null ){
                    this.close();
                }
            }

        }

        //创建放置弹窗的容器
        createWrap(){
            this.props = {};
            let dom = d.createElement('div'),_this = this;
            dom.id = this.wrapName;
            dom.className=this.setPrefix(this.dialogClass,false)+' '+this.setPrefix('dialog-hide');

            d.body.appendChild(dom);
            this.container = dom;

            this.container['addEventListener' ]('click',this.maskClickFn.bind(this),false);
        }

        renderDialog(Modal,props){
            let params = extend(true,{},options,props||{});
            this.modal = Modal
            this.isMaskClose = params.isMaskClose;

            this[!params.isMask?'removeClass':'addClass'](this.container,this.setPrefix(this.dialogClass,false) );

            ReactDom.render(<Modal {...params} />,this.container);
        }
        reloadDialog(Modal,props){
            let params = extend(true,{},options,props||{});
            this.isMaskClose = params.isMaskClose;
            this[!params.isMask?'removeClass':'addClass'](this.container,this.setPrefix(this.dialogClass,false) );
            params.isShow && ReactDom.render(<Modal {...params}>{props.children}</Modal>,this.container);
        }
    }
    return BaseDialog;
})(document);

let dialog = null;

export default {
    getInstance : function (opts){
        return dialog ? dialog : (dialog=new BaseDialog(opts ) );
    },
    ALERT:'alert',
    CONFRIM:'confirm',
    MASK:'mask'
};