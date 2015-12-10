/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Table from '../../lib/Table/Table.js';
import Tr from '../../lib/Table/Tr.js';
import Td from '../../lib/Table/Td.js';
import Th from '../../lib/Table/Th.js';
import Column from '../../lib/Table/Column.js';

var tableData=[
    {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com',score:100},
    {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com',score:200},
    {name: 'Estevan', email: 'Aimee7@hotmail.com',score:106},
    {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com',score:233},
    {name: 'Tressa', email: 'Yadira1@hotmail.com',score:900},
];


ReactDOM.render(
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
    ,document.getElementById('root'));