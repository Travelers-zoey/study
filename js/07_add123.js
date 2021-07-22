/**
 * 函数柯里化：add相加
 * @returns 
 */
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  let args = [].slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  let adder = function () {  
    args.push(...arguments);
    return adder;
  }

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  adder.toString = function() {
    return args.reduce((a, b) => {
      return a + b;
    })
  }

  return adder;
}

console.log(add(1)(2)(3));
console.log(add(1, 2)(3).toString());
console.log(add(1, 2, 3).toString());
