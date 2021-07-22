/**
 * instanceof——某个构造函数是否在某个实例对象的原型链上
 * @param {Object} L 实例对象
 * @param {Fuction} R 构造函数
 * @returns 
 */
function myInstanceof(L, R) {  
  // 基础数据类型直接返回false
  if(typeof L !== 'object' || L === null) return false;

  let LProto = L.__proto__;
  let RPrototype = R.prototype;

  while(true) {
    // null 找到顶层了
    if(LProto === null) return false;

    //找到了，该构造函数出现在了实例对象的原型上
    if(LProto === RPrototype) return true;

    LProto = LProto.__proto__;
  }
}

let num = new Number(1)
console.log(myInstanceof(num, Number)); //true
console.log(myInstanceof(1, Number)); //false
console.log(typeof Number);

console.log(Object.getPrototypeOf(num), 'getPrototypeOf'); //获取某个对象实例的构造函数
console.log(Number.prototype.constructor);