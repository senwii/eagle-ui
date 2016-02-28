import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Component from './utils/Component';
/**
 * 星级评价(Star)组件<br />
 * 提供的UI展示属性接口包括<br/>
 * <pre>
 *     rate：星级评价的分数(满分为100)
 *     size：星星的大小(默认13*13px)
 * </pre><br>
 * @class Star
 * @module ui
 * @extends Component
 * @constructor
 * @demo docDemo/empty.html {UI展示}
 * @demo docDemo/star.js {源码}
 * @show true
 * */
export default class Star extends Component{
    static propTypes = {
        /**
         * 星级评价分数(满分100)
         * @property Rate
         * @type number
         * @default 0
         * */
        rate:PropTypes.number,
        /**
         * 星星大小
         * @property size
         * @type String||number
         * @default 13  可以取值10-20 默认单位为'px'
         * */
        size: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
        ]),
        classPrefix:PropTypes.string
    };
    static defaultProps = {
        classPrefix:'star',
        rate:0
    };
    constructor(props,context){
        super(props,context);
    }
    render(){
        let {rate,size} = this.props;
        //兼容用户输入px为单位的数据大小
        size=/px/i.test(size)?size.replace('px',''):size;
        let customizeStyle=size?{
            width:size*5+'px',
            height:size-1+'px',
            backgroundSize:size*5+'px auto'
        }:{};
        let shadowPosition=size?{
            backgroundPosition:"0  -"+size+"px"
        }:{};
        return (
            <div className={this.getProperty()} style={customizeStyle}>
                <div className={this.getClassName('grey')} style={{width:rate+'%',...shadowPosition}}></div>
            </div>
        )
    }
}