import supertest from 'supertest';
import app from '../index';
import * as fs from 'fs';
import imgex from '../middlewares/testimgex';

const request = supertest(app.app);
const imgsharp = require('../routes/imgsharp');

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
describe('Test if image existe', () => {
  it('cheak cat image existe', async () => {
    // const response = await request.get('?img=cat');
    expect(imgex('cat')).toBeTrue();
  });

  it('cheak horse image existe', async () => {
    expect(imgex('horse')).toBeFalsy();
  });
});

describe('Test Functions', () => {
  it('cheak function imgsharp to resized  existe cat image', async () => {
    await imgsharp.imgSharp('../image/img/pic/cat.jpg', 'cat', 300, 500); // function take (path,img name , width , height)
    const imgfile = `cat-width300-height500`;
    const imgpath = `img/edited/${imgfile}.jpeg`;
    var x = fs.existsSync(imgpath);
    expect(x).toBe(true);
  });

  it('cheak function imgsharp to resized new cat image', async () => {
    await imgsharp.imgSharp('../image/img/pic/cat.jpg', 'cat', 990, 450); // function take (path,img name , width , height)
    const imgfile = `cat-width990-height450`;
    const imgpath = `img/edited/${imgfile}.jpeg`;
    var x = false;
    x = fs.existsSync(imgpath);
    expect(x).toBe(true);
  });
});
