import * as fs from 'fs';
const sharp = require('sharp');

async function imgSharp(path:String,name:String,width:Number,height:Number) {
    const dir = "img/edited";
    try{

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            const info = await sharp(path).resize(width,height).jpeg().toFile("img/edited/"+name+"-width"+width+"-height"+height+".jpeg");
            setTimeout(() => {
                console.log('resize img is done');
              }, 3000);
        }else
        {
            const info =await sharp(path).resize(width,height).jpeg().toFile("img/edited/"+name+"-width"+width+"-height"+height+".jpeg");
            setTimeout(() => {
                console.log('resize img is done');
              }, 3000);
            
        }
    }catch(error)
    {
        console.log(error);
    }
        
    


};

module.exports = {imgSharp};

