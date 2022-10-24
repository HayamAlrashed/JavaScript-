"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/api/index"));
var logger_1 = __importDefault(require("./routes/log/logger"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', logger_1.default, function (req, res) {
    res.send('Hello User.. You hava 2 imgs => cat dog ');
});
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = { app: app };
