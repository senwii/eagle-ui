import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';

import Row from './Row.js';
import Col from './Col.js';

@ClassNameMixin
export default class Calendar extends Component{

    static propTypes = {
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type String
         * @default calendar
         * */
        classPrefix:PropTypes.string,
        /**
         * 起始日期
         * @property startDate
         * @type String
         * */
        startDate:PropTypes.string,
        /**
         * 终止日期
         * @property endDate
         * @type String
         * @default
         * */
        endDate:PropTypes.string,
        /**
         * 默认选中日期
         * @property defaultDate
         * @type String
         * @default new Date()
         * */
        defaultDate:PropTypes.string,
        /**
         * 日期格式
         * @property format
         * @type string
         * @default 'yyyy-MM-dd'
         * */
        format:PropTypes.string
    };

    static defaultProps = {
        format:'yyyy-MM-dd',
        classPrefix:'calendar'
    };

    constructor(props, context) {
        super(props, context);

        this.today = new Date();

        this.state = {
            defaultDate:this.props.defaultDate || new Date(),
            selectedDate:this.props.defaultDate || new Date()
        };
    }

    getDays(arr,selectedDate,defaultDate){
        let d,dom = [],
            month = selectedDate.getMonth(),
            year = selectedDate.getFullYear();

        for(let j=1;j<=7;j++){
            if(arr.length > 0){
                d = arr.shift();
                //"eg-active" eg-calendar-selected
                dom.push(<td><span className={
                    classnames({
                        [this.getClassName('active',false)]:this.isToday(year,month+1,d ),
                        [this.getClassName('selected')]:(defaultDate.getFullYear()==year && defaultDate.getMonth() == month && defaultDate.getDate()==d )
                    })
                }>{d}</span></td> );
            }
        }
        return dom;
    }

    draw(){
        let {defaultDate,selectedDate} = this.state;
        selectedDate = typeof(selectedDate)!='string' ? selectedDate : new Date(selectedDate);
        let month = selectedDate.getMonth(),
            year = selectedDate.getFullYear(),
            arr = [];
        //生成单月的日期
        for(let i =1,firstDay = new Date(year,month,1).getDay();i<= firstDay;i++){
            arr.push(' ');
        }
        for(let i=1,monthDay = new Date(year,month,0).getDate();i<=monthDay;i++ ){
            arr.push(i);
        }

        let d,dom = [];
        while(arr.length > 0){
            dom.push(<tr className="body">
                {
                    this.getDays(arr,selectedDate,typeof(defaultDate)!='string' ? defaultDate : new Date(defaultDate) )
                }
            </tr>);


        }

        return dom;
    }

    isToday(year, month, date){
        var d = this.today;
        return d.getFullYear() == year && (d.getMonth() + 1) == month && d.getDate() == date;
    }

    getDate(year, month, date){
        let {format} = this.props;

        return format.replace(/y{4}/,year).replace(/M{1,2}/, month).replace(/d{1,2}/, date);
    }

    render(){

        return (
            <div className="eg-calendar-container">
                <div className="eg-calendar-box">
                    <div className="box">
                        <Row className="eg-calendar-header">
                            <Col sm={3}></Col>
                            <Col sm={6} >
                                <select className="options">
                                    <option>2015年4月</option>
                                    <option>2015年5月</option>
                                    <option>2015年6月</option>
                                    <option>2015年7月</option>
                                </select>
                            </Col>
                            <Col sm={3} >
                                <span className="today">今天</span>
                            </Col>

                        </Row>
                        <div className="eg-calendar-body">
                            <table className="calendar">
                                <tr className="head">
                                    <td>日</td>
                                    <td>一</td>
                                    <td>二</td>
                                    <td>三</td>
                                    <td>四</td>
                                    <td>五</td>
                                    <td>六</td>
                                </tr>
                                {this.draw()}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}