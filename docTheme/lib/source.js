/**
 * Created by slashhuang on 16/2/23.
 * 相关配置文件请写在configStaticFile变量
 */
var configStaticFile= {
    "css":["docTheme/dianping-theme.css"],
    "js":["docTheme/dianping-theme.js","http://uedfamily.com/documents/eagle-ui/examples/js/examples.js"]
};
var filePaths = function(configStaticFile){
    var href = location.href;
    //根据不同的页面加载正确的路径
    var regExp = /(module.*|classes.*)+/i;
    if(href.match(regExp)){
        href = href.replace(regExp,'');
    };
    var newPathObj={};
    for(var key in configStaticFile){
        newPathObj[key] = configStaticFile[key].reduce(function(pre,ele){
                return pre.concat(ele.indexOf('http')>-1?ele:href+ele);
        },[])
    }
    return newPathObj;
};
var addLink = function(paths){
    var link=document.createElement('link');
    link.rel="stylesheet";
    link.href=paths;
    document.head.appendChild(link);

};
var addScript = function(paths){
    debugger;
    var script=document.createElement('script');
    script.async=true;
    script.src=paths;
    document.head.appendChild(script)
};
(function(){
    var filePath = filePaths(configStaticFile);
    for(var key in filePath ){
       switch (key){
           case 'js':
               var scriptArr =filePath['js'];
               for(var i=0;i<scriptArr.length;i++){
                   addScript(scriptArr[i]);
               }
             break;
           case 'css':
               var cssArr =filePath['css'];
               for(var i=0;i<cssArr.length;i++){
                   addLink(cssArr[i]);
               }
               break;
           default:break;
       }
    }
}());
