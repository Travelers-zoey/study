// function runAsync (x) {
//     const p = new Promise(
//       r => setTimeout(
//         () => r(x, console.log(x))
//       , 1000)
//     )
//     return p
// }
// Promise.all([runAsync(1), runAsync(2), runAsync(3)])
//   .then(res => console.log(res))


// function runAsync(x) {
//   const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//   return p;
// }
// Promise.race([runAsync(1), runAsync(2), runAsync(3)])
//   .then((res) => console.log("result: ", res))
//   .catch((err) => console.log(err));

// async function fn() {
//   // return await 1234
//   // 等同于
//   return 123;
// }
// fn().then((res) => console.log(res));


// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// console.log("script start");

// setTimeout(function() {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function(resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function() {
//   console.log("promise2");
// });
// console.log('script end')



// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('resolve3');
//     console.log('timer1')
//   }, 0)
//   resolve('resovle1');
//   resolve('resolve2');
// }).then(res => {
//   console.log(res)
//   setTimeout(() => {
//     console.log(p1)
//   }, 1000)
//   return 1;
// }).finally(res => {
//   console.log('finally', res)
// })



// const arr = [1, 2, 3]
// arr.reduce((p, x) => p.then(
//     () => new Promise(
//       // r => setTimeout(() => r(console.log(x)), 1000)
//       r => setTimeout(() => console.log(r), 1000)
//     )
//   ), Promise.resolve()
// )

// const arr = [1, 2, 3]
// arr.reduce((p, x) => p.then(() => 
//   new Promise(
//     q => setTimeout(() =>q(console.log(x)), 1000)
//   )
// ), Promise.resolve())

// const arr = [1, 2, 3]
// arr.reduce((p, x) => p.then(
//     () => new Promise(
//       r => console.log(r)
//     )
//   ), Promise.resolve()
// )