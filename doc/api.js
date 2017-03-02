YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Button",
        "ButtonGroup",
        "Calendar",
        "CalendarPanel",
        "CheckboxGroup",
        "Col",
        "Column",
        "Crumb",
        "Dialog",
        "Grid",
        "Input",
        "Label",
        "LabelGroup",
        "Paging",
        "Panel",
        "PanelContent",
        "PanelFooter",
        "PanelHeader",
        "RadioGroup",
        "Row",
        "Select",
        "Slider",
        "Star",
        "Suggestion",
        "Tab",
        "Table",
        "Tabset",
        "Td",
        "Th",
        "Toast",
        "Tooltip",
        "TooltipPanel",
        "Tr",
        "ValidatorPanel"
    ],
    "modules": [
        "form(表单)",
        "grid(布局)",
        "panel(面板)",
        "table(表格)",
        "ui"
    ],
    "allModules": [
        {
            "displayName": "form(表单)",
            "name": "form(表单)",
            "description": "<h5>form表单模块集成了常见的表单元素形式:</h5>\n<strong><a href='../classes/CheckboxGroup.html'>checkbox多选框</a></strong><br>\n<strong><a href='../classes/RadioGroup.html'>radio单选框</a></strong><br>\n<strong><a href='../classes/Input.html'>input输入框</a></strong><br>\n<strong><a href='../classes/Select.html'>select下拉框</a></strong><br>\n<strong><a href='../classes/ButtonGroup.html'>button按钮组</a></strong>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "CheckboxGroup"
                },
                {
                    "name": "RadioGroup"
                },
                {
                    "name": "Select"
                },
                {
                    "name": "ValidatorPanel"
                },
                {
                    "name": "Button"
                },
                {
                    "name": "ButtonGroup"
                },
                {
                    "name": "Input"
                }
            ]
        },
        {
            "displayName": "grid(布局)",
            "name": "grid(布局)",
            "description": "<h5>eagle-ui主要栅格化布局组件</h5>\n<pre><code>\n    &#60;Grid&#62;//定义栅格\n        &#60;Row&#62;//定义一行\n             &#60;Col sm={6}&#62;//定义一列，总长度为12份\n             &#60;/Col&#62;\n        &#60;/Row&#62;\n    &#60;/Grid&#62;\n</code></pre>\n\n<strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>\n<strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>\n<strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>\n<h6>点击以上链接进行相关查看</h6>",
            "classes": [
                {
                    "name": "Row"
                },
                {
                    "name": "Col"
                },
                {
                    "name": "Grid"
                }
            ]
        },
        {
            "displayName": "panel(面板)",
            "name": "panel(面板)",
            "description": "<h5>eagle-ui主要面板布局组件</h5>\n<strong><a href='../classes/Panel.html'>Panel定义整个容器</a></strong><br>\n<strong><a href='../classes/PanelContent.html'>PanelContent定义内容区域</a></strong><br>\n<strong><a href='../classes/PanelFooter.html'>PanelFooter定义底部区域</a></strong><br>\n<strong><a href='../classes/PanelHeader.html'>PanelHeader定义头部区域</a></strong><br>",
            "classes": [
                {
                    "name": "Panel"
                },
                {
                    "name": "PanelContent"
                },
                {
                    "name": "PanelFooter"
                },
                {
                    "name": "PanelHeader"
                }
            ]
        },
        {
            "displayName": "table(表格)",
            "name": "table(表格)",
            "description": "表格组件",
            "classes": [
                {
                    "name": "Column"
                },
                {
                    "name": "Table"
                },
                {
                    "name": "Td"
                },
                {
                    "name": "Th"
                },
                {
                    "name": "Tr"
                }
            ]
        },
        {
            "displayName": "ui",
            "name": "ui",
            "description": "<h5>eagle-ui部分UI组件</h5>\n<strong><a href='../classes/Crumb.html'>Crumb封装层级链接(面包屑)</a></strong><br>\n<strong><a href='../classes/Slider.html'>Slider组件展示幻灯片形式的照片展示</a></strong><br>\n<strong><a href='../classes/Label.html'>Label定义标签展示的形式</a></strong><br>\n<strong><a href='../classes/Search.html'>Search定义不同的搜索框</a></strong><br>\n<strong><a href='../classes/Star.html'>Star以星星的形式定义不同的星级展示</a></strong><br>\n<strong><a href='../classes/Calendar.html'>Calendar为日期选择组件</a></strong><br>\n<strong><a href='../classes/Dialog.html'>Dialog模拟了浏览器弹出的alert、confirm等交互形式</a></strong><br>\n<strong><a href='../classes/Paging.html'>Paging展示了常见的分页形式标签，封装了点击功能</a></strong><br>\n<strong><a href='../classes/Suggestion.html'>Suggestion在Search的基础上，动态联想匹配项</a></strong><br>\n<strong><a href='../classes/Tab.html'>Tab模拟了常见的导航条样式</a></strong><br>\n<strong><a href='../classes/Toast.html'>Toast可以模拟Ajax请求成功或者失败后，通知用户的UI界面展示</a></strong><br>\n<strong><a href='../classes/Tooltip.html'>Tooltip在Label的基础上，增加了鼠标hover或者点击的提示功能</a></strong>",
            "classes": [
                {
                    "name": "Slider"
                },
                {
                    "name": "Label"
                },
                {
                    "name": "Star"
                },
                {
                    "name": "Calendar"
                },
                {
                    "name": "CalendarPanel"
                },
                {
                    "name": "Crumb"
                },
                {
                    "name": "Dialog"
                },
                {
                    "name": "LabelGroup"
                },
                {
                    "name": "Paging"
                },
                {
                    "name": "Suggestion"
                },
                {
                    "name": "Tab"
                },
                {
                    "name": "Tabset"
                },
                {
                    "name": "Toast"
                },
                {
                    "name": "Tooltip"
                },
                {
                    "name": "TooltipPanel"
                }
            ]
        }
    ]
} };
});