/**
 * Created by slashhuang on 16/2/23.
 * 改变demo展示的样子
 * 统一展示的标签名字为UI展示和源码
 */

//var demoArea = $('li[role="presentation"]');
//demoArea.click(function(e){
//    if(e.target.innerHTML.match('UI展示')){
//        operateIframe(true);
//    }else{
//        operateIframe(false);
//    }
//});
var operateIframe = function () {
    var iframeArea = $('.example-content.showdemo').children();
    var href= location.href;
    var relLink = href.substring(0,href.indexOf('eagle-ui'))+'eagle-ui/examples/index.html';
    var getArray = href.split('/');
    var mapKey = getArray[getArray.length-1];
    var mapPool={
        input:['Input','RadioGroup','RadioGroup',''],
        validate:['ValidatorPanel']
    };
    var hash =(function(Pool){
        for(var key in Pool){
           for(var k=0;k<Pool.length;k++){
                if(Pool[key][k]==mapKey){
                    return Pool[key][k];
                    break;
                }
            }
        }
    }(mapPool))
    iframeArea.eq(0).find('iframe').attr('src',relLink+hash).
        css({ display:'block',width:'100%',height:'200px',overflow:'hidden'});

    $('.btn.btn-info.btn-viewDemo').off('click');
    $('.btn.btn-info.btn-viewDemo').html('<a href='+relLink+'></a>');

    };
setTimeout(function(){operateIframe()},0);

