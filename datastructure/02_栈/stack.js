//栈结构的封装
function Stack() {
  this.items = [];

  //入栈，给实例加入方法，用原型
  // this.push = function() {
  // }

  Stack.prototype.push = function(element) {
    this.items.push(element); 
  }

  //出栈
  Stack.prototype.pop = function() {
    return this.items.pop()
  }

  //查看栈顶元素
  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }

  //判断栈空
  Stack.prototype.isEmpty = function () { 
    return this.items.length == 0;
  }

  //获取栈元素个数
  Stack.prototype.size = function () { 
    return this.items.length;
  }

  //toString
  Stack.prototype.toString = function () {
    return this.items.join(' ')
  }
}

let s = new Stack();

s.push(1);
s.push(2);
console.log(s);
console.log(s.peek());
console.log(s.size());
console.log(s.isEmpty());
console.log(s.toString());


/**
 * 栈的应用——十进制转二进制
 * desc:用decNumber循环除以2，余数反过来即为二进制数
 */

function dec2bin(decNumber) { 
  let s = new Stack();

  while(decNumber > 0 ) {
    //获取余数，放入栈中
    s.push(decNumber % 2)
    //获取整除结果（整数）
    decNumber = Math.floor(decNumber / 2)     
  }

  //从栈中取出0和1
  let binaryString = ''
  while(!s.isEmpty()) {
    binaryString += s.pop()
  }   

  return binaryString
}

console.log(dec2bin(10)); 
console.log(dec2bin(100)); 