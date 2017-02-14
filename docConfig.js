fs=require("fs");
var description=fs.readFileSync("docIndex.html","utf8");


module.exports = {
    //扫描的文件路径
    paths: ['lib/'],
    demoDir: "examples/src/modules/",
    demoUrl: "http://future-team.github.io/eagle-ui/examples/index.html",
    //文档页面输出路径
    outdir: 'doc/',
    //内置主题
    // theme:'ui',
    //自定义主题目录
    //themedir: 'theme-smart-ui/',
    //项目信息配置
    project: {

        //项目名称
        name: 'eagle-ui',

        //项目描述，可以配置html，会生成到document主页
        description:description,

        //版本信息
        version: '0.1.0',

        //地址信息
        url: '',
        //logo:'dp-logo.png',

        //导航信息
        navs: [{
                name: "主页",
                url: ""
            },
            {
                name: "示例",
                url: "http://future-team.github.io/eagle-ui/examples/index.html"
            }
        ]
    },
    //demo页面需要加载的js库
    demo: {

        ////外部资源链接
        link: ['http://future-team.github.io/eagle-ui/examples/js/eagle-ui.css'],

        //文件复制路径; 将目下的资源复制到doc生成目录中，并在demo页面引用
        //paths : ['doc/modules/'],

        //是否开启在code编辑器中的自动完成功能(会将link和paths的引入加入)；默认开启；
        autoComplete: true
    },
    ////自定义主题路径
    //themedir: 'docTheme/',
    //////自定义helpers
    //helpers: ["docTheme/dianping-theme.css","docTheme/dianping-theme.js"]
};