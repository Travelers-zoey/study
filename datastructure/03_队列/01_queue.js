/**
 * 队列结构的实现——基于数组
 */
export function Queue() { 
  //属性
  this.items = [];

  //方法
  //入队
  Queue.prototype.enQueue = function (element) {
    this.items.push(element)
  }

  //出队
  Queue.prototype.deQueue = function () { 
    return this.items.shift()
  }

  //查看前端元素
  Queue.prototype.front = function () {
    return this.items[0]
  }

  //判空
  Queue.prototype.isEmpty = function() {
    return this.items.length == 0
  }

  //长度
  Queue.prototype.size = function() {
    return this.items.length
  }

  //toString
  Queue.prototype.toString = function () {
    return this.items.join(' ')
  }
}

let q = new Queue();
q.enQueue('1');
q.enQueue('2');
q.enQueue('a');
q.enQueue('b');

console.log(q);
q.deQueue();
q.deQueue();
console.log(q);
console.log(q.front());
console.log(q.isEmpty());
console.log(q.size());
console.log(q.toString());


/**
 * 队列的应用——击鼓传花：数到number的人淘汰，求出最后剩下的人的下标，其余出队列后进队列
 * @param
 * @description
 */

function passGame(nameList, number) {
  //创建队列
  let q = new Queue();
  //所有人加入队列
  nameList.forEach(name => q.enQueue(name));

  //开始数数字，不是number的重新加入队列的末尾
  while(q.size() > 1) {
    for(let i= 0; i < number - 1; i++) {
      q.enQueue(q.deQueue())
    }
    //是number数字将其从队列删除
    q.deQueue()
  }

  //获取剩下那个人下标值
  console.log(nameList.indexOf(q.front()));

  //获取剩下那个人名字  
  return q.front();
}

console.log('击鼓传花', passGame(['a', 'b', 'c', 'd', 'e'], 6));