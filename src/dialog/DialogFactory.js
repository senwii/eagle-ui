
import Mask from './Mask';
import Alert from './Alert';
import Confirm from './Confirm';

import BaseDialog from './BaseDialog';

export default class DialogFactory{

    constructor(key,type,c,opts={}){
        this.params = {
            children:c,
            type:type,
            key:key
        };
        //this.type = type;
        this.baseUtils = BaseDialog.getInstance(opts);
        //添加dialog
        //需要对类型做分析
        this.setFactory();
    }

    setProperty(key,val){
        this.params[key] = val;
    }

    setFactory(type=this.params.type,key=this.params.key,c = this.params.children){

        if(type){
            switch (type.toLowerCase() ){
                case BaseDialog.ALERT:
                    this.add(BaseDialog.ALERT,Alert);
                    break;
                case BaseDialog.CONFRIM:
                    this.add(BaseDialog.CONFRIM,Confirm);
                    break;
                default :
                    //将自定义dialog添加进主dialog
                    Mask.push(key,c);
                    key&&(this.add(key,Mask) );
            }
        }
    }

    //添加dialog
    add(key=this.params.key,value=null){
        this.baseUtils.pushStack(key,value);
    }
    //删除dialog
    del(key = this.params.key ){
        this.baseUtils.removeStack(key);
    }
    //获取lialog
    getFactory(key=this.params.key ){
        let modal = this.baseUtils.get(key);
        if(!modal){
            this.setFactory(key,null);
        }

        modal = this.baseUtils.get(key);

        return modal;
    }
    //设置dialog默认属性
    set(){
        this.baseUtils.setOptions(arguments[0]);
    }
    show(dialogId,props={} ){
        //先将dialog放入容器，
        this.baseUtils.renderDialog(this.getFactory(dialogId),props );
        //打开
        this.baseUtils.open();
    }
    hide(){
        this.baseUtils.close();
    }
}