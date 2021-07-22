/**
 * toString方法——Object.prototype.toString.call([]) => [object Array]
 * @param {array} arr
 * @returns
 */
function flatten(arr) {
  let newArr = arr
    .toString()
    .split(",")
    .map((val) => {
      return parseInt(val);
    });

  return newArr;
}
/**
 * recude方法，数组扁平化
 * @param {Array} arr
 * @returns
 */
function flat(arr) {
  return arr.reduce((prev, curr) => {
    return prev = prev.concat(Array.isArray(curr) ? flat(curr) : curr);
  },[]);
}

var arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];
var arr2 = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];
console.log(flatten(arr));

console.log(flat(arr2));