/**
 * 优先级队列
 */
function priorityQueue() {
  //封装类——内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  //封装属性
  this.items = [];

  //方法
  //入队
  priorityQueue.prototype.enQueue = function (element, priority) {
    //创建QueueElement对象
    let qe = new QueueElement(element, priority);

    //判断队列是否为空
    if(!this.items.length)
      this.items.push(qe)
    else {
      let added = false;
      for(let item in this.items) {
        if(qe.priority < this.items[item].priority)
        {
          this.items.splice(item, 0, qe);
          added = true;
          break;         
        }
      }
      if(!added) 
        this.items.push(qe);
    }
  }

  //出队
  priorityQueue.prototype.deQueue = function () { 
    return this.items.shift()
  }

  //查看前端元素
  priorityQueue.prototype.front = function () {
    return this.items[0]
  }

  //判空
  priorityQueue.prototype.isEmpty = function() {
    return this.items.length == 0
  }

  //长度
  priorityQueue.prototype.size = function() {
    return this.items.length
  }

  //toString
  priorityQueue.prototype.toString = function () {
    let resultString = '';
    for(let item of this.items)
      resultString += item.element + '-' + item.priority + ' ';
    return resultString;
  }
}

let pq = new priorityQueue()

pq.enQueue('a',1);
pq.enQueue('c',3);
pq.enQueue('b',2);
pq.enQueue('f',5);
pq.enQueue('aaa',0);

console.log(pq);
console.log(pq.toString());