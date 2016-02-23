/**
 * Created by slashhuang on 16/2/23.
 * 相关配置文件请写在configStaticFile变量
 */
var configStaticFile= {
    "css":["../docTheme/dianping-theme.css"],
    "js":["http://uedfamily.com/documents/eagle-ui/examples/js/examples.js","../docTheme/dianping-theme.js"]
};

var addLink = function(paths){
    var link=document.createElement('link');
    setTimeout(function(){
        for(var i =0;i<paths.length;i++){
            link.href=paths[i];
            document.head.appendChild(link);
        }
    },0);
};
var addScript = function(paths){
    var script=document.createElement('script');
    script.async=true;
    setTimeout(function(){
        for(var i =0;i<paths.length;i++){
            script.src=paths[i];
            document.head.appendChild(script)
        }
    },0);
};
if(configStaticFile&&configStaticFile['js']){
    addScript(configStaticFile['js'])
}
if(configStaticFile&&configStaticFile['css']){
    addLink(configStaticFile['css'])
}