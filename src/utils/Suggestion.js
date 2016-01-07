/**
 * Created by panqianjin on 15/11/12.
 */
import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';

import Component from './Component';

export default class Suggestion extends Component {

    static defaultProps = {

    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            _reload:false
        };

    }

    //渲染列表选项

    renderItem(){

    }

    //搜索
    search(val){

        //重新渲染
        this.setState({
            _reload:true
        });
    }

    hide(){
        super.hide();
    }

    show(){
        super.show();
    }

    //监听用户输入
    keyDownHandler(event){
        if (event.type != 'keydown') {
            var val = $.trim(this.element.val());
            if (val === '') {
                this.hide();
                return;
            }

            switch (event.keyCode) {
                case 27:
                    //this.hide();
                    return;
                case 38: //up键
                    //this.show();
                    this.moveActive('up');
                    return;
                case 40: //down键
                    //this.show();
                    this.moveActive('down');
                    return;
                case 13: //回车
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.activeIndex === -1) {
                        //当用户没有选择任何sug项而直接按回车时
                        this.onEnterCallback(val);
                    } else {
                        //当用户通过上下键选择了某一项sug项后按回车时
                        //this.selectSug($(this.items[this.activeIndex]).html(),this.activeIndex );
                    }
                    this.hide();
                    return;
                default:
                    //this.valChange(val);
            }
        }
    }

    //数据查询方式 ajax或者直接查询

    //渲染列表
    renderSuggestion() {
        return (
            <ul className={`${this.getClassNamespace()}-suggestion`}>
                <li>肖敏</li>
                <li>肖敏</li>
                <li>肖敏</li>
                <li>肖敏</li>
            </ul>
        );
    }
}