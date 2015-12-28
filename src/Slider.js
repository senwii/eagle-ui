/**
 * Created by slashhuang on 15/12/28.
 */


import React, { Component ,PropTypes,findDOMNode} from 'react';
export default class  Slider extends Component{
    constructor(props,context) {
        super(props, context);
        this.renderDisplay=this.renderDisplay.bind(this);
        this.state = {
            imgList: props.imgList,
            pageNum:props.pageNum,
            show:props.show,
            targetIndex:0,
            thumbNailIndex:0
        };
    }
    static defaultProps={
        pageNum:5,
        show:false
    };
    static propTypes = {
        /**
         * 图片信息
         * @property profile
         * @type string
         * @default
         * */
        profile:PropTypes.number,
        /**
         * 图片数组
         * @property imgList
         * @type String||number
         * @default 图片数组
         * */
        imgList:PropTypes.array,
        /**
         * 图片栏展示数目
         * @property pageNum
         * @type number
         * @default 5
         * */
        pageNum:PropTypes.number,
        /**
         * 是否显示图片展示slider
         * @property show
         * @type boolean
         * @default false
         * */
        show:PropTypes.bool,
        classPrefix:PropTypes.string
    };
    componentWillReceiveProps(props,context){
      this.setState({
          show:props.show
      })
    }
    renderDisplay(e){
        //点击下方缩略图的情况
        let index = /img||li/.test(e.target['nodeName'])?e.target.getAttribute('data-index'):eval('return');
        this.handleIndex.call(this,index*1);
    };
    handleIndex(index){
        let length = this.state.imgList.length;
        let pageNum = this.props.pageNum;
        if(index>=0){
            //如果图片展示未到尾部，则同时左移
            if(index<=length-pageNum) {
                this.setState({
                    targetIndex: index,
                    thumbNailIndex: index
                })
            }else if(index<length){
                this.setState({
                    targetIndex: index,
                    thumbNailIndex:length-pageNum
                })
            }else{
                this.setState({
                    targetIndex: length-1,
                    thumbNailIndex:length-pageNum
                })
            }
        }else{
            this.setState({
                targetIndex: 0,
                thumbNailIndex: 0
            })
        }
    }
    addIndex(num=1){
        let index = this.state.targetIndex + num;
        this.handleIndex.call(this,index);
    };
    lowerIndex(num=1){
        let index = this.state.targetIndex - num;
        this.handleIndex.call(this,index);
    }
    fadeOut(e){
        if(e.target.className.match('slider-mask')||e.target.nodeName.toLowerCase()=='em'){
            let node = findDOMNode(this.refs['sliderContainer']);
            this.setState({
                show:false
            });
            //node.getElementsByClassName('eg-slider-container')[0].classList.add('fadeout');
            //setTimeout(()=>{node.style.display='none'},800);
        }
    }
    render(){
        let {imgList,targetIndex,thumbNailIndex,show} = this.state;
        let {section,profile,pageNum}=this.props;
        let length=imgList.length;
        let containerStyle={
            display:show?'flex':'none'
        };
        return (
            <div className='eg-slider-mask' ref='sliderContainer' style={{...containerStyle}} onClick={this.fadeOut.bind(this)}>
                <div className='eg-slider-container fadein'>
                    <em onClick={this.fadeOut.bind(this)}></em>
                    <div className='eg-slider-img-container'>
                        <b className='eg-slider-arrow-left' onClick={()=>this.lowerIndex.call(this)}></b>
                        <div className='eg-slider-window'  style={{width:'380px'}}>
                            <ul style={{width:length*380+'px',left:-targetIndex*380+'px'}}>
                                {imgList.map((img)=>{
                                    return (
                                        <li style={{width:'380px'}}>
                                            <img src={img}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <b className='eg-slider-arrow-right' onClick={()=>this.addIndex.call(this)}></b>
                        <div className='eg-slider-img-hint'>
                            <i>{section}</i>
                            {profile[targetIndex]}
                            <i>{targetIndex+1}/{imgList.length}</i>
                        </div>
                    </div>
                    <div className='eg-slider-img-container-thumbnail'>
                        <b className='eg-slider-arrow-left' onClick={()=>{this.lowerIndex.call(this,pageNum)}}></b>
                        <div className='eg-slider-window'  style={{width:'380px'}}>
                            <ul onClick={this.renderDisplay}
                                style={{width:100*length/pageNum+'%',
                                        left:-(thumbNailIndex)*100/pageNum+'%'
                                }}>
                                {imgList.map((img,index)=>{
                                    let inlineStyle = null;
                                    if(index == targetIndex){
                                        inlineStyle = {
                                            borderColor:'#158acf'
                                        }
                                    }
                                    return (
                                        <li data-index={index} style={{width:100/length-1.1+'%',...inlineStyle}}>
                                            <img src={img} data-index={index}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <b className='eg-slider-arrow-right' onClick={()=>{this.addIndex.call(this,pageNum)}}></b>
                    </div>
                </div>
            </div>
        )
    }
}