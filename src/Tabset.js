/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tab from './Tab.js';
import ReactDom from 'react/lib/ReactDOM';
/**
 * 导航标签组件，用户可以在不同的tab之间进行切换<br/>
 * 需要和Tab组件配合使用,Tabset相当于是Tab的容器
 * @class Tabset
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo empty.html {UI展示}
 * @demo src/modules/tab.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class Tabset extends Component{
    static defaultProps = {
        classPrefix:'tabset',
        activeTab:0
    };


    static propTypes = {
        /**
         * 需要在初始的时候打开第几个tab，默认为0（从0计数，即打开第一个tab）
         * @property activeTab
         * @type Number
         * @default 0
         * */
        activeTab:PropTypes.number,
        /**
         * 回调方法，当用户切换不同tab时，会调用这个回调。
         * @event  tabCallback
         * @param {Number} activeTabIndex 当前激活的是第几个tab，从0开始计数
         * @default undefined
         * */
        tabCallback:PropTypes.func
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            active:props.activeTab,
            tabSlider:{
                left:0,
                width:0
            }
        };
        if(this.props.tabCallback){
            this.props.tabCallback(props.activeTab);
        }
    }
    componentDidMount(){
        this.tabItemListMouseLeaveHandler();
    }
    activeHandler(index) {
        if(this.state.active !== index){
            this.setState({
                active:index
            });
            if(this.props.tabCallback){
                this.props.tabCallback(index);
            }
        }
    }
    tabItemListMouseLeaveHandler(){
        let activeTab=ReactDom.findDOMNode(this.refs['tabItem'+this.state.active]);
        this.timeoutObj=setTimeout(function(){
            this.tabItemMouseEnterHandler(activeTab.offsetLeft,activeTab.offsetWidth);
        }.bind(this),400);
    }
    tabItemMouseEnterHandler(left,width){
        clearTimeout(this.timeoutObj);
        clearTimeout(this.timeoutEnter);
        this.timeoutEnter = setTimeout(function(){
            this.setState({
                tabSlider:{
                    left,
                    width
                }
            });
        }.bind(this),200);

    }
    render(){
        let headings=React.Children.map(this.props.children,(option,index)=>{
            let {
                tabCallback,
                ...other
            } = option.props;
            return <Tab
                ref={'tabItem'+index}
                index={index}
                active={this.state.active === index}
                clickCallback={::this.activeHandler}
                mouseEnterCallback={::this.tabItemMouseEnterHandler}
                {...other}></Tab>;
        },this);
        let panes = React.Children.map(this.props.children,(option,index)=>{
            return <div
                className={classnames(this.getClassName('panes') ) }
                style={{display: this.state.active === index ? null : 'none'}}
                >{option.props.children}</div>;
        },this);
        return (
            <div>
                <ul className={classnames(this.getClassName('tab-list')) }
                    onMouseLeave={::this.tabItemListMouseLeaveHandler}>
                {headings}
                    <li className={classnames(this.getClassName('slider-container') ) }>
                        <div className={classnames(this.getClassName('slider') ) }
                            style={{width:this.state.tabSlider.width,left:this.state.tabSlider.left}}>
                        </div>
                    </li>
                </ul>
                <div className={classnames(this.getClassName('tab-content') ) }>
                {panes}
                </div>
            </div>
        );
    }
}


