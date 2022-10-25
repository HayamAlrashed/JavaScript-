import logger from '../log/logger';
import path from 'path';
import { validation } from '../../middlewares/validation';
import { Router, Request, Response } from 'express';
import imgex from '../../middlewares/testimgex';

const routes = Router();
const imgSharp = require('../imgsharp');
const fs = require('fs');

try {
  routes.get(
    '/',
    logger,
    validation,
    async (req: Request, res: Response): Promise<void> => {
      const name = String(req.query.img);
      const width = Number(req.query.width);
      const height = Number(req.query.height);

      var data = require('../../../img/img.json');
      const arr = data.img[0];
      const imgfile = `${name}-width${width}-height${height}`;
      const imgpath = `img/edited/${imgfile}.jpeg`;

      if (imgex(name)) {
        if (fs.existsSync(imgpath)) {
          res.sendFile(imgpath, { root: '.' });
        } else {
          for (var i in arr) {
            if (i == name) {
              await imgSharp.imgSharp(
                arr[name],
                name,
                Number(width),
                Number(height)
              );
              res.sendFile(imgpath, { root: '.' });
              console.log('check');
            }
          }
        }
      } else {
        res.send(`Image ${name} not exist`);
      }
    }
  );
} catch (error) {
  console.log(error);
}

export default routes;
