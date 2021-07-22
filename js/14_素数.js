/**
 * sqrt，因为2*4 = 8;
 * @param {Number} num 素数判断
 * @returns 
 */
function isPrime(num) {
  if(num === 0 || num === 1) return false;
  if(num === 2) return true;

  for(let i = 2; i < Math.sqrt(num); i++) {
    if(num % i ===0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(20));