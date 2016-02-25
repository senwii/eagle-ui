import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';

@ClassNameMixin
export default class Item extends Component{

    static propTypes = {
    };

    static defaultProps = {
        classPrefix:'item'
    };
    render(){
        let renderStyle=this.props.style||{};
        return (
            <div className={
                classnames(
                    this.getClassNamesForArguments('item'),
                    this.props.className,
                    this.getClassNames(this.props)
                )} style={renderStyle}>
                {this.props.children}
            </div>
        );

    }
}