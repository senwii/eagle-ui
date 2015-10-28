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
        //onClickCallback:PropTypes.fun
    };

    static defaultProps = {
        type:'text',
        autoComplete:'off',
        label:'请选择'
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
                    {['eg-input-'+this.props.type+'-active']:this.state.isActive},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )} onClick={::this.setCheck}>
                <input type={this.props.type} {...this.props} onChange={::this.onchange}   />
                <div className="box">
                    <div className="checkbox">
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }

    onchange(e){
        if(this.props.onCheck){
            this.props.onCheck(e.target);
        }
    }

    radio(){
        return (
            <div className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:this.props.checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )}>
                <input type={this.props.type} {...this.props} onChange={::this.onchange}  />
                <div className="box">
                    <div className="checkbox">
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
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
        return this[this.props.type.toLowerCase()]();
    }
}