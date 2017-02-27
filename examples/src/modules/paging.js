import React, { Component ,PropTypes} from 'react';
import {Col,Row,Paging,Button} from 'eagle-ui';
import Code from '../libs/Code.js';
import {getFile} from '../libs/Code.js';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout'


let page = 1;
function callback(page){
    page = page;
    window.location = location.href.replace(/\?.*/,'')+'?page='+page+'&pageSize='+pageSize;
}

function loadPageCallback(pageSize){
    window.location = location.href.replace(/\?.*/,'')+'?page='+page+'&pageSize='+pageSize;
}
var pageSize = 20;
let arrs = [10,15,23,35,40],
    arr1 = '1';

export default class PagingCls extends Component{
    constructor(props,context){
        super(props,context);

        this.state={
            showItemsNumber:0
        };
    }
    toggleItemNumber(){
        this.setState({
            showItemsNumber:!this.state.showItemsNumber
        });
    }
    render(){
        let query = this.props.location.query,
            page = query.page*1 ||0,
            pageSize = query.pageSize*1 || 20,
            {showItemsNumber}=this.state;
        return (
            <DemoLayout title="分页">
                <DemoItem title="">
                    <CodeShow>
                        <Code code={getFile('paging')}>
                        </Code>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={::this.toggleItemNumber}>
                            {(showItemsNumber?'隐藏':'显示')+'条数设置工具'}
                        </Button>
                        <Paging showItemsNumber={showItemsNumber} chooseMaxPageSize={50} loadPageCallback={loadPageCallback} currentPage={page} pageSize={pageSize}
                                pageCallback={callback} total={5024} choosePageSize={arr1}/>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        );
    }
}