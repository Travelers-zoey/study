let add = function (a, b, c) {
	return a + b +c
}
/**
 * 函数柯里化
 * @param {Function} fn 函数
 * @returns 
 */
function curry(fn) {
  let args = [].slice.call(arguments, 1); //第一个参数是函数add
  // let args = Array.prototype.slice.call(arguments, 1);
  // console.log(...arguments);

  return function () {
    let newArgs = args.concat(Array.from(arguments))
    if(newArgs.length < fn.length) {
      return curry.call(this, fn, ...newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

let f = curry(add);
console.log('柯里化',f(1)(2)(3))
console.log('柯里化',f(1, 2)(3))
console.log('柯里化',f(1, 2, 3))