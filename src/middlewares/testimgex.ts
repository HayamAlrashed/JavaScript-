function imgex(name: string): boolean {
  const data = require('../../img/img.json');
  const arr = data.img[0];
  let x = false;
  for (let i in arr) {
    if (i == name) {
      x = true;
      return x;
    }
  }
  return x;
}
export default imgex;
// module.exports = {imgex};
