'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dom = function () {
    function Dom(obj) {
        _classCallCheck(this, Dom);

        this.obj = obj;
    }

    _createClass(Dom, [{
        key: 'offset',
        value: function offset() {

            var element = this.obj;
            var w = element.offsetLeft;
            var t = element.offsetTop;
            var node = element.offsetParent;

            while (node && node.nodeName.toLowerCase() != document.body) {
                t += node.offsetTop;
                w += node.offsetLeft;
                node = node.offsetParent;
            }

            return {
                top: t,
                left: w,
                width: element.offsetWidth,
                height: element.offsetHeight
            };
        }
    }, {
        key: 'parents',
        value: function parents(str) {
            try {
                var tempNode = this.obj.parentNode;
                while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
                    tempNode = tempNode.parentNode;
                }
                return [tempNode];
            } catch (err) {
                return [];
            }
        }
    }, {
        key: 'matchNode',
        value: function matchNode(element, direction, start) {
            for (var node = element[start]; node; node = node[direction]) {
                if (node.nodeType == 1) return node;
            }
            return null;
        }
    }, {
        key: 'next',
        value: function next() {
            return this.matchNode(this.obj, 'nextSibling', 'nextSibling');
        }
    }, {
        key: 'prev',
        value: function prev() {
            return this.matchNode(this.obj, 'previousSibling', 'previousSibling');
        }
    }, {
        key: 'first',
        value: function first() {
            return this.matchNode(this.obj, 'nextSibling', 'firstChild');
        }
    }, {
        key: 'last',
        value: function last() {
            return this.matchNode(this.obj, 'previousSibling', 'lastChild');
        }
    }, {
        key: 'parent',
        value: function parent() {
            return this.matchNode(this.obj, 'parentNode', 'parentNode');
        }
    }, {
        key: 'children',
        value: function children() {
            var element = this.obj;
            for (var children = [], tmpEl = element.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
                if (tmpEl.nodeType == 1) children.push(tmpEl);
            }
            return children;
        }
    }]);

    return Dom;
}();

module.exports = function (obj) {
    return new Dom(obj);
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Dom, 'Dom', '/Users/panqianjin/work/eagle-ui/src/utils/Dom.js');
}();

;