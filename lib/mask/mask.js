/**
 * Created by mac on 15/9/6.
 */
import mask from './mask.less';
import grid from '../grid/col.less';
import {Component,propTypes} from 'react';
export default class Mask extends Component{

    //static propTypes = {
    //    title:propTypes.string,
    //    text:propTypes.string.isRequired
    //    //onSuccess
    //    //onClose
      //     isShowFooter:false
    //time
    //};

    constructor(props, context) {
        super(props, context);
        this.state = {
            display:this.props.display
        };
    }

    show(){
        this.setState({
            display :true
        });
    }

    success(){
        const {onSuccess} = this.props;
        this.setState({
            display :false
        });
        onSuccess &&(onSuccess());
    }

    close(){
        const {onClose} = this.props;
        this.setState({
            display :false
        });
        onClose &&(onClose() );
    }

    renderTitle(){
        const {title} = this.props;
        if(title){
            return (
                <div className='title'>{title}</div>
            );
        }
        return '';

    }

    renderFooter(){
        if(this.props.isShowFooter){
            return (
                <div className='footer'>
                    <a className='btn' onTouchEnd={::this.success} >确定</a>
                </div>
            );
        }

        return '';
    }
    renderCloseBtn(){
        if(!this.props.time) {
            return (
                <div className='close' onTouchEnd={::this.close}></div>
            );
        }
        return '';
    }

    render(){
        const {text} = this.props;
        return (
            <div className='w-mask-container' style={{
               display:this.state.display ? 'block':'none'
            }}>
                <div className='content'>
                    {this.renderCloseBtn()}
                    {this.renderTitle()}
                    <div className='text'>{text}</div>
                    {this.renderFooter()}
                </div>
            </div>
        );
    }
}