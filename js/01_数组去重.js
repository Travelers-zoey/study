/**
 * 数组去重一————ES6 set方法
 */
var arr = [1, 1, 2, 5, 6, 3, 5, 5, 6, 8, 9, 8];
console.log(Array.from(new Set(arr)), "set数组去重");
console.log([...new Set(arr)], "set数组去重");

/**
 * 数组去重二————for循环
 * @param  origin 需要去重的数组
 */
function unique(origin) {
  let arr = [].concat(origin);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

console.log(unique([1, 2, 1, 3, 4, 3, 2, 1, 4]), "for循环数组去重二");

/**
 * 数组去重三————includes（用于判断字符串是否包含指定的子字符串，包含返回true，反之返回false）
 * @param {需要去重的数组} origin
 */
function unique2(origin) {
  let res = [];
  for (let i = 0; i < origin.length; i++) {
    if (!res.includes(origin[i])) {
      res.push(origin[i]);
    }
  }
  return res;
}
console.log(unique2([1, 2, 1, 3, 4, 3, 2, 1, 4]), "includes去重");

/**
 * 数组去重四————先用sort排序，然后用一个指针从第0位开始，配合while循环去重
 * @param {需要去重的数组} arr
 */
function unique3(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  }); // 排序之后的数组
  let pointer = 0;
  while (arr[pointer]) {
    if (arr[pointer] == arr[pointer + 1]) {
      // 若这一项和下一项相等则删除下一项，指针前移
      arr.splice(pointer + 1, 1);
      pointer--;
    }
    pointer++;
  }
  return arr;
}
console.log(unique3([1, 1, 2, 50, 6, 3, 5, 5, 6, 8, 9, 8]));

function f1() {
  var n = 999;
}
// console.log(n, 'n'); // error

//typeof 判断数组
console.log([].push && typeof [].push == "function");
console.log(typeof { a: [1, 2, 3] }.length);
console.log(function () {}.push && typeof function () {}.push == "function");


/**
 * 对象数组去重，用对象访问属性的方法，判断对象中是否存在key
 * @param {Array-Object} arr 
 * @returns 
 */
function uniqueObject(arr) {
  let result = [];
  let obj = {};
  for (let i in arr) {
    if (!obj[arr[i].key]) {
      result.push(arr[i]);
      obj[arr[i].key] = true;
    }
  }
  
  return result;
}

let array = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 2,
  },
];

console.log(uniqueObject(array));
