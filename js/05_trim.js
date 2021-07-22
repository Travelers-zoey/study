/**
 * 去除首位空格
 * 正则：^开头，$结尾，\s空格，*0次1次或多次
 * @param {string} str
 * @returns
 */
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

console.log('  o b ject  '.trim());