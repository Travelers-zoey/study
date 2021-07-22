/**
 * 模版引擎，通过正则匹配，替换{{变量}}
 * @param {String} str 替换的字符串
 * @param {Object} data 
 * @returns 
 */
function template(str, data) {
  let reg = /{{([a-zA-Z_$][a-zA-Z0-9\.]+)}}/g;
  return str.replace(reg, function(raw, key) {
    let paths = data;
    let array = key.split('.');

    //一层层取出通过 . 引用的对象
    while(array.length > 0) {
      paths = paths[array.shift()];
    }

    return paths || raw;
  })
}

var s = "今天是{{day.today}}，天气{{weather}}, 我今天的计划是, {{day.plan}}";

var data = {
  day : {
    today : '周六',
    plan : '学习'
  },
  weather: '晴'
}

console.log(template(s, data));