/**
 * 手写实现new
 * 1.创建一个新对象,新对象的__proto__指向构造函数的prototype
 * 2.改变构造函数中this的指向，使obj能够访问构造函数中的属性
 * 3.返回实例
 * @returns 返回一个实例
 */
function _new() {  
  // 创建一个空对象，这个对象的__proto__要指向构造函数的原型对象
  let newObj = {};

  // 获取构造函数，并删除arguments中的第一项
  let [constructor, ...args] = [...arguments];
  // let constructor = [].shift.call(arguments)
  newObj.__proto__ = constructor.prototype;
  
  // 使用apply改变构造函数中this的指向实现继承，使obj能够访问构造函数中的属性
  let result = constructor.apply(newObj, args)
  return result instanceof Object ? result : newObj;
}

function Person(name) {
  this.name = name;
}
Person.prototype.eat = function () { 
  console.log('我吃一个');
 }
let actor = _new(Person, '张月珂');
console.log(actor);
actor.eat();

console.log(Array.prototype,123);

console.log(0.1 + 0.3);

console.log(typeof Fhj);

console.log(1 instanceof Number);
// let a = new Number(1)
let a = Number(1)
console.log(a instanceof Number);