require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/es6/object');
import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';
import {Head,Footer} from 'gfs-head'

import Calendar from './modules/calendar.js';
import Button from './modules/button';
import Crumb from './modules/crumb';
import Layout from './modules/layout';
import Demo2 from './modules/demo2';
import Detail from './modules/detail.js';//增加商户详情页面demo
import Dialog from './modules/dialog';
import Input from './modules/input';
import Label from './modules/label';
import Paging from './modules/paging';
import Panel from './modules/panel';
import Select from './modules/select';
import Tab from './modules/tab';
import Table from './modules/table';
import Toast from './modules/toast';
import ToolTip from './modules/tooltip';
import Validate from './modules/validate';
import StarDemo from './modules/star.js';
import SliderDemo from './modules/imgSlider.js';
import Suggestion from './modules/suggestion.js';
import Icon from './modules/icons.js';
import TreeMenu from './modules/treeMenu.js';
import DropTree from './modules/dropTree.js';
import Theme from './modules/theme';
import Slider from './modules/slider';
import Datetimepicker from './modules/datetimepicker.js';
import Timepicker from './modules/timepicker.js';
import Iconfont from './modules/iconfont';
import Index from './modules/index';
// import '../../src/less/eagle-ui.less';
// import '../../src/less/skin.less'



let AppRouter = class AppRouter extends Component {
    constructor(props,context) {
        super(props,context);
        // Opt-out of persistent state, not recommended.
        this.history = new History({
            queryKey: false
        });

    }

    static defaultProps={

    };

    render() {
        return (
            <Router history={this.history}>
                <Route path="/index" name="index" component={Index} />
                <Route path="/Calendar" name="Calendar" component={Calendar} />
                <Route path="/Button" name="Button" component={Button} />
                <Route path="/Crumb" name="Crumb" component={Crumb} />
                <Route path="/Layout" name="Layout" component={Layout} />
                <Route path="/imgslider" name="ImgSlider" component={SliderDemo} />
                <Route path="/Dialog" name="Dialog" component={Dialog} />
                <Route path="/Input" name="Input" component={Input} />
                <Route path="/Label" name="Label" component={Label} />
                <Route path="/Paging" name="Paging" component={Paging} />
                <Route path="/Panel" name="Panel" component={Panel} />
                <Route path="/Select" name="Select" component={Select} />
                <Route path="/Tab" name="Tab" component={Tab} />
                <Route path="/Table" name="Table" component={Table} />
                <Route path="/Toast" name="Toast" component={Toast} />
                <Route path="/ToolTip" name="ToolTip" component={ToolTip} />
                <Route path="/Validate" name="Validate" component={Validate} />
                <Route path="/Star" name="Star" component={StarDemo} />
                <Route path="/Suggestion" name="Suggestion" component={Suggestion} />
                <Route path="/icon" name="Icon" component={Icon} />
                <Route path="/TreeMenu" name="TreeMenu" component={TreeMenu} />
                <Route path="/DropTree" name="DropTree" component={DropTree} />
                <Route path="/Theme" name="Theme" component={Theme} />
                <Route path="/Slider" name="Slider" component={Slider} />
                <Route path="/iconfont" name="Slider" component={Iconfont} />
                <Route path="/datetimepicker" name="datetimepicker" component={Datetimepicker} />
                <Route path="/timepicker" name="timepicker" component={Timepicker} />
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
}

ReactDom.render(
    <AppRouter />,
    document.getElementById('root')
);
ReactDom.render(
    <Head
          titles={[{title: '文档', href: 'http://future-team.github.io/eagle-ui/doc/index.html'},
            {title: '博客', href: 'http://uedfamily.com/'},
            {title: '关于我们', href: 'http://uedfamily.com/about/'},
            {title: '更多组件', href: 'http://uedfamily.com/framework/'}]}
        >
    </Head>,
    document.getElementById('head')
);
ReactDom.render(
    <Footer >
    </Footer>,
    document.getElementById('footer')
);