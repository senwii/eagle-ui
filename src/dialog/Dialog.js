import DialogFactory from './DialogFactory';

import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './../utils/Component';
import BaseDialog from './BaseDialog';

import extend from 'extend';

export default class Dialog extends Component{

    constructor(props, context) {
        super(props, context);

        this.state={
            update:this.uniqueId()
        };
        this.dialog = new DialogFactory(props.keys||props.id || props.name,props.type || 'mask', props.children, props);
        // this.update(props);
    }

    loadedCallback(){

    }
    /**
     * key 报warning，暂时改为keys
     * */
    update(props){
        this.dialog.reShow(props.keys||props.id || props.name, props);
    }

    componentWillReceiveProps(props){
        this.update(props)
    }

    shouldComponentUpdate(props,state){
        // this.update(props)
        return true;
    }

    static alert(message,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(BaseDialog.ALERT,extend({},{
                successCallback:()=>{
                    resolve();
                    new DialogFactory().hide();

                },
                message:message
            },opts) );
        }).catch((ex)=>{
                console.dir(ex);
            });
    }

    static confirm(message,opts={}){
        try{
            return new Promise((resolve, reject)=>{
                new DialogFactory().show(BaseDialog.CONFRIM,extend({},{
                    successCallback:()=>{
                        resolve();
                        new DialogFactory().hide();

                    },
                    cancelCallback:()=>{
                        reject();
                        new DialogFactory().hide();

                    },
                    message:message
                },opts));
            });
        }catch(ex){
            console.dir(ex);
        }

    }

    static mask(dialogId,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(dialogId,extend({},{
                successCallback:resolve,
                id:dialogId,
                contentAlign:'left',
                cancelCallback:(type)=>{
                    reject(type);
                    new DialogFactory().hide();

                },
                closeCallback:(type)=>{
                    reject(type);
                    new DialogFactory().hide();
                }
            },opts) );
        })
    }

    static close(){
        new DialogFactory().hide();
    }

    render(){
        return <div style={{display:'none'}}>{this.state.update}</div>;
    }

}