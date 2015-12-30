/**
 * Created by slashhuang on 15/12/25.
 */
/**
 * 星级评价
 * @class 星星
 * @module star
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Star.js {js}
 * @show true
 * */
import React, { Component ,PropTypes} from 'react';
import classNames from 'classnames';
import classNameMixin from './utils/ClassNameMixin.js';
@classNameMixin
export default class Star extends Component{
    static propTypes = {
        /**
         * 星级评价分数
         * @property Rate
         * @type number
         * @default 默认未0分
         * */
        Rate:PropTypes.number,
        /**
         * 星星大小
         * @property size
         * @type String||number
         * @default undefined  可以取值10-20 默认单位为'px'
         * */
        size:PropTypes.number||PropTypes.string,
        classPrefix:PropTypes.string
    };
    static defaultProps = {
        classPrefix:'star',
        Rate:0
    };
    constructor(){
        super();
    }
    render(){
        let {Rate,size} = this.props;
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
            <div className='eg-star-orange' style={customizeStyle}>
                <div className='eg-star-grey' style={{width:Rate+'%',...shadowPosition}}></div>
            </div>
        )
    }
}