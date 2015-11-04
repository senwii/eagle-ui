/**
 * Created by panqianjin on 15/10/30.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import {Button} from './Button.js';
import {Row} from './Row.js';
import {Col} from './Col.js';
import {Grid} from './Grid.js';
/**
 * dialogue 组件
 */
/**
* 一般传参数如下
 * type:弹出框类型
 * 取值｛alert，confirm，dialogue,mask｝等。默认alert
 * callBackSuccess:点击确认按钮回调函数
 * callBackCancel：点击取消按钮回调函数
 * title:标题
 * 以上均可不传
 * 示例见example/Dialog.html
 * */
@ClassNameMixin
export class Dialog  extends Component{
    static defaultProps={
        callBackSuccess: null,//success回掉函数
        callBackCancel: null,//cancel回调函数
        close: false,//是否有x图标
        title: ' ',//是否有标题
        display:'block',
        type:  'alert'
    }
    constructor(props, context) {
        super(props, context);
        let type;
       /*不同类型：
         0：alert
         2:mask
         1:其余类型
         3:confirm*/
        switch(this.props.type){
            case 'alert':
                type = '0';
                break;
            case 'mask':
                type = '2';
                break;
            case 'confirm':
                type = '3';
                break;
            default :
                type = '1';
        }
        this.state={
            display:'block',
            type: type
        };
    }
    closeDialogue(){
        console.log(this.state);
        this.setState({
            display: 'none'
            //display:false
        });
    }
    render(){
        /*算位置的，比较麻烦
        let {data} = this.props;
        let left = document.body.scrollHeight;
        let hight = document.body.scrollWidth;*/
        return(
            <Grid style={{display:this.state.display}}>
                <Row className='eg-dialogue' style={this.state.type !='1'&& this.state.type !='2'?{width:'300px'}:{width:''}}>
                    <Row className='eg-dialogue-title'>
                        {this.props.title}
                        {this.state.type != '0' ?<div className='eg-closeDialogue' onClick={::this.closeDialogue}>x</div>:<span></span>}
                    </Row>
                    <Row className ='eg-dialogue-content'>
                        {this.props.children}
                    </Row>
                    <Row className='eg-dialogue-button'>
                        {this.state.type != '2'?<Col sm={this.state.type == '1'||this.state.type == '3' ? 6:12}><Button radius egSize="xs" onClick={::this.submitForm}>确定</Button></Col>:null}
                        {this.state.type == '1'||this.state.type == '3'?<Col sm={6}><Button radius white egSize="xs" onClick={::this.cancleDialogue}>取消</Button></Col>:null}
                    </Row>
                </Row>
                {this.showOverlay()}
            </Grid>
        );
    }
    submitForm(){
        this.props.callBackSuccess && this.props.callBackSuccess();
        this.setState({
            display: 'none'
        });
    }
    cancleDialogue(){
        this.props.callBackCancel&& this.props.callBackCancel();
        this.setState({
            display: 'none'
        });
    }
    showOverlay(){
        return(
            <div className= 'eg-dialogue-overlay'>
            </div>
        );
    }
    //初始时用类来决定display，不太好
   /* showClass(display){
        debugger
        if(display){
            return 'showAlert';
        }else{
            return 'hideAlert';
        }
    }*/

    /*
    * 避免什么都写到方法里去，因为this很蛋疼
    * */
    /*hasTitles(title, close) {
         return (
                <div className='eg-alert-title'>
                    {title}
                    {close}?<div className='eg-closeAlert' onClick={this.closeAlert}>x</div>:<span></span>

                </div>
            )
    }
   closeAble(close){
        if(close){
            return (
                <div className='eg-closeAlert' onClick={this.closeAlert}>x</div>
            )
        }else{
            return <span></span>
        }

    }*/

}


