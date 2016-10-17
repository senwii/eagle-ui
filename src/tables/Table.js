import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';
import Th from './Th.js';
import Td from './Td.js';
import Tr from './Tr.js'
/**
 * <h5>eagle-ui表格组件</h5>
 * <strong><a href='../classes/Table.html'>Table定义表格</a></strong><br>
 * <strong><a href='../classes/Th.html'>Th定义表头单元格</a></strong><br>
 * <strong><a href='../classes/Tr.html'>Tr定义表格行</a></strong><br>
 * <strong><a href='../classes/Td.html'>Td定义表格单元格</a></strong><br>
 * @module table(表格)
 * @main table
 * @static
 */
/**
 * 表格组件
 * @class Table
 * @constructor
 * @module table(表格)
 * @extends Component
 * @demo star.js {UI展示}
 * @demo table.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class Table extends Component{

    static propTypes = {
        /**
         * 用来渲染表格的数组，可选参数，如果传入data，会更具table下的column标签绑定的属性进行渲染
         * @property data
         * @type Array
         * */
        data:PropTypes.array

    };

    static defaultProps = {
        classPrefix:'table'
    };

    constructor(props, context) {
        super(props, context);
        var tableData=[];
        Object.assign(tableData, props.data);

        this.state = {
            tableData:tableData,
            sortField:{}
        };
    }
    componentWillReceiveProps(props){
        if(props.data){
            var tableData=[];
            Object.assign(tableData, props.data);
            this.setState({
                tableData:tableData,
                sortField:{}
            });
        }
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
                <table {...this.props} className={
                classnames(
                    this.getClassNamesForArguments('table'),
                    this.getClassNames(this.props),
                    this.props.className
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