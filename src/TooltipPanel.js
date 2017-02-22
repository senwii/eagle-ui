import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tooltip from './Tooltip.js';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
import ReactDom from 'react/lib/ReactDOM';
/**
 * tipsPanel组件
 * 方向可选：top,down,left,right.默认down
 * 存在边界判断，若指定方向容纳不了提示，会转为默认
 * 可以指定边界，即将边界的id值，赋给wrapper属性。则提示超出该元素范围则取反方向。
 * 主要属性和接口：
 * <ul>
 *     <li>direction:提示的方向，取值范围［top,bottom,left,right］默认down<br>
 *         如：<code>
 *           TooltipPanel direction='top' wapper='a'
 *         </code>
 *     </li>
 *     <li>msg:提示文字，必须要写，不然默认的没什么用吧<br>
 *         如：<code>
 *           TooltipPanel direction='top' wapper='a' msg='this is msg'
 *         </code>
 *     </li>
 *     <li>wrapper:指定边界元素，默认为可视窗口，如下则id为a的div为边界元素<br>
 *         如：<code>
 *            TooltipPanel direction='top' wapper='a'
 *         </code>
 *     </li>
 * </ul>
 * @class TooltipPanel
 * @module ui
 * @constructor
 * @demo #/toolTip|tooltip.js
 * @show true
 * */
@ClassNameMixin
export default
class TooltipPanel extends Component {
    static propType = {
        /**
         * 提示内容
         * @property msg
         * @type String
         * @default 这是个提示
         * */
        msg: PropTypes.string,
        /**
         * 是否指定tips的边界，如果指定超出该边界则改变方向，否则默认以可是窗口边界来判断
         * @property wrapper
         * @type string
         * @default ''
         * */
        wrapper: PropTypes.string,
        /**
         * 提示方向
         * @property direction
         * @type String
         * @default bottom
         * */
        direction: PropTypes.string,
        classPrefix: PropTypes.string,
        componentTag: PropTypes.string,
        /**
         * 触发事件类型，可选‘click‘，’hover‘
         * @property onTrigger
         * @type:String
         * @default hover
         * */
        trigger: PropTypes.string,
        /**
         * 可选 'black,white'
         * */
        bgColor: PropTypes.string,
        skin:PropTypes.string,
        /**
         * 提示内容padding，默认5px
         * */
        padding:PropTypes.string
    };
    static defaultProps = {
        show: false,
        direction: 'bottom',
        classPrefix: 'tooltip',
        wrapper: '',
        componentTag: 'div',
        trigger:'hover',
        bgColor:'#000'
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            /**
             * 显示与否由父组件控制
             * @type Boolean
             * */
            show: this.props.show
        };
        this.isOldDir = true;
        this.idName='tolltip-id';
    }

    /**
     * 动态更新展示
     */
    componentDidUpdate() {
        //this.changeStyle(this.props.direction);
    }

    /**
     * 渲染完成时进行方向和边界判断，调整tips的位置
     * @method componentDidMount
     * @return null
     * */
    componentDidMount() {
        /**
         * 如果事件是click，body加上事件，移除时隐藏
         * */
        this.changeStyle(this.tooltipTarget,this.props.direction);
        if(this.props.trigger == 'click'){
            let idName = this.idName;
            let self = this;
            document.addEventListener('click',((idName)=>{
                let id = idName;
                return (event)=>{
                    !self.parents(id,event.target)&&(self.setState({
                        show:false
                    }));
                }
            })(idName))
        }

    }
    parents(id,dom){
        let tempNode = dom.parentNode;
        while (tempNode && tempNode !== document) {
            if(tempNode.getAttribute('name') == id){
                return true;
            }else{
                tempNode = tempNode.parentNode;
            }
        }
        return false;
    }
    uniqueRef(){
        return 'toolTip' + Math.floor(Math.random() * 100);
    }
    setToolTipObj(){
        this.tooltipTarget = arguments[0];
    }
    handler(e){
        this.changeStyle(this.tooltipTarget,this.props.direction);
        this.setState({
            show:!this.state.show
        });

    }
    /**
     * 获得限制区域的宽，若未指定则默认可视区域大小
     *
     * */
    getWarpperWH() {
        let warp = this.props.wrapper;
        let warpWH;
        if (warp) {
            let warpNode = document.querySelector('#' + this.props.wrapper);
            warpWH = this.getClientWH(warpNode);
        } else {
            let bodys = this.getClientWH(document.body);
            let docs = this.getClientWH(document.documentElement);
            warpWH = this.getMaxBody(bodys, docs);
        }
        return warpWH;
    }

    /**
     * 获取元素的client宽高
     * */
    getClientWH(obj) {
        let wh = {
            width: obj.clientWidth,
            height: obj.clientHeight
        };
        return wh
    }

    /**
     * 获取tips的offset
     * 宽高容易获取，top和left循环向上直到body，如果指定边界a，则取两者之差
     * */
    getOffsetWH(obj) {
        let wh = {
            height: obj.offsetHeight,
            width: obj.offsetWidth
        };
        let warp = this.props.wrapper;
        let warpNode = warp?document.querySelector('#'+warp) : null;
        wh.left = this.getTrueLT(obj, true, warpNode);
        wh.top = this.getTrueLT(obj, false, warpNode);
        return wh
    }
    /**
     * 获取处理之后的offset，top和left
     * */
    getTrueLT(tipNode, isLeft, warpNode) {
        let tipNodeLT = this.getOffsetLT(tipNode,isLeft);
        if (warpNode) {
            let warpLT = this.getOffsetLT(warpNode,isLeft);
            tipNodeLT = tipNodeLT - warpLT;
        }
        return tipNodeLT;
    }
    /**
     * 获取offset top、left。
     * 两者获取方式相同，根据isleft区分left或top
     * */
    getOffsetLT(ele, isLeft) {
        let dir = isLeft ? 'offsetLeft' : 'offsetTop';
        let actuDir = ele[dir],
            current = ele.offsetParent;
        while (current != null) {
            actuDir = actuDir + current[dir];
            current = current.offsetParent;
        }
        return actuDir;
    }

    /**
     * tips方向和边界判断，调整tips的位置
     * @method changeStyle
     * @param direction {String}
     * @return null
     * */
    changeStyle(obj,direction) {
        let dir = direction;
        let [tipNode,arrowNode] = [
            ReactDom.findDOMNode(obj),
            ReactDom.findDOMNode(this.container)];
        let tips = this.getOffsetWH(tipNode);
        let arrow = this.getOffsetWH(arrowNode);
        let warpperWH = this.getWarpperWH();
        dir = this.isValidate(dir, tips, arrow, warpperWH);
        switch (dir) {
            case 'down':
                tipNode.style.top = arrow.height + 'px';
                tipNode.style.left = (arrow.width - tips.width) / 2 + 'px';
                break;
            case 'top':
                tipNode.style.top = '-' + (tips.height + 10) + 'px';
                tipNode.style.left = (arrow.width - tips.width) / 2 + 'px';
                break;
            case 'left':
                tipNode.style.right = arrow.width + 5 + 'px';
                tipNode.style.top = ((arrow.height - tips.height) / 2 - 5) + 'px';
                break;
            case 'right':
                tipNode.style.left = arrow.width + 5 + 'px';
                tipNode.style.top = ((arrow.height - tips.height) / 2 - 5) + 'px';
                break;
            default :
                break;
        }
        !this.isOldDir && this.getNewArrow(tipNode, dir);
    }

    /**
     * 获得浏览器的边界大小
     * @method getMaxBody
     * @param body {Object}
     * @param doc {Object}
     * @return maxBody {Object}
     * */
    getMaxBody(body, doc) {
        let maxBody = {
            height: body.height > doc.height ? body.height : doc.height,
            width: body.width > doc.width ? body.width : doc.width

        };
        return maxBody;
    }

    /**
     * 如果方向改变，重新设置箭头方向
     * */
    getNewArrow(tipNode, dir) {
        let arrow = tipNode.children[0];
        this.removeClass(arrow, classnames(
            this.getClassName('arrow-' + this.props.direction)
        ));
        this.addClass(arrow, classnames(
            this.getClassName('arrow-' + dir)
        ));
    }

    /**
     * 判断是否满足边界条件,返回满足的方向
     * 不满足的话应该说直接取相反方向
     * @method isValidate
     * @param dir {String}
     * @param tips {Object}
     * @param ele {Object}
     * @param maxBody {Object} 边界
     * @return flag {Boolean}
     * */
    isValidate(dir, tips, ele, maxBody) {
        let newDir = dir;
        switch (dir) {
            case 'down':
                if ((maxBody.height - ele.top) < (ele.height + tips.height)) {
                    newDir = 'top';
                    this.isOldDir = false;
                }
                return newDir;
                break;
            case 'top':
                if (ele.top < tips.height) {
                    newDir = 'down';
                    this.isOldDir = false;
                }
                return newDir;
                break;
            case 'left':
                if (ele.left < tips.width) {
                    newDir = 'right';
                    this.isOldDir = false;
                }
                return newDir;
                break;
            case 'right':
                if ((maxBody.width - ele.left) < (ele.width + tips.width)) {
                    newDir = 'left';
                    this.isOldDir = false;
                }
                return newDir;
                break;
            default :
                return newDir;
                break;
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            show : nextProps.show
        });
    }
    /**
     * @method render
     * @return ReactElement
     * */
    render() {
        let {children,bgColor,direction,...other} = this.props;
        let dir = direction == 'down' ? 'bottom': direction;
        let c = null;
        if(other.msg){
            c = [
                ...children,
                <Tooltip {...other } show = {this.state.show} setToolTipObj={this.setToolTipObj.bind(this)} bgColor={bgColor} direction ={dir}/>
            ];
        }else{
            c = React.Children.map(children,(option)=>{
                return React.cloneElement(option,{
                    show:this.state.show,
                    setToolTipObj:this.setToolTipObj.bind(this),
                    bgColor:bgColor,
                    direction:dir
                });

            },this);
        }
        if(other.trigger == 'hover'){
            other['onMouseOver'] = this.handler.bind(this);
            other['onMouseOut'] = this.handler.bind(this);
        }else{
            other.trigger = other.trigger.substr(0,1).toUpperCase()+other.trigger.substr(1);
            other[`on${other.trigger}`] = this.handler.bind(this);
        }

        return (
            <Grid
                {...this.props}
                {...other}
                name = {this.idName}
                className={classnames(
                    this.getClassName('container')
                    )
                }
                ref={(ref)=>{this.container = ref}} >
                {c}
            </Grid>
        );
    }

}