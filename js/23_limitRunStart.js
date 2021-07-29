/**
 * 实现一个同时允许任务数量最大为n的函数
 * @param {*} tasks 
 * @param {*} n 
 * @returns 
 */
function limitRunTask(tasks, n) {
  return new Promise((resolve, reject) => {
    let index = 0, finish = 0, start = 0, res = [];
    function run() {
      if (finish == tasks.length) {
        resolve(res);
        return;
      }
      while (start < n && index < tasks.length) {
        // 每一阶段的任务数量++
        start++;
        let cur = index;
        tasks[index++]().then(v => {
          start--;
          finish++;
          res[cur] = v;
          run();
        });
      }
    }
    run();
  })
  // 大概解释一下：首先如何限制最大数量n
  // while 循环start < n，然后就是then的回调
}