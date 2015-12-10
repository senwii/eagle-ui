import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';
import Th from './Th.js';
import Td from './Td.js';
import Tr from './Tr.js'

/**
 * 表格组件
 * @class Table
 * @constructor
 * @module table
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/table.js {js}
 * @demo table.html {html}
 * @show true
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class Table extends Component{

    static propTypes = {
    };

    static defaultProps = {

    };

    constructor(props, context) {
        super(props, context);
        var tableData=[];
        Object.assign(tableData, props.data);
        console.debug('tableDataInit',tableData);

        this.state = {
            tableData:tableData,
            sortField:{}
        };
    }

    sort(field,method){
        if(method==='asc'){
            this.state.tableData.sort((pre,cur)=>{
                if(pre[field]>cur[field]){
                    return true;
                }else{
                    return false;
                }
            });
        }else{
            this.state.tableData.sort((pre,cur)=>{
                if(pre[field]<cur[field]){
                    return true;
                }else{
                    return false;
                }
            });
        }
        var sortFiled=this.state.sortField;
        for(var key in sortFiled){
            sortFiled[key]=null;
        };
        sortFiled[field]=method;
        this.setState({
            tableData:this.state.tableData,
            sortFiled:sortFiled
        });
    };

    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        if(!this.props.data){
            return(
                <table className={
                classnames(
                    this.getClassName('table')
                )}>
                    {this.props.children}
                </table>
            )
        };
        var self=this;
        let thList=React.Children.map(self.props.children,(Column,thIndex)=>{
            return (<Th
                {...Column.props}
                key={'th-'+thIndex}
                sort={this.state.sortField[Column.props.field]}
                clickCallback={::this.sort}
                >{Column.props.header}</Th>);
        },self);
        let trList=this.state.tableData.map((rowData,trIndex)=>{
            return <Tr key={'tr-'+trIndex}>
                {React.Children.map(self.props.children,(Column,tdIndex)=>{
                    return (<Td key={'td-'+trIndex+'-'+tdIndex}>{self.state.tableData[trIndex][Column.props.field]}</Td>);
                },self)}
            </Tr>;
        });
        return (
                <table className={
                classnames(
                    this.getClassName('table')
                )}>
                    <thead>
                    <Tr>
                        {thList}
                    </Tr>
                    </thead>
                    <tbody>
                    {trList}
                    </tbody>
                </table>
        );

    }
}