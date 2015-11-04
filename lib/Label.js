/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * @class Label
 * @description   标签
 * */
@ClassNameMixin
export class Label extends Component{
    static propTypes = {
        url:PropTypes.string,
    };
    static defaultProps = {

    };
    constructor(props, context) {
        super(props, context);
        //this.classNameMixin = new ClassNameMixin(this.props);
    }
    render(){
        const {url} = this.props;
        return (
            <a href={url} {...this.props} className={
                classnames(this.getClassName() )
            }>
                {this.props.children}
            </a>
        );
    }
}