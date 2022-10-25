"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../log/logger"));
var validation_1 = require("../../middlewares/validation");
var express_1 = require("express");
var testimgex_1 = __importDefault(require("../../middlewares/testimgex"));
var routes = (0, express_1.Router)();
var imgSharp = require('../imgsharp');
var fs = require('fs');
try {
    routes.get('/', logger_1.default, validation_1.validation, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var name, width, height, data, arr, imgfile, imgpath, _a, _b, _i, i;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    name = String(req.query.img);
                    width = Number(req.query.width);
                    height = Number(req.query.height);
                    data = require('../../../img/img.json');
                    arr = data.img[0];
                    imgfile = "".concat(name, "-width").concat(width, "-height").concat(height);
                    imgpath = "img/edited/".concat(imgfile, ".jpeg");
                    if (!(0, testimgex_1.default)(name)) return [3 /*break*/, 6];
                    if (!fs.existsSync(imgpath)) return [3 /*break*/, 1];
                    res.sendFile(imgpath, { root: '.' });
                    return [3 /*break*/, 5];
                case 1:
                    _a = [];
                    for (_b in arr)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    i = _a[_i];
                    if (!(i == name)) return [3 /*break*/, 4];
                    return [4 /*yield*/, imgSharp.imgSharp(arr[name], name, Number(width), Number(height))];
                case 3:
                    _c.sent();
                    res.sendFile(imgpath, { root: '.' });
                    console.log('check');
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    res.send("Image ".concat(name, " not exist"));
                    _c.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); });
}
catch (error) {
    console.log(error);
}
exports.default = routes;
