import React,{Component} from 'react';
import {Search,Select,Input,Grid,Row,Col,List,Item} from 'eagle-ui.js';
let SearchSec= class SearchSec extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={5}>
                        <Select  callback={function(val){alert(val)}}>
                            <item> 北京</item>
                            <item> 上海</item>
                            <item> 南京</item>
                        </Select>
                    </Col>
                    <Col sm={5}>
                        <Search placeholder='shopId/门店名称' callBack={function(val){alert(val)}}>
                        </Search>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Grid>
        )
    }
}


