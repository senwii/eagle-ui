/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component, PropTypes, ReactDOM} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import {Input} from './Input.js';
import {Button} from './Button.js';
import {Row} from './Row.js';
import {Col} from './Col.js';
import {Grid} from './Grid.js';
/**
 * 搜索按钮
 *
 * */
export class Search extends Component {
    static defaultProps = {
        id: '1',
        callBack: null
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (
            <Grid>
                <Row className='eg-search-wrapper search-icon'>
                        <Input ref={this.props.name} id={this.props.id} placeholder="请输入"
                               onChange={::this.changeValue}/>
                </Row>
                <Button radius egSize="xs" onClick={::this.submitSearch}>搜索</Button>
            </Grid>
        );
    }

    changeValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    submitSearch() {
        let val = this.state.value;
        this.props.callBack && this.props.callBack(val);
    }
}