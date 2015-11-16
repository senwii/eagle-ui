/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tab from './Tab.js';
/**
 * @class Tab
 * @description   Tab
 * */
@ClassNameMixin
export default class Tabset extends Component{
    static defaultProps = {
        classPrefix:'tabset'
    };
    constructor(props, context) {
        super(props, context);

        this.state = {
            active:1
        };
    }
    activeHandler(index) {
        this.setState({
            active:index
        });
    }
    render(){
        let headings=React.Children.map(this.props.children,(option,index)=>{
            let {
                ...other,
            } = option.props;
            return <Tab
                index={index}
                active={this.state.active === index}
                clickCallback={::this.activeHandler}
                {...other}></Tab>;
        },this);
        let panes = React.Children.map(this.props.children,(option,index)=>{
            return <div
                className={classnames(this.getClassName('panes') ) }
                style={{display: this.state.active === index ? null : 'none'}}
                >{option.props.children}</div>;
        },this);
        console.debug('panes',panes);
        return (
            <div>
                <ul>
                {headings}
                </ul>
                <div className={classnames(this.getClassName('tab-content') ) }>
                {panes}
                </div>
            </div>
        );
    }
}


