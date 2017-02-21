import React,{Component} from 'react';
import {ButtonGroup,Toast,Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';
const themes = {
    def: {
        msg: '使用默认主题',
        name: 'default'
    },
    meituan:  {
        msg: '使用「meituan」主题',
        name: 'meituan'
    }
}
const MEITUAN_LINK_ID = 'meituan-link'
const MEITUAN_STYLE_ID = 'meituan-style'
export default class Theme extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            theme: themes['meituan']
        }
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = "js/meituan.css"
        link.id = MEITUAN_LINK_ID

        const style = document.createElement('style')
        style.innerText = `.menu .active{background: #2bb8aa;color: #fff;}.menu a:not(.sub):hover{background: #2bb8aa;color: #fff;}`
        style.id = MEITUAN_STYLE_ID
        this.styleLink = link
        this.styleExtra = style
    }
    componentDidMount(){
        document.getElementById(MEITUAN_LINK_ID) && this.setState({
            theme: themes['def']
        })
    }
    btnClickHandler(){
        let theme = ''
        if(this.state.theme.name == 'default'){
            // 移除「meituan」的css文件
            const style = document.getElementById(MEITUAN_STYLE_ID)
            const link = document.getElementById(MEITUAN_LINK_ID)
            style && style.parentNode.removeChild(style)
            link && link.parentNode.removeChild(link)
            theme = 'meituan'
        }else{
            // 在头部插入「meituan」的css文件
            document.head.appendChild(this.styleLink)
            document.head.appendChild(this.styleExtra)
            theme = 'def'
        }

        setTimeout(()=>{
            this.setState({
                theme: themes[theme]
            })
        })
    }
    render(){
        return (
            <DemoLayout title="主题">
                <DemoItem title="默认主题与「meituan」主题切换">
                    <CodeShow>
                        <Code code={getFile('theme')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={this.btnClickHandler.bind(this)}>{this.state.theme.msg}</Button>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        );
    }
};