/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component} from 'react';

import {Col,Row,Grid,Button,Dialog} from '../../../src/index';

let Demo= class Demo extends Component{

    static defaultProps = {
        show: false,
        type: "alert"
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            type: this.props.type,
            title:'这是个提示'
        }
    }

    getScope(dialog){
        this.dialog = dialog;
    }

    show(){
        Dialog.mask('jianren').then(function(){
            console.dir('...alert....');

            Dialog.close();
        },function(type){
            console.dir(this);
            console.dir(type);
        });
    }

    render(){
        return (
            <div>
                <Button onClick={::this.show}>点击我</Button>
                <Dialog id="jianren">
                    <div>
                        哈哈，你好贱人
                    </div>
                </Dialog>
            </div>
        );
        /*return (
         <Grid>
        <Row>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showDialog}>dialog</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showAlert}>alert</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showConfirm}>confirm</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showMsak}>mask</Button></Col>
        </Row>
            <Dialog type={this.state.type} show={this.state.show} title={this.state.title} ref={::this.getScope}>
            ahflaskdjflajsflajsdlf;jkasdfk
                adfkjasd;fkjas;dlf
                asdfkn;askdfnas
            </Dialog>
           </Grid>
        );*/
    }
    /*showDialog(){
        this.dialog.open('dialog');
    }
    showAlert(){
        this.dialog.open('alert');
    }
    showConfirm(){
        this.dialog.open('confirm');
    }
    showMsak(){
        this.dialog.open('mask');
    }*/
};

export default class DialogCls extends Component{
    render(){
        return (
            <Demo  />
        );
    }
}