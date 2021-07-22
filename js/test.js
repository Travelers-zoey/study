// const Scheduler = require("./调度器.js"); 

/**
 * 编写一个异步任务调度器
 */
 class Scheduler {
  constructor(num) {
    this.taskList = [];//用来承载还未执行的异步
    this.count = 0; //用来计数
    this.num = num; //允许同时运行的异步函数的最大个数
  }
 
  async add(fn) {
    this.count >= this.num ? await new Promise((resolve) => { this.taskList.push(resolve) }) : ""; 
    this.count++; 
    const result = await fn(); 
    this.count--; 
    if (this.taskList.length > 0) {
      this.taskList.shift()();
    } 
    return result; 
  } 
} 

const schedule = new Scheduler(3);//最多同一时间让它执行3个异步函数 
const asyncFacotory = (n, time) => { 
  return () => { 
    return new Promise((resolve) => { 
      setTimeout(() => {
        resolve(n);
      }, time) 
    }) 
  }
}
 
schedule.add(asyncFacotory(1, 1000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(2, 200)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(3, 300)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(4, 400)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(5, 1000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(6, 1000)).then((n) => { console.log(`异步任务:${n}`) });