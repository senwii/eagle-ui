/**
 * Created by slashhuang on 16/2/23.
 * 在config.json中配置相关文件路径即可
 */
var fs =require('fs');
var path = require('path');
/**
 * 读取文件
 */
var readFileFunc = function(source,callback,addSource){
     fs.readFile(source, function (err, data) {
        console.log('fuck')
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
 * 复制文件至doc文件夹下的docTheme
 */
var CopyFile = function(){
    var sourceFilePath = require('./config.json');
    console.log(sourceFilePath.toString());
    var basePath=  path.join(__dirname.replace('docTheme',''));
    var destRoot = path.join(__dirname.replace('docTheme','doc'));
    var destDir = destRoot+'/docTheme/';
    fs.mkdir(destRoot+'/docTheme',function(err){
        if (err) {
            return console.error(err);
        }
        console.log("目录docTheme创建成功。");
    });
    var fileArr = sourceFilePath['filePath'];
    for(var i=0;i<fileArr.length;i++){
        (function(file){
            var readStream = fs.createReadStream(file);
            var writeStream = fs.createWriteStream(destDir+path.basename(file));
            readStream.pipe(writeStream);
            console.log("移动完成")
        })(path.join(basePath,'docTheme',fileArr[i]));
    }
};
//在doc目录下创建docTheme目录
CopyFile();
//读取doc目录的assets/js/doc.js中的内容，然后添加外部的代码在doc.js中
var filePath = './doc/assets/js/doc.js';
var addSource=fs.readFileSync('docTheme/lib/source.js').toString();
readFileFunc(filePath,writeFiles,addSource);




