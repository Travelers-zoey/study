/**
 * 深拷贝
 * @param {*} obj
 * @returns
 */
function deepClone(obj) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  if (obj === null || typeof obj !== "object") return obj;

  let newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    let temp = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    newObj[i] = temp;
  }

  return newObj;
}

let obj = {
  a: {
  b: [1, 2, /^\s*|\s*$/g],
  },
  b: [3, 4],
  c: "111",
};

let obj2 = deepClone(obj);
obj2.a.b[2] = 3;
console.log(obj);
console.log(obj2);

let a = '111';
let b = deepClone(a);
a = 1;
console.log(a, 'a');
console.log(b, 'b');