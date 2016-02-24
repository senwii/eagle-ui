/**
 * Created by slashhuang on 16/2/23.
 * 在config.json中配置相关文件路径即可
 */
var fs =require('fs');
var path = require('path');
//里面filepath对应的数组路径名称为相应静态资源，会放入doc下的docTheme文件夹
var sourceFilePath = require('./config.json');
/**
 * 读取文件
 */
var readFileFunc = function(source,callback,addSource){
     fs.readFile(source, function (err, data) {
         console.log('读取自定义配置成功')
        if (err) {
            return console.error(err);
        }
        callback(data.toString(),addSource);
    });
};
/**
 * 写入数据
 */
var writeFiles = function (originData,addSource) {
        fs.writeFile(filePath, originData + addSource,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("外部数据写入成功！");
            console.log("----------------------------")
            console.log("在doc中增加文件"+filePath);
        });
};
/**
 * 复制js及css至doc文件夹下的docTheme
 */
var CopyFile = function(){
    var basePath=  path.join(__dirname.replace('docTheme',''));
    var destRoot = path.join(__dirname.replace('docTheme','doc'));
    var destDir = destRoot+'/docTheme/';
    fs.mkdir(destRoot+'/docTheme',function(err){
        if (err) {
            return console.error(err);
        }
        console.log("目录docTheme创建成功。");
    });
    console.log('复制外部文件css和js成功');
    var fileArr = [].concat(sourceFilePath['js'],sourceFilePath['css']);
    for(var i=0;i<fileArr.length;i++){
        (function(file){
            var readStream = fs.createReadStream(file);
            var writeStream = fs.createWriteStream(destDir+path.basename(file));
            readStream.pipe(writeStream);
        })(path.join(basePath,'docTheme',fileArr[i]));
    }
};
//复制静态资源
CopyFile();
//添加自定义代码至doc目录的assets/js/doc.js中
var filePath = './doc/assets/js/doc.js';
var addConfig='window["configStaticFile"]='+fs.readFileSync('docTheme/config.json').toString();
var addSource=fs.readFileSync('docTheme/lib/source.js').toString();
readFileFunc(filePath,writeFiles,addConfig+';\n'+addSource);




