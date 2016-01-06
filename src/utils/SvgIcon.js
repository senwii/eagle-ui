var React = require('react'),
    extend = require('extend'),
    Icon = require('./icons');

var SvgIcon = React.createClass({

    getDefaultStyle: function(fill) {
        return {
            display: 'inline-block',
            height: '16px',
            width: '16px',
            fill: (undefined == fill) ? 'initial' : fill
        };
    },

    render: function() {
        var {name, fill, style, ...other} = this.props;
        var icon = Icon[name];
        var svgStyle;

        if (undefined == icon)
        {
            throw new Error(name + ' does not exists !');
        }

        svgStyle = extend({}, this.getDefaultStyle(fill), style);

        var key = 0;
        var pathList = icon.map(function(item){
            item['key'] = ++key;
            return React.createElement('path', item, null);
        });

        return (
            <svg width="16" height="16" viewBox="0 0 16 16" style={svgStyle} {...other}>
                {pathList}
            </svg>
        );
    }
});

module.exports = SvgIcon;