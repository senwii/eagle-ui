import React,{Component,PropTypes}  from 'react';
import {Col,Row,Grid,Button,Select} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code'

export default class Demo extends Component{
    static defaultProps = {
        input: true,
        keys:'bei'
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            input: this.props.input,
            options:[],
            defaultCity:''
        };
        setTimeout(()=>{
            this.setState({options: this.getOptions()})
        });
        setTimeout(function(){
            this.setState({
                defaultCity:'上海'
            });
        }.bind(this),2000);
    }
    getValue(value,key,type){
        let stype = {
            'init':'加载时调用',
            'enter':'回车时调用',
            'click':'点击每一项元素时调用'
        };
        document.getElementById('showtip').innerHTML = `<strong>${stype[type]}</strong>的值为：<b>"key":<span class="color-error">${key}</span></b>,<b>"value":<span class="color-error">${value}</span></b>`;
    }
    getValue2(value,key,type){
        let stype = {
            'init':'加载时调用',
            'enter':'回车时调用',
            'click':'点击每一项元素时调用'
        };
        document.getElementById('showtip2').innerHTML = `<strong>${stype[type]}</strong>的值为：<b>"key":<span class="color-error">${key}</span></b>,<b>"value":<span class="color-error">${value}</span></b>`;
    }
    getOptions(){
        return [
            <option value='bei' key="bei">北京</option>,
            <option value='shang' key="上海">上海</option>,
            <option value='nan' key="南京">南京</option>,
            <option value='3' key="杭州">杭州</option>,
            <option value='4' key="杭州西">杭州西</option>,
            <option value='5' key="杭州北站">杭州北站</option>,
            <option value='6' key="广州">广州</option>,
            <option value='7' key="深圳">深圳</option>,
            <option value='8' key="澳门">澳门</option>,
            <option value='10' key="太原">太原</option>,
            <option value='11' key="台湾">台湾</option>,
            <option value='12' key="香港">香港</option>
        ];
    }
    render(){
        return (
            <DemoLayout title="下拉框组件">
                <DemoItem title="默认使用">
                    <CodeShow>
                        <Code code={getFile('select-demo')}/>
                    </CodeShow>
                    <DemoShow>
                        <Select
                            readOnly
                            defaultChecked={this.state.defaultCity} getValueCallback={::this.getValue} placeholder="请选择" >
                            {this.state.options}
                        </Select>
                        <div id="showtip" className="color-info"></div>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="自动清除已选">
                    <CodeShow>
                        <Code code={getFile('select-demo-autoClear')}/>
                    </CodeShow>
                    <DemoShow>
                        <div id="showtip2" className="color-info"></div>
                        <Select
                            defaultChecked={this.state.defaultCity} getValueCallback={::this.getValue2} placeholder="请选择" autoClear={true}>
                            {this.state.options}
                        </Select>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        );
    }
}