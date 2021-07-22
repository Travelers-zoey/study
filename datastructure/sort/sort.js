/**
 * 冒泡排序
 * @param arr 需要排序的数组 
 * 思路：排序n次，每遍俩俩比较n-i次，设置flag（如果某次没有交换过元素，就跳出循环）
 * 冒泡排序总会执行(N-1)+(N-2)+(N-3)+..+2+1趟，但如果运行到当中某一趟时排序已经
 * 完成，或者输入的是一个有序数组，那么后边的比较就都是多余的，为了避免这种情况，我们
 * 增加一个flag，判断排序是否在中途就已经完成（也就是判断有无发生元素交换）
 */
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let flag = true;
    // 这里减1是因为i设为了0
    for(let j = 0; j < arr.length -i -1; j++) {
      if(arr[j] > arr[j+1]) {
        flag = false;
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

    if(flag) break;
  }

  return arr;
}

console.log(bubbleSort([8,2,3,0,4]), '冒泡排序')

/**
 * 数组去重一————ES6 set方法
 */
var arr = [1,1,2,5,6,3,5,5,6,8,9,8];
console.log(Array.from(new Set(arr)), 'set数组去重')
console.log([...new Set(arr)], 'set数组去重')

/**
 * 数组去重二————for循环
 * @param  origin 需要去重的数组
 */
function unique(origin) {
  let arr = [].concat(origin);
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1;j < arr.length; j++) {
      if(arr[i] == arr[j]) {
        arr.splice(j,1);
        j--
      }
    }
  }
  return arr;
}

console.log(unique([1,2,1,3,4,3,2,1,4]), 'for循环数组去重二');

/**
 * 数组去重三————includes（用于判断字符串是否包含指定的子字符串，包含返回true，反之返回false）
 * @param {需要去重的数组} origin 
 */
function unique2(origin) {
  let res = [];
  for(let i = 0; i < origin.length; i++) {
    if(!res.includes(origin[i])) {
      res.push(origin[i])
    }
  }
  return res;
}
console.log(unique2([1,2,1,3,4,3,2,1,4]), 'includes去重');

/**
 * 数组去重四————先用sort排序，然后用一个指针从第0位开始，配合while循环去重
 * @param {需要去重的数组} arr 
 */
function unique3(arr) {
  arr = arr.sort(function (a, b) {return a-b}); // 排序之后的数组
  let pointer = 0;
  while(arr[pointer]) {
    if(arr[pointer] == arr[pointer + 1]) { // 若这一项和下一项相等则删除下一项，指针前移
      arr.splice(pointer+1 ,1);
      pointer--;
    }
    pointer++;
  }
  return arr;
}
console.log(unique3([1,1,2,50,6,3,5,5,6,8,9,8]));

setTimeout(function(){
  console.log('定时器开始啦')
});

new Promise(function(resolve){
  console.log('马上执行for循环啦');
  for(var i = 0; i < 10000; i++){
      i == 99 && resolve();
  }
}).then(function(){
  console.log('执行then函数啦')
});

console.log('代码执行结束');

let a = function() {
  console.log('真的是，我太菜了！');
}()

