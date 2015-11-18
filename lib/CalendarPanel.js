import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';

import Input from './Input.js';
import Calendar from './Calendar.js';

@ClassNameMixin
export default class CalendarPanel extends Component{

    static propTypes = {
        showCallback:PropTypes.func,
        hideCallback:PropTypes.func,
        componentTag:PropTypes.string
    };

    static defaultProps = {
        classPrefix:'calendar',
        componentTag:'Input'
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            isShow:false,
            value:'',
            windowType:0
        };
    }

    doSetCapture(input){
        if(input.setCapture){
            this.doReleaseCapture();
            input.setCapture();
            this.ctObj = input;
        }
    }

    doReleaseCapture(){
        if (this.ctObj && this.ctObj.releaseCapture) {
            this.ctObj.releaseCapture();
            this.ctObj = null;
        }
    }

    componentDidMount(){

    }

    inputBlurHandler(){
        this.doReleaseCapture();
        this.setState({
            isShow:false
            //isShow:true
        });
    }

    inputMouseUpHandler(){
        this.doReleaseCapture();
    }

    inputFocusHandler(e){

        let container = React.findDOMNode(this),
            _this = this,
            calendar = container.querySelector(`.${this.getClassName('container')}`),
            input = e.target;

        calendar.onmousedown = function (e) {
            _this.doSetCapture(input);
            return false;
        };
        this.setState({
            isShow:true,
            windowType:0
        });
    }

    inputChangeHandler(e){
        let target = e.target;

        this.setState({
            value:target.value
        });
    }

    selectCallback(date){
        this.setState({
            value:date
        });
    }

    setWindowType(type){
        this.setState({
            windowType:type
        });
    }

    render(){

        let {componentTag:Component} = this.props,
            _this = this;
        let options = React.Children.map(this.props.children,(option)=>{

            return <Input {...option.props}
                onBlur={::_this.inputBlurHandler}
                onMouseUp={::_this.inputMouseUpHandler}
                onFocus={::_this.inputFocusHandler}
                value={_this.state.value}
                onChange={::_this.inputChangeHandler}
                />;

        },this);

        return (
            <div className={
                classnames(this.getClassName('panel') )
            }>
                {options}
                <Calendar
                    {...this.props}
                    show={this.state.isShow}
                    selectCallback={::this.selectCallback}
                    windowType={this.state.windowType}
                    setWindowType={::this.setWindowType} />
            </div>
        );
    }
}