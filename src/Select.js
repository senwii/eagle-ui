/**
 * Created by panqianjin on 15/11/12.
 */
import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

import Suggestion from './utils/Suggestion';

/**
 * 下拉选择框组件。
 * 有input参数可以自由输入，否则不在列表中的输入值将改变为第一个item
 * @Class Select
 * @Module form
 * @constructor
 * @extends Component
 * @since 0.1.0
 * @demo select.js {js}
 * */
export default class Select extends Suggestion {
    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @property callback
         * @type func
         * @default null
         * */
        getValueCallback: null,
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type string
         *
         * */
        classPrefix: 'select',
        componentTag: 'div',
        defaultValue:''
    }

    constructor(props, context) {
        super(props, context);

        this.inputId = this.uniqueId();

        super.setDefaultState({

        });
    }
    handler(eventType,e){

        this.keyHandler(e);
        this.setState({
            value:e.target.value
        });
        if(this.props[eventType] ){
            this.props[eventType](e);
        }
    }

    renderInput(){

        return (
            <Input
                ref={this.inputId}
                value={this.getTextValue()}
                icon="arrow_drop_down"
                iconStyle={{
                        width:'30px',
                        height:'30px',
                        top: '15px',
                        right: '0'
                    }}
                onKeyUp={this.handler.bind(this,'onKeyUp')}
                onChange={this.handler.bind(this,'onChange')}
                onKeyDown={this.handler.bind(this,'onKeyDown')}
                onFocus={::this.focusHandler}
                onBlur={::this.inputBlurHandler}
            />
        );
    }

    inputBlurHandler(){

        this.removeActiveValue();

        if(this.props.onBlur){
            this.props.onBlur(e);
        }
    }

    focusHandler(){

    }

    /**
     * 根据auto存在与否渲染不同类型的元素
     * @method render
     * @return {ReactElement}
     * */
    render() {
        return (
            <this.componentTag className={this.getProperty() } value={this.state.value}>
                {this.renderInput() }
                {this.renderSuggestion()}
            </this.componentTag>
        );
    }
}