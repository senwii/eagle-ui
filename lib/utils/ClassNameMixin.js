/**
 * Created by mac on 15/9/7.
 */
import {classConstants} from './constants.js';
let consts = classConstants;


export default obj=>{
    /**
     * 给className添加前缀后返回className
     * */
    obj.prototype.getClassName=function(name){
        return this.setPrefix(name);
    };
    /**
     * 验证props中的样式是否符合规则
     * */
    obj.prototype.getClassNames=function(props){
        let clazz = {};
        for(var item in props){
            if(props[item] && item === consts[item]){
                clazz[this.getClassName(item)] = true;
            }
        }
        return clazz;
    };
    /**
     * 给多个className添加前缀后返回
     * */
    obj.prototype.getClassNamesForArguments=function(){
        let arg = arguments;
        let arr = [];
        let _this = this;

        if(arg && arg.length>0 ){
            for(let i=0,len=arg.length;i<len;i++){
                if(arg[i]){
                    arr.push(_this.getClassName(arg[i]) );
                }
            }

        }

        return arr.join(' ');
    };
    /**
     * 设置前缀
     * */
    obj.prototype.setPrefix= function(name){
        let str = consts.classNameNamespace;
        if(this.props.classPrefix){
            str+='-'+this.props.classPrefix;
        }
        if(name !=this.props.classPrefix){
            str += '-'+name;
        }

        return str;
    };

}
