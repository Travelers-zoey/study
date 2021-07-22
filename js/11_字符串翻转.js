/**
 * 字符串翻转
 * split('')——将一个字符串拆成字符并返回一个数组
 * reverse()——数组反转
 * join('')——将数组中所有元素连接成一个字符串
 * @param {String} str 翻转的字符串
 * @returns 
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("object"));

function reverse(str) {
  let strArr = str.split("");
  let newArr = [];
  while (strArr.length > 0) {
    newArr.push(strArr.pop());
  }Í

  let newStr = newArr.join("");
  return newStr;
}
console.log(reverseString("object"));
