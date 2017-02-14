/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import {Col,Row,Column,Th,Table,Tr,Td} from 'eagle-ui';


export default class TableCls extends Component{
    constructor(props,context){
        super(props,context);

        this.state={
            tableData:[
                {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com',score:2},
                {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com',score:3},
                {name: 'Estevan', email: 'Aimee7@hotmail.com',score:4},
                {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com',score:5},
                {name: 'Tressa', email: 'Yadira1@hotmail.com',score:6},
            ]
        };
    }
    componentDidMount(){
        let _this=this;
        setTimeout(()=>{
            _this.setState({
                tableData:[
                    {name: 'Amelia2', email: 'Dexter.Trantow57@hotmail.com',score:200},
                    {name: 'Rylan2', email: 'Angelita_Weimann42@gmail.com',score:100},
                    {name: 'Estevan2', email: 'Aimee7@hotmail.com',score:106},
                    {name: 'Florence2', email: 'Jarrod.Bernier13@yahoo.com',score:233},
                    {name: 'Tressa2', email: 'Yadira1@hotmail.com',score:900},
                ]
            })
        },5000);
    }
    render(){
        let tableData=this.state.tableData;
        return (
             <div>
                <Row>
                    <Col>
                        <Table data={tableData}>
                            <Column
                                header="Name"
                                field='name'
                                cell={
                                    <Td data={tableData}></Td>
                                }
                                />
                            <Column
                                header={<span style={{color:"red"}}>Email</span>}
                                field='email'
                                cell={
                                    <Td data={tableData} ></Td>
                                }
                                />
                            <Column
                                header={<span style={{color:"green"}}>Score</span>}
                                field='score'
                                cell={
                                    <Td data={tableData} ></Td>
                                }
                                />
                        </Table>
                     </Col>
                 </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                            <Tr>
                                <Th>数据类型</Th>
                                <Th>数据项</Th>
                                <Th>昨日</Th>
                                <Th>本月</Th>
                                <Th>上月</Th>
                                <Th>本月城市排名</Th>
                            </Tr>
                            </thead>
                            <tbody>
                            <Tr>
                                <Td rowSpan="4">过程指标</Td>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr>
                                <Td arrow-up>消费交易额</Td>
                                <Td arrow-down>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr split>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td arrow-down>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr>
                                <Td rowSpan="4">业绩</Td>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            <Tr>
                                <Td>消费交易额</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>1876500</Td>
                                <Td>200</Td>
                            </Tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}