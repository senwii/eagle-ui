import DialogFactory from './DialogFactory';

import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './../utils/Component';
import BaseDialog from './BaseDialog';

import extend from 'extend';

export default class Dialog extends Component{

    constructor(props, context) {
        super(props, context);

        new DialogFactory(props.key||props.id || props.name,props.type || 'mask',props.children,props.params);
    }

    loadedCallback(){

    }

    static alert(message,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(BaseDialog.ALERT,extend({},{
                successCallback:resolve,
                message:message
            },opts) );
        });
    }

    static confirm(message,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(BaseDialog.CONFRIM,extend({},{
                successCallback:resolve,
                cancelCallback:()=>{
                    reject();
                    new DialogFactory().hide();

                },
                message:message
            },opts));
        });
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
        });
    }

    static close(){
        new DialogFactory().hide();
    }

    render(){
        return null;
    }

}