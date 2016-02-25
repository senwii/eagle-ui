/**
 * Created by slashhuang on 16/2/23.
 * 改变demo展示的样子
 * 统一展示的标签名字为UI展示和源码
 */

var demoArea = $('li[role="presentation"]');
demoArea.click(function(e){
    if(e.target.innerHTML.match('UI展示')){
        operateIframe(true);
    }else{
        operateIframe(false);
    }
});
var operateIframe = function (bool) {
    var iframeArea = $('.example-content.showdemo').children();
    if(bool){
        iframeArea.eq(0).find('iframe').attr('src','../assets/show.html').
                   css({ display:'block',width:'100%',height:'200px',overflow:'hidden'})
        }else{
        setTimeout(function(){
            iframeArea.eq(1).find('iframe').css('display','none')
        },0)
        }
    };
setTimeout(function(){operateIframe(true)},0);

