let parallel = function(arr, finnaly) {
  let fn,
      index = 0;
  // statusArr——建立一个数组，数组元素均是{ isActive: false, data: null }
  let statusArr = Array(arr.length)
    .fill()
    .map(() => ({
      isActive: false,
      data: null
    }));
    
  let isFinished = () => {
    return statusArr.every(item => {
      return item.isActive === true;
    });
  };
  let resolve = (index) => {
    console.log(333);
    return (data) => {
      console.log(555);
      console.log(data, 'data');
      statusArr[index].data = data;
      statusArr[index].isActive = true;
      let isFinish = isFinished();
      if (isFinish) {
        let datas = statusArr.map(item => {
          return item.data;
        });
        finnaly(datas);
      }
    };
  };
  while ((fn = arr.shift())) {
    console.log(222);
    // 给resolve函数追加参数,可以使用bind函数实现,这里使用了柯里化
    fn(resolve(index));
    index++;
  }
};
 
// 使用方法
let str = "";
console.log(111);
parallel(
  [
    (resolve) => {
      console.log(444);
      setTimeout(() => {
        console.log(777);
        str = "Hello";
        resolve("Hello");
      }, 1000);
    },
    (resolve) => {
      setTimeout(() => {
        str += "World";
        resolve("World");
      }, 20);
    }
  ],
  (datas) => {
    console.log("finily", datas);
  }
);