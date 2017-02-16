import React,{Component} from 'react';
import './Layout.less'
export class DemoLayout extends Component {
    constructor(props) {
        super(props)
    }
    render (){
        return (
            <div className="doc-content">
                <h1>{this.props.title}</h1>
                {
                    this.props.desc && (<div className="desc"  dangerouslySetInnerHTML={{__html: this.props.desc}}></div>)
                }
                {this.props.children}
            </div>
        )
    }
}
export class DemoItem extends Component {
    constructor(props) {
        super(props)
    }
    render (){
        return (
            <div>
                <h2>{this.props.title}</h2>
                {
                    this.props.desc && (<div className="desc"  dangerouslySetInnerHTML={{__html: this.props.desc}}></div>)
                }
                <div className="doc-panel">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class CodeShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: true
        }
    }
    collapseClick() {
        this.setState({
            collapse: !this.state.collapse
        })
    }
    codeClick() {
        this.state.collapse && this.setState({
            collapse: false
        })
    }
    render (){
        return (
            <div className="doc-code">
                {/*<a href="javascript:;" className={"doc-code-collapse " + (this.state.collapse ? 'active' : '')} onClick={this.collapseClick.bind(this)}/>*/}
                <div className="doc-code-content" onClick={this.codeClick.bind(this)}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class DemoShow extends Component {
    constructor(props) {
        super(props)
    }
    render (){
        return (
            <div className="doc-demo">
                {this.props.children}
            </div>
        )
    }
}