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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
var styles = require('./Trend.less');
exports.Trend = function (_a) {
    var _b;
    var _c = _a.colorful, colorful = _c === void 0 ? true : _c, _d = _a.reverseColor, reverseColor = _d === void 0 ? false : _d, flag = _a.flag, children = _a.children, className = _a.className, rest = __rest(_a, ["colorful", "reverseColor", "flag", "children", "className"]);
    var classString = classnames_1.default(styles.trendItem, (_b = {},
        _b[styles.trendItemGrey] = !colorful,
        _b[styles.reverseColor] = reverseColor && colorful,
        _b), className);
    return (react_1.default.createElement("div", __assign({}, rest, { className: classString, title: typeof children === 'string' ? children : '' }),
        react_1.default.createElement("span", null, children),
        flag && (react_1.default.createElement("span", { className: styles[flag] },
            react_1.default.createElement(antd_1.Icon, { type: "caret-" + flag })))));
};
