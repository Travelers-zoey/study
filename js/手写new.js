/**
 * 手写new
 */
function _new() {
  // 获取构造函数，并删除arguments中的第一项
  console.log(arguments.length, 'length');
  console.log(arguments, 'arguments1111');
  let constructor = [].shift.call(arguments)
  console.log(arguments, 'arguments2222');
  // 创建一个空对象并链接到构造函数的原型，使他能够访问原型中的属性
  // let newObj = Object.create(constructor.prototype)
  let newObj = {};
  newObj.__proto__ = constructor.prototype;
  // 使用apply改变构造函数中this的指向实现继承，使obj能够访问构造函数中的属性
  let result = constructor.apply(newObj, arguments)
  constructor.apply(newObj, arguments);
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