let series = (arr) => {
  let next = (data) => {
    let fn = arr.shift();
    if (!fn) {
      return;
    }
    console.log(333);
    fn(next,data);
  };
  console.log(222);
  next();
};
 
// 使用方法
let str = "";
console.log(111);
series([
  //此处的next是参数，没有接受data参数，所以data传不过来
  (next) => {
    setTimeout(() => {
      str = "Hello";
      console.log(444);
      next(str);
    }, 100);
  },
  (next,data) => {
    setTimeout(() => {
      str += " World"
      console.log(str);
      next();
    });
  }
]);

// 串行
let data1 = await new Promise(resolve => {
  setTimeout(resolve.bind(this, 10), 1000);
})
let data2 = await new Promise(resolve => {
  setTimeout(resolve.bind(this, 12), 1000);
