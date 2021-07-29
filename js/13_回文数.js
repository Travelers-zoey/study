/**
 * 回文数判断
 * @param {Nmber} x 回文数
 * @returns 
 */
function isPalindrome(x) {
  if(x < 0) return false;
  let str = x + '';
  return str.split('').reverse().join('') === str;
  // return Array.from(str).reverse().join('') === str;
}

console.log(isPalindrome(031));