/**
 * n以内的素数，判断n，所以条件需要小于等于
 * @param {Number} n 数字n
 * @returns 
 */
function primeNumber(n) {
  let arr = [];
  for(let i = 2; i <= n; i++) {
    let flag = true;
    for(let j = 2; j <= Math.sqrt(i); j++) {
      if(i % j === 0) {
        flag = false;
        break;
      }      
    }
    if(flag) arr.push(i);
  }

  return arr;
}

console.log(primeNumber(11));