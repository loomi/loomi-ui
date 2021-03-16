Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button$1 = styled__default['default'].button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var primary = _a.primary;
    return primary && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: white;\n    background-color: #1ea7fd;\n  "], ["\n    color: white;\n    background-color: #1ea7fd;\n  "])));
}, function (_a) {
    var secondary = _a.secondary;
    return secondary && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  "], ["\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  "])));
}, function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b;
    var sizeMap = {
        small: { fontSize: '12px', padding: '10px 16px' },
        medium: { fontSize: '14px', padding: '11px 20px' },
        large: { fontSize: '16px', padding: '12px 24px' },
    };
    return styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      font-size: ", ";\n      padding: ", ";\n    "], ["\n      font-size: ", ";\n      padding: ", ";\n    "])), sizeMap[size].fontSize, sizeMap[size].padding);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.secondary, secondary = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "secondary", "size", "backgroundColor", "label"]);
    return (jsxRuntime.jsx(Button$1, __assign({ type: "button", size: size, primary: primary, secondary: secondary, style: { backgroundColor: backgroundColor } }, props, { children: label }), void 0));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
