/**
 * Created by slashhuang on 15/12/28.
 */


import React, { Component ,PropTypes,findDOMNode} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classNames from 'classnames';

/**
 *  照片浏览组件<br />
 *  提供的UI展示属性接口如下<br/>
 * <ul>
 *     <li>imgList:定义数据源数组<br>
 *         例如
 *         <pre><code>
 *                  [{
                        profile:'1叔2015上传',
                        url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
                        description:'闪惠商户培训资料',
                        thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
                     }]
 *         </code></pre>
 *     </li>
 *     <li>show:定义隐藏还是展示组件
 *         <code>
 *             <strong>默认</strong>false
 *         </code>
 *     </li>
 *     <li>urlKey:定义大图对应imgList数组中的key
 *         <code>
 *             在本例子中就是url
 *         </code>
 *     </li>
 *     <li>titleKey:定义大图下方文字对应imgList数组的key
 *         <code>
 *             在本例子中就是description
 *         </code>
 *     </li>
 *     <li>profileKey: 定义大图下方文字对应imgList数组的key
 *         <code>
 *             在本例子中就是profile
 *         </code>
 *     </li>
 *     <li>showThumbnail:定义是否展示缩略图
 *         <code>
 *             <strong>默认</strong>true
 *         </code>
 *     </li>
 *     <li>thumbnailKey:定义缩略图对应imgList数组的key
 *         <code>
 *             <strong>默认</strong>和urlKey保持一致,本例中就是thumbnail
 *         </code>
 *     </li>
 *      <li>pageNum:定义每页缩略图的个数
 *         <code>
 *             <strong>默认</strong>为5
 *         </code>
 *     </li>
 * </ul>
 * 使用方式:
 * <pre><code>&#60;imgSlider show={true} showThumbnail={true}
            imgList={imgList}
            profileKey={'profile'}
            urlKey={'url'}
            titleKey={'description'}
            thumbnailKey={thumbnailKey} /&#62;</code>
 * </pre>
 * @class Slider
 * @module ui
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo imgSlider.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class ImgSlider extends Component{
    constructor(props,context) {
        super(props, context);
        this.renderDisplay=this.renderDisplay.bind(this);
        this.state = {
            imgList: props.imgList,
            thumbnailKey: props.thumbnailKey||props.urlKey||'url',
            pageNum:props.pageNum,
            show:props.show,
            showThumbnail:props.showThumbnail,
            targetIndex:0,
            thumbNailIndex:0
        };
    }
    static defaultProps={
        pageNum:5,
        show:false,
        showThumbnail:true,
        classPrefix:'slider',
        profileKey:'profile',
        urlKey:'url',
        titleKey:'description'
    };
    static propTypes = {
        /**
         * slider的图片数组
         * @property imgList
         * @type Array
         * @default 图片数组(包含大图地址、描述等信息)
         * */
        imgList:PropTypes.array,
        /**
         * 是否展示slider
         * @property show
         * @type boolean
         * @default false(默认不展示)
         * */
        show:PropTypes.bool,
        /**
         * 图片信息(对应imgList中大图标题信息的key))
         * @property urlKey
         * @type string
         * @default  url
         * */
        urlKey:PropTypes.string,
        /**
         * 图片信息(对应图片信息数组对象中图片描述信息的key)
         * @property profileKey
         * @type string
         * @default  profile
         * */
        profileKey:PropTypes.string,
        /**
         * 图片描述信息(对应imgList中大图标题信息的key)
         * @property titleKey
         * @type string
         * @default description
         * */
        titleKey:PropTypes.string,
        /**
         * 是否显示slider的图片缩略图部分
         * @property showThumbnail
         * @type boolean
         * @default true
         * */
        showThumbnail:PropTypes.bool,
        /**
         * 缩略图的key
         * @property thumbnailKey
         * @type array
         * @default 默认和urlKey保持一致
         * */
        thumbnailKey:PropTypes.string,
        /**
         * 缩略图展示数目
         * @property pageNum
         * @type number
         * @default 5
         * */
        pageNum:PropTypes.number,
        classPrefix:PropTypes.string
    };
    componentWillReceiveProps(props){
      this.setState({
          show:props.show,
          showThumbnail:props.showThumbnail,
          thumbnailKey: props.thumbnailKey||props.urlKey,
          targetIndex:0,
          thumbNailIndex:0,
          imgList:props.imgList||this.state.imgList
      });
      let _this = this;
    }
    renderDisplay(e){
        //点击下方缩略图的情况
        let index = /img||li/i.test(e.target['nodeName'])?e.target.getAttribute('data-index'):eval('return');
        this.handleIndex.call(this,index*1);
    };
    handleIndex(index){
        let length = this.state.imgList.length;
        let pageNum = this.props.pageNum;
        if(index>=0){
            //1图片总长度小于缩略图预制的长度 2未到最后的情况，展示逻辑放在一起
            if(length<=pageNum){
                this.setState({
                    targetIndex:index,
                    thumbNailIndex: 0
                })
            }
            else if(index<=length-pageNum) {
                this.setState({
                    targetIndex: index==length?length-1:index,
                    thumbNailIndex: index
                })
            }else if(index<length){
                //缩略图已到尾部
                this.setState({
                    targetIndex: index,
                    thumbNailIndex:length-pageNum
                })
            }else{
                //回到最后的状态
                this.setState({
                    targetIndex: length-1,
                    thumbNailIndex:length-pageNum
                })
            }
        }else{
            //回到最初状态
            this.setState({
                targetIndex: 0,
                thumbNailIndex: 0
            })
        }
    }
    addIndex(num=1){
        let length = this.state.imgList.length;
        let index = this.state.targetIndex + num-length>=0?length-1:this.state.targetIndex + num;
        this.handleIndex.call(this,index);
    };
    lowerIndex(num=1){
        let index = this.state.targetIndex - num<0?0:this.state.targetIndex - num;
        this.handleIndex.call(this,index);
    }
    fadeOut(e){
        if(e.target.className.match('slider-mask')||e.target.nodeName.toLowerCase()=='em'){
            this.setState({
                show:false
            });
        }
    }
    render(){
        let {imgList,thumbnailKey,targetIndex,thumbNailIndex,show,showThumbnail} = this.state;
        let {profileKey,urlKey,titleKey,pageNum}=this.props;
        let length=imgList.length;
        let containerStyle={ display:show?'block':'none'};
        //设置行内样式
        let customizeStyle=this.props.style||{};
        //阻止背景滚动
        //show?document.body.style.cssText='position:fixed':document.body.style.cssText='';
        let thumbnailContainerStyle= { display:showThumbnail?'block':'none'};
        return (
            <div onClick={this.fadeOut.bind(this)} >
                <div ref='slider-container' className={ classNames('eg-slider-container', 'fadein',this.props.className)
                } style={{...customizeStyle,...containerStyle}} >
                    <em onClick={this.fadeOut.bind(this)}></em>
                    <div className='eg-slider-img-container'>
                        <div className={'eg-slider-field-common eg-slider-field-left'}  onClick={()=>this.lowerIndex.call(this)}>
                            <b className='eg-slider-arrow-left'></b>
                        </div>
                        <div className='eg-slider-window'  style={{width:'380px'}}>
                            <ul style={{width:length*380+'px',left:-targetIndex*380+'px'}}>
                                {imgList.map((img,index)=>{
                                    return (
                                        <li style={{width:'380px'}}  key={'img-'+index}>
                                            <img src={img[[urlKey]]} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={'eg-slider-field-common eg-slider-field-right'}  onClick={()=>this.addIndex.call(this)}>
                            <b className='eg-slider-arrow-right'></b>
                        </div>
                        <div className='eg-slider-img-hint'>
                            <i>{imgList[targetIndex][titleKey]}</i>
                            {imgList[targetIndex][profileKey]}
                            <i>{targetIndex+1}/{imgList.length}</i>
                        </div>
                    </div>
                    <div className='eg-slider-img-container-thumbnail' style={{...thumbnailContainerStyle}}>
                        <div className={'eg-slider-field-common eg-slider-field-left'} onClick={()=>{this.lowerIndex.call(this,pageNum)}}>
                            <b className='eg-slider-arrow-left' ></b>
                        </div>
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
                                        <li data-index={index} style={{width:100/length-1.1+'%',...inlineStyle}} key={'thumb-'+index}>
                                            <img src={img[thumbnailKey]} data-index={index} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={'eg-slider-field-common eg-slider-field-right'} onClick={()=>{this.addIndex.call(this,pageNum)}}>
                            <b className='eg-slider-arrow-right' ></b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}