import React, { Component ,PropTypes} from 'react';
import ValidatorBase from './ValidatorBase.js';
import classnames from 'classnames';

export default class ValidatorWrapper extends ValidatorBase{
    constructor(props,context){
        super(props,context);
    }

    //验证
    validate(element){
        let message = this.check(element) || '';
        if(message !== '' && element.style.display!='none' && !this.isUpdate){
            //设置错误消息
            this.setState({
                message:message,
                show:message
            });
            return false;
        }
        this.setState({
            show:null,
            message:''
        });
        this.unhighlight(element);
        this.isUpdate = false;
        //this.hide();
        return true;
    }

    render() {

        let {componentTag:Component,direction,id} = this.props;

        this.removeFadeout();
        return (
            <div {...this.props} ref={id?id:this.formName} className={this.getClassName('validate')}>
                {this.props.children}
                <div ref="ref-validateTips" className={classnames(
                            this.getClassName(`validate-tips`),'animated',
                            `${direction==="bottom"||direction==="top"?'bottom':''}`,
                            `${this.init ? "":this.state.show ? "fadein" :"fadeout"}`,
                            'relative'
                        )}>
                    <i></i>
                    {this.state.message}
                </div>
            </div>
        );
    }
}