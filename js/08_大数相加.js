/**
 * 大数相加
 * @param {number} a
 * @param {number} b
 * @returns
 */
function addBigNums(a, b) {
  let res = "";
  let loc = 0;
  a = (a + '').split('');
  b = (b + '').split('');

  while (a.length || b.length || loc) {
    //~~把字符串转换为数字，用~~而不用parseInt，是因为~~可以将undefined转换为0，当a或b数组超限，不用再判断undefined
    //注意这里的+=，每次都加了loc本身，loc为true，相当于加1，loc为false，相当于加0
    loc += ~~a.pop() + ~~b.pop();
    res = (loc % 10) + res;
    //当个位数和大于9，产生进位，需要往res头部继续加1，此时loc变为true，true + 任何数字，true会被转换为1
    loc = loc > 9;
  }

  // 正则0+：匹配任何至少包含一个0的字符串，其实是为了去除开头的0
  return res.replace(/^0+/, "");
}

console.log(addBigNums(111111111111, 11111111111));
