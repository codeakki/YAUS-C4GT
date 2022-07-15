"use strict";
exports.__esModule = true;
function cloneObject(obj) {
    if (typeof obj === 'undefined') {
        return undefined;
    }
    return JSON.parse(JSON.stringify(obj));
}
exports["default"] = cloneObject;
