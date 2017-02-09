/**
 * Created by mac on 15/9/8.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * ButtonGroup组件配合Button组件,提供横、竖两种排列方式（它的作用是将Button成组展示）<br/>
 * 设置justify属性时可以将按钮组水平排列<br/>
 * 设置tacked属性时可以将按钮组竖直排列
 * <div><a target="_blank" href="http://future-team.github.io/eagle-ui/examples/index.html#/button">demo展示</a></div>
 * <div><a target="_blank" href="https://github.com/future-team/eagle-ui/blob/master/src/ButtonGroup.js">查看源码</a></div>
 * @class ButtonGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @example
 *      import {ButtonGroup,Button} from 'eagle-ui';
 *      ...
 *      function onActive(target,html){
 *          console.log(target,html);
 *      }
 *      ...
 *      <ButtonGroup egType="justify" activeCallback={onActive}>
 *          <Button radius egSize="sm" egStyle="warning">水平按钮组1</Button>
 *          <Button radius egSize="sm" egStyle="warning">水平按钮组2</Button>
 *          <Button radius egSize="sm" egStyle="warning">水平按钮组3</Button>
 *      </ButtonGroup>
 * */
export default class ButtonGroup extends Component{

    static propTypes={
        /**
         * 是否自适应宽度并水平排列
         * @property justify
         * @type Boolean
         * @default false
         * */
        justify:PropTypes.bool,
        /**
         * 是否垂直排列
         * @property tacked
         * @type Boolean
         * @default false
         * */
        tacked:PropTypes.bool,
        egType:PropTypes.string
    };

    static defaultProps = {
        classPrefix:'btn-group',
        componentTag:'div'
    };
    /**
     * tacked: bool 是否垂直排列
     * justify: justify 是否自适应宽度
     * */
    constructor(props, context) {
        super(props, context);
        //this.classNameMixin = new ClassNameMixin(this.props);

        this.state = {
            active:this.props.active
        };
    }
    /**
     * 点击按钮组中任意按钮时触发的回调事件
     * @event  activeCallback
     * @param {dom} target 触发事件的dom节点
     * @param {innerHTML} html 触发事件dom节点的innerHTML
     * */
    mouseDownHandler(e){
        let target = e.target;
        this.execMethod('active',target,target.innerHTML);
        this.setState({
            active:target.innerHTML
        })
    }

    render(){
        const {componentTag:Component} = this.props;

        let options = React.Children.map(this.props.children,(option)=>{

            let opt = React.cloneElement(option,{
                onMouseDown:this.mouseDownHandler.bind(this),
                active:this.state.active == option.props.children
            });
            return opt;

        },this);

        return (
            <Component {...this.props} className={
                classnames(
                    this.getProperty(),
                    'clearfix'
                )}>{options}</Component>
        );
    }
}