import { Request, Response, NextFunction } from 'express';
import imgex from '../middlewares/testimgex';


export const validation = (req: Request, res: Response, next: NextFunction) => {
    const  img  = String(req.query.img);
    const width =Number(req.query.width);
    const height =Number(req.query.height);

    if (!img ){return res.status(404).send('You should include image name -> use \'?img=\' parameter');}
    else if (isNaN(height) || isNaN(width)) return res.status(400).send('img or width or height shoud be incloud and shoud be numbers');
    
    
    next();
  };