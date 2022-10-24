

function imgex(name:string) {
var data = require('../../img/img.json');
const arr = data.img[0];
var x = false;
for (var i in arr){
    if(i == name)
        {
            x = true;
            return x;
        }
    }
    return x;

}
export default imgex;
// module.exports = {imgex};
