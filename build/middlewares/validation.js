"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
var validation = function (req, res, next) {
    var img = String(req.query.img);
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    if (!img) {
        return res.status(404).send('You should include image name -> use \'?img=\' parameter');
    }
    else if (isNaN(height) || isNaN(width))
        return res.status(400).send('img or width or height shoud be incloud and shoud be numbers');
    next();
};
exports.validation = validation;
