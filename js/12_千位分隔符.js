/**
 * 千位分隔符：10,000,000
 * @param {Number} num 
 * @returns 
 */
function format(num) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g;
  return (num + "").replace(reg, "$&,");
}

console.log(format(1000000000));
console.log(format(10));