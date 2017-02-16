import React, { Component ,PropTypes} from 'react';
import './Code.less'
var Prism = require('prismjs');

export function getFile(fileName){
    let fileContent=require((`raw-loader!../code/${fileName}.text`));
    return fileContent;
}
export default class Code extends Component {
    componentDidMount(){
        let code=this.props.code;
        if(code){
            this.refs.code.innerHTML=Prism.highlight(code, Prism.languages.javascript);
        }
    }
    render() {
        let codeType=this.props.codeType||'javascript';
        return (
            <pre>
                <code ref='code' className={'language-'+codeType}>
                </code>
            </pre>
        );
    }
}
