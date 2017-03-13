import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip
 * @module ui
 * @constructor
 * @demo #/toolTip|tooltip.js
 * @show true
 * */
@ClassNameMixin
export default class Tooltip extends Component {
    static propType={
        /**
         * 提示是否展示
         * @property show
         * @type Boolean
         * @default null
         * */
        show: PropTypes.boolean,
        /**
         * 提示内容
         * @property msg
         * @type String
         * @default null
         * */
        msg: PropTypes.string,
        /**
         * 提示方向
         * @property direction
         * @type String
         * @default null
         * */
        direction: PropTypes.string,
        classPrefix: PropTypes.string,
        componentTag:PropTypes.string
    };
    static defaultProps = {
        classPrefix: 'tooltip',
        padding:5
    }
    constructor(props, context) {
        super(props, context);
    }
    /**
     * 接收到新props时执行,state.show变为nextProps.show
     * 接收到新props时执行,state.show变为nextProps.show
     * 实现隐藏与显示
     * */
    /*componentWillReceiveProps(nextProps){
        this.setState({
            show : nextProps.show
        });
    }*/
    componentDidMount(){
       /* setTimeout(()=>{
            this.props.onChangeStyle(this.target,this.props.direction);
        });*/
        this.props.setToolTipObj(this.target);
    }
    render() {
        return (
            <Grid ref= {(ref)=>{
            this.target = ref
            }} componentName="tooltip" className={classnames(
                this.getClassName('wraper'),
                this.getClassName('tooltip'),
                {

                      [this.getClassName('show')]: this.props.show
                }
            )} >
                    <div className={classnames(
                    this.getClassName('arrow-'+this.props.direction)
                )} style={this.getStyle(this.props.bgColor)}>
                     <div className='arrow-tip' style={this.getStyle('#ddd')}></div>
                    </div>
                    <div className={classnames(
                    this.getClassName('content')
                )} style={{'backgroundColor':this.props.bgColor,'padding':parseInt(this.props.padding,10)+'px'}}>
                        {this.getContent()}
                    </div>

            </Grid>
        );
    }
    getStyle(color){
        let styles = {};
        let {direction} = this.props;
        let str = direction.substr(0,1).toUpperCase()+direction.substr(1);
        styles[`border${str}Color`]=color;
        return  styles;
    }
    /**
     * 判断是否有子元素，有的话取children，否则取msg
     * 两者均有以children优先
     * */
    getContent(){
        let {children,msg}=this.props;
        return children ? children : msg;
    }
}