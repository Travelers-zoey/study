// let obj = {
//   a: 111,
//   b: 'aaa',
// }

// Object.defineProperty(obj, 'a', {
//   get() {
//     console.log('获取a');
//     return obj.a;
//   },
//   set(value) {
//     console.log('改变a');
//     _a = value;
//   },
// })

// console.log(obj.a);

// obj.a = 1;

// var obj = {};
//   //defineProperty有三个参数,不写全会报错
//   Object.defineProperty(obj, 'name', {
//     get() {
//       console.log('取值了')
//       // 必须返回 _属性名
//       return _name;
//     },

//     set(value) {
//       // 必须写 _属性名=value
//       _name=value;
//      console.log('赋值了:' + value)
//     }
//   })

//   obj.name = '徐珂'
//   console.log(obj.name);

let obj = {
  name: 'Eason',
  age: 30
}
let handler = {
  get (target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
}
let proxy = new Proxy(obj, handler)
proxy.name = 'Zoe' // set name Zoe
proxy.age = 18 // set age 18
