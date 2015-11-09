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
 * @description Dialog 组件
 * @author qianjin.pan
 * @date 15/10/30
 */

@ClassNameMixin
export class Dialog extends Component {
    static defaultProps = {
        successCallback: null,//success回掉函数
        cancelCallback: null,//cancel回调函数
        close: false,//是否有x图标
        title: ' ',//标题
        display: 'block',
        type: 'alert',
        tips: null,
        classPrefix:'dialog',//类名前前缀
        componentTag:'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: 'fadein'
        };
    }
    /**
     * @method close dialog
     * @return change state
     * */
    closeDialog() {
        this.setState({
            show: 'hide'
        });
    }
    /**
     * @method submit dialog
     * @return callBack;
     *         change state
     * */
    submitForm() {

        this.props.successCallback && this.props.successCallback();
        this.setState({
            show: 'hide'
        });
    }

    cancleDialog() {
        this.props.cancelCallback && this.props.cancelCallback();
        this.setState({
            show: 'hide'
        });
    }
    /**
     * @method show dialog overly
     * @return dom
     * */
    showOverlay() {
        return (
            <Grid className={
                classnames(
                    this.getClassNamesForArguments('overlay')
                )
            }>
            </Grid>
        );

    }

    /**
     * @method render different dom
     * @name    face to this.props.type
     * @return  alert/confirm/dialog/mask
     * */
    alert() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )} style={{width:'300px'}}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('button')
                )}>
                    <Col sm={12}>
                        <Button radius egSize="xs" onClick={::this.submitForm}>确定</Button>
                    </Col>
                </Row>
            </Row>
        );
    }


    confirm() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )} style={{width:'300px'}}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                    <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x</div>
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('button'))}>
                    <Col sm={12}>
                        <Button radius egSize="xs" style={{marginRight:'20px'}} onClick={::this.submitForm}>确定</Button>
                        <Button radius white egSize="xs" onClick={::this.cancleDialog}>取消</Button>
                    </Col>
                </Row>
            </Row>
        );
    }


    dialog() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                    <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x</div>
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('button'))}>
                    <Col sm={12}>
                        <Button radius egSize="xs" style={{marginRight:'20px'}} onClick={::this.submitForm}>确定</Button>
                        <Button radius white egSize="xs" onClick={::this.cancleDialog}>取消</Button>
                    </Col>
                </Row>
            </Row>
        );
    }


    mask() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                    <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x</div>
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
            </Row>

        )
    }
    render() {
        return (
            <Grid className={classnames(
                this.setPrefix(this.state.show,false)
                )}>
                {this[this.props.type.toLowerCase()]()}
                {this.showOverlay(this.props.tips)}
            </Grid>
        );
    }

}


