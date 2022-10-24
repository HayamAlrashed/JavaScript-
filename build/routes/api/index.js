"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../log/logger"));
var validation_1 = require("../../middlewares/validation");
var express_1 = require("express");
var testimgex_1 = __importDefault(require("../../middlewares/testimgex"));
var routes = (0, express_1.Router)();
var imgSharp = require("../imgsharp");
var fs = require('fs');
try {
    routes.get('/', logger_1.default, validation_1.validation, function (req, res) {
        var name = String(req.query.img);
        var width = Number(req.query.width);
        var height = Number(req.query.height);
        var data = require('../../../img/img.json');
        var arr = data.img[0];
        var imgfile = "".concat(name, "-width").concat(width, "-height").concat(height);
        var imgpath = "img/edited/".concat(imgfile, ".jpeg");
        if ((0, testimgex_1.default)(name)) {
            if (fs.existsSync(imgpath)) {
                res.sendFile(imgpath, { root: '.' });
            }
            else {
                for (var i in arr) {
                    if (i == name) {
                        imgSharp.imgSharp(arr[name], name, Number(width), Number(height));
                        setTimeout(function () {
                            res.sendFile(imgpath, { root: '.' });
                        }, 2000);
                        console.log('check');
                    }
                }
            }
        }
        else {
            res.send("Image ".concat(name, " not exist"));
        }
    });
}
catch (error) {
    console.log(error);
}
exports.default = routes;
