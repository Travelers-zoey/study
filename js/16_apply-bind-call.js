/**
 * 实现call，改变this指向，call传多个参数
 * @param {Object} obj
 * @returns
 */
Function.prototype.myCall = function (obj) {
  //我们要让传入的obj成为, 函数调用时的this值
  if (obj === null || obj === undefined) obj = window;
  else obj = Object(obj);

  let args = [];
  let result;
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  obj.fn = this; //在obj上添加 fn 属性，值是this(要调用此方法的那个函数对象)
  result = eval("obj.fn(" + args + ")"); //在obj上调用函数,那函数的this值就是obj
  delete obj.fn; // 再删除obj的_fn_属性,去除影响
  return result;
};

/**
 * 手写apply，参数通过传进去的arr获取，
 * @param {Object} obj
 * @param {Array} arr
 * @returns
 */
Function.prototype.myApply = function (obj, arr) {
  if (obj === null || obj === undefined) obj = window;
  else obj = Object(obj);

  let args = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    args.push("arr[" + i + "]");
  }

  obj.fn = this;
  // result = eval('obj.fn(' + args + ')');
  result = obj.fn(arr);
  delete obj.fn;
  return result;
};

/**
 * es6实现bind,直接返回一个函数
 * @param {Object} obj 
 * @param  {...any} arg1 
 * @returns 
 */
Function.prototype.myBind = function (obj, ...arg1) {
  return (...arg2) => {
    let args = arg1.concat(arg2);
    let result;
    obj.fn = this;
    result = obj.fn(...args);
    delete obj.fn;
    return result;
  }
}

//测试
let test = {
  name: "test",
};
let o = {
  name: "o",
  fn: function () {
    console.log(this.name, ...arguments); //这里把参数显示一下
  },
};
o.fn(1, ["a", "b"], 3); // "o" 1 ["a","b"] 3
o.fn.call(test, 1, ["a", "b"], 3); // "test" 1 ["a","b"] 3
o.fn.myCall(test, 1, ["a", "b"], 3); // "test" 1 ["a","b"] 3
o.fn.myApply(test, ["a", "b"]); // "test" 1 ["a","b"] 3
o.fn.myBind(test, ["a", "b"], 1)(); // "test" 1 ["a","b"] 3
