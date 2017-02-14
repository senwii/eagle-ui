/**
 * Created by slashhuang on 15/12/21.
 */
import React, { Component ,PropTypes} from 'react';
import {findDOMNode} from 'react/lib/ReactDOM';
import {Star} from 'eagle-ui';
export default class StarDemo extends Component {
    render(){
        return(
            <div>
                不可修改数据
                <br/>
                <Star/><br/>
                <Star rate={50} size={15}/>
                <br/>
                <Star rate={60} size={16} />
                <br/>
                <Star rate={70} size={17}/>
                <br/>
                <Star rate={80} size={18} />
                <br/>
                可鼠标浮动修改数据
                <br/>
                <Star rate={90} size={18}  disable={false}/>
                <br/>
                <Star rate={10} size={19}  disable={false}/>
                <br/>
                <Star rate={20} size={20} disable={false}/>
                <br/>
                <Star rate={30} size={21} disable={false}/>
                <br/>
                <Star rate={40} size={22} disable={false}/>
                <br/>
                <Star rate={50} size={23} disable={false} ref='test'/>
                <br/>
                <div
                    style={{
                    background:'orangered',
                    display:'inline-block',
                    color:'#fff',
                    cursor:'pointer',
                    padding:'3px'}}
                    onClick={()=>{
                    alert('rate is'+this.refs['test'].Rate)
                }}>点击获取最后一组星星的红色比率数据</div>

            </div>
        )
    }
}

