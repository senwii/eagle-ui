/**
 * Created by slashhuang on 16/2/23.
 * 改变demo展示的样子
 * 统一展示的标签名字为源码
 */

var operateIframe = function () {
    $(document).ready(function(){
       $('pre').addClass('code prettyprint');
    });
    //映射iframe的地址
    var href= location.href;
    var relLink = href.substring(0,href.indexOf('eagle-ui'))+'eagle-ui/examples/#/';
    var getArray = href.split('/');
    var mapKey = getArray[getArray.length-1].replace(/\.html.*/,'');
    var mapPool={
        //form模块map方式
        'Input':'input',
        'RadioGroup':'input',
        'CheckboxGroup':'input',
        'Button':'button',
        'ButtonGroup':'button',
        'ValidatorPanel':'validate',
        'Select':'select',
        //grid布局
        'Row':'Demo1',
        'Col':'Demo1',
        'Grid':'Demo1',
        //panel面板
        'Panel':'panel',
        'PanelContent':'panel',
        'PanelFooter':'panel',
        'PanelHeader':'panel',
        //table表格
        'Column':'table',
        'Table':'table',
        'Td':'table',
        'Th':'table',
        'Tr':'table',
        //ui模块
        'Slider':'slider',
        'Label':'label',
        'LabelGroup':'label',
        'Search':'suggestion',
        'Suggestion':'suggestion',
        'Star':'star',
        'Calendar':'calendar',
        'CalendarPanel':'calendar',
        'Crumb':'crumb',
        'Dialog':'dialog',
        'Paging':'paging',
        'Tab':'tab',
        'Tabset':'tab',
        'Toast':'toast',
        'Tooltip':'toolTip',
        'TooltipPanel':'toolTip'
    };
    var iframeStyle = {
        display:'block',
        width:'100%',
        'max-height':'2000px',
        overflow:'hidden'
    };
    var iframeLink = relLink+mapPool[mapKey];
    //第一次进页面的时候，加载页面，并执行自适应
    var iframeArea = $('.example-content.showdemo').children();
    if($('li[role="presentation"].active').html().match('展示')){
        iframeArea.eq(0).find('iframe').attr('src',iframeLink).css(iframeStyle)
        .load(function(){
               hideCode()
        });
    }
    $('.btn.btn-info.btn-viewDemo').html('<a target="_blank" style="color:#fff" href='+iframeLink+'>view Demo</a>');
    //隐藏编辑代码按钮
    $('.btn.btn-info.btn-editDemo').hide();
    //关闭生成代码功能
    $('.btn.btn-info.btn-viewDemo').off('click');


    //处理点击回调操作
    //主要函数操作
    var hideCode = function(){
        $('.demo-loaded.active').find('pre.code.prettyprint').hide();
        //自适应iframe高度
        var iframe = $('.demo-loaded.active').find('iframe');
        iframe.css('height',iframe.eq(0).contents().find('html').height() + 'px');
    };
    var hideIframe = function(){
        $('.demo-loaded.active').find('iframe').hide();
    };
    //控制顶部tab标签
    $('li[role="presentation"]').click(function(e){
        //先让smartDoc执行逻辑，然后再用我写的逻辑
        setTimeout(function(){
            if((e.target||e.srcElement).innerHTML.match('源码')){
                hideIframe()
            }else{
                hideCode();
            }
        },0)
    });

    };
setTimeout(function(){operateIframe()},0);

