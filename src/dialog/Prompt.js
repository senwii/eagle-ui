import React,{PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';
import Component from '../utils/Component';
import Button from '../Button';
import Input from '../Input';
export default class Prompt extends Component{
    static defaultProps = {
        isClose: false,//是否有x图标
        title: '对话框',//标题
        classPrefix: 'dialog',
        cancelTxt:'取消',
        submitTxt:'确定',
        inputWidth:'',
        componentTag: 'div'
    };

    constructor(props, context) {
        super(props, context);
        this.value = '';
    }
    changHandler(e){
       /* clearTimeout(this.timer);
        this.timer = setTimeout(function(input){
            this.value = input.value;
        }.bind(this,e.target),300);*/
    }
    submitHandler(){
        //let val = this.value || ReactDom.findDOMNode(this.input).children[1].value;
        let val = ReactDom.findDOMNode(this.input).children[1].value;
        this.props.submitCallback(val)
    }
    cancelHandler(){
        ReactDom.findDOMNode(this.input).children[1].value = '';
        this.props.cancelCallback();
    }
    renderDialog(className){
        const {title,isHeaderBackground,isHeader,contentAlign,buttonAlign,submitTxt,cancelTxt,inputWidth} = this.props;
        return (
            <this.componentTag className={classnames(
                this.getProperty(),
                this.getClassName(className)
            )}>
                <div className={
                    classnames(
                        'header',
                        'h4',
                        {
                            'header-bg':isHeaderBackground,
                            'hide':!isHeader
                        }
                    )
                }>{title}</div>
                <div className="content" style={{
                    textAlign:contentAlign
                }}>
                    <Input ref={(ref)=>{this.input=ref}} type='text' style={{width:inputWidth}} onChange={::this.changHandler}/>
                </div>
                <div className="footer" style={{
                    textAlign:buttonAlign
                }}>
                    <Button egSize="xs" onClick={::this.submitHandler}>{submitTxt}</Button>
                    <Button egSize="xs" egStyle='white' onClick={::this.cancelHandler}>{cancelTxt}</Button>
                </div>
            </this.componentTag>
        );
    }

    render(){
        return this.renderDialog('prompt');
    }
}