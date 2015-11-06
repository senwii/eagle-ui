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
 * @class  toast
 * @description three tips: success/error/loading
 * date 2015/211
 * */
@ClassNameMixin
export class Toast extends Component {
    static defaultProps = {
        type: 'sucess-tips',
        msg: '保存成功',
        overlay: false,
        seconds: 4,
        target: true,
        classPrefix: 'tips',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: 'fadein'
        };
    }

    /**
     * @method  n seconds hide toast
     * */
    componentDidMount() {
        let seconds = this.props.seconds * 1000;
        setTimeout(::this.closeToast, seconds
    )
    }

    render() {
        return (
            <Grid className={classnames(
                this.setPrefix(this.state.show,false)
                )}>
                {this.toast()}
                {this.showOverlay(this.props.target)}
            </Grid>
        );
    }

    closeToast() {
        this.setState({
            show: 'hide'
        });
    }

    showOverlay(target) {
        if (target) {
            return (<Grid></Grid>);
        } else {
            return (
                <Grid className={
                     classnames(
                    this.getClassNamesForArguments('overlay'),
                    'clearfix'
                )
                }>
                </Grid>
            );
        }
    }

    /**
     * @method render content
     * */
    toast() {
        return (
            <Row className={
                 classnames(
                    this.getClassNamesForArguments(this.props.classPrefix)
                )}>
                <Row className={classnames(
                    this.getClassNamesForArguments('content')
                )}>
                    <Row>
                        <Col className={classnames(
                            this.getClassNamesForArguments(this.props.type)
                        )}>
                        </Col>
                        <Col>
                            {this.props.msg}
                        </Col>
                    </Row>
                </Row>
            </Row>
        )
    }


}


