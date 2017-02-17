'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dialogDialog = require('./dialog/Dialog');

var _dialogDialog2 = _interopRequireDefault(_dialogDialog);

/**
 * 弹出层组件
 * @class Dialog
 * @module ui
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo dialog.js {源码}
 * @show true
 * */

/**
 * 是否显示标题栏背景色
 * @property isHeaderBackground
 * @type Boolean
 * @default true
 * */

/**
 * 底部按钮对齐方式 center、right or left
 * @property buttonAlign
 * @type String
 * @default center
 * */

/**
 * 是否显示标题栏
 * @property isHeader
 * @type Boolean
 * @default true
 * */

/**
 * 内容区域对齐方式
 * @property contentAlign
 * @type String
 * @default center
 * */

/**
 * 是否显示遮罩层
 * @property isMask
 * @type Boolean
 * @default true
 * */

/**
 * 内容不在content之内 mask属性
 * @property outside
 * @type Boolean
 * @default false
 * */

/**
 * 是否显示关闭 mask常用属性
 * @property isClose
 * @type Boolean
 * @default false
 * */

/**
 * 标题
 * @property title
 * @type String
 * @default empty
 * */
/**
 * 是否点击背景层也能关闭弹窗
 * @property isMaskClose
 * @type Boolean
 * @default true
 * */

/**
 * 底部按钮组<br />
 * 当不设置type的时候，按钮的回调直接用callback定义就好，<br />
 * 如果设置了type为'success'或者'cancel'，callback属性将不会起到作用，此时可以通过dialog提供的promise来注册点击成功或者取消按钮时的回调事件:<br/>
 * <pre class="code prettyprint">
 * <code>
    Dialog.confirm('确定你已经打开了么？').then(()=>{
            alert('确定');
        },()=>{
            alert('取消');
        });
 * </code>
 * </pre>
 <br>
 * 按钮组格式如下：
    <pre class="code prettyprint">
        <code>
        [
             {
                 type: 'success',
                 name: '确认'
             },
             {
                 type:'cancel',
                 egStyle:'white',
                 name:'取消'
             },
             {
                 egStyle:'warning',
                 name:'自定义按钮',
                 callback:()=>{alert('自定义按钮');}
             }
         ]
        </code>
    </pre>
 * @property buttons
 * @type Array
 * @default empty
 * */

exports['default'] = _dialogDialog2['default'];
module.exports = exports['default'];