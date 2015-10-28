/**
 * Created by mac on 15/10/27.
 */
import React, {Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

@ClassNameMixin
/**
 * input组件
 * */
export default class Input extends Component{

    static propTypes = {
        onClickCallback:PropTypes.fun
    };

    static defaultProps = {
        type:'text',
        autocomplete:'off',
        label:''
    };

    constructor(props, context) {
        super(props, context);

        this.className='input-';

        this.state={
            isActive:this.props.checked
        };
    }

    setCheck(){

        this.setState({
            isActive:!this.state.isActive
        });
    }

    checkbox(){
        return (
            <div ref="" className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {'eg-input-checkbox-active':this.state.isActive}
                )} onClick={::this.setCheck}>
                <input type={this.props.type} {...this.props}  />
                <div className="box">
                    <div className="checkbox"></div>
                </div>
                <label>测试</label>
            </div>
        );
    }

    radio(){

    }

    text(){
        return (
            <input {...this.props} className={this.getDefaultClass()} />
        );
    }

    getDefaultClass(){
        //border:1px solid #fff;
        return this.getClassName(this.className+this.props.type);
    }

    render(){
        //const {name,id,value,placeholder,autocomplete,disabled,type} = this.props;
        return this[this.props.type]();
    }
}