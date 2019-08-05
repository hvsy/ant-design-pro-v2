"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
var styles = require('./ChartCard.less');
var renderTotal = function (total) {
    var totalDom;
    switch (typeof total) {
        case 'undefined':
            totalDom = null;
            break;
        case 'function':
            totalDom = React.createElement("div", { className: styles.total }, total());
            break;
        default:
            totalDom = React.createElement("div", { className: styles.total }, total);
    }
    return totalDom;
};
exports.ChartCardContent = function (props) {
    var _a, _b;
    var contentHeight = props.contentHeight, title = props.title, avatar = props.avatar, action = props.action, total = props.total, footer = props.footer, children = props.children, loading = props.loading;
    if (loading) {
        return null;
    }
    return (React.createElement("div", { className: styles.chartCard },
        React.createElement("div", { className: classnames_1.default(styles.chartTop, (_a = {},
                _a[styles.chartTopMargin] = !children && !footer,
                _a)) },
            React.createElement("div", { className: styles.avatar }, avatar),
            React.createElement("div", { className: styles.metaWrap },
                React.createElement("div", { className: styles.meta },
                    React.createElement("span", { className: styles.title }, title),
                    React.createElement("span", { className: styles.action }, action)),
                renderTotal(total))),
        children && (React.createElement("div", { className: styles.content, style: { height: contentHeight || 'auto' } },
            React.createElement("div", { className: contentHeight && styles.contentFixed }, children))),
        footer && (React.createElement("div", { className: classnames_1.default(styles.footer, (_b = {},
                _b[styles.footerMargin] = !children,
                _b)) }, footer))));
};
exports.ChartCard = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, contentHeight = props.contentHeight, title = props.title, avatar = props.avatar, action = props.action, total = props.total, footer = props.footer, children = props.children, rest = __rest(props, ["loading", "contentHeight", "title", "avatar", "action", "total", "footer", "children"]);
    return (React.createElement(antd_1.Card, __assign({ loading: loading, bodyStyle: { padding: '20px 24px 8px 24px' } }, rest),
        React.createElement(exports.ChartCardContent, __assign({}, props))));
};
