"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imgex(name) {
    var data = require('../../img/img.json');
    var arr = data.img[0];
    var x = false;
    for (var i in arr) {
        if (i == name) {
            x = true;
            return x;
        }
    }
    return x;
}
exports.default = imgex;
// module.exports = {imgex};
