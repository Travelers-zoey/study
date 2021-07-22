import {Queue} from '../03_队列/01_queue.js'
// 创建字典的构造函数
class Dictionay {
  // 字典属性
  constructor() {
    this.items = {}
  }

  // 字典操作方法
  // 在字典中添加键值对
  set(key, value) {
      this.items[key] = value
  }

  // 判断字典中是否有某个key
  has(key) {
      return this.items.hasOwnProperty(key)
  }

  // 从字典中移除元素
  remove(key) {
      // 1.判断字典中是否有这个key
      if (!this.has(key)) return false

      // 2.从字典中删除key
      delete this.items[key]
      return true
  }

  // 根据key去获取value
  get(key) {
      return this.has(key) ? this.items[key] : undefined
  }

  // 获取所有的keys
  keys() {
      return Object.keys(this.items)
  }

  // 获取所有的value
  values() {
      return Object.values(this.items)
  }

  // size方法
  size() {
      return this.keys().length
  }

  // clear方法
  clear() {
      this.items = {}
  }
}

export class Graph {
  constructor() {
    // 1.属性——顶点（数组）、边（字典）
    this.vertexes = [];
    this.edges = new Dictionay(); 
  }

  // 2.方法
  //添加顶点
  addVertexes(v) {
    this.vertexes.push(v);
    this.edges.set(v, [])
  }

  //添加边
  addEdge(v1, v2) {
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  }

  //初始化状态颜色
  initailizeColor() {
    let colors = [];
    for(let i in this.vertexes) {
      colors[this.vertexes[i]] = 'white';
    }

    return colors;
  }

  //广度优先搜索
  BFS(initV, handler) {
    // 1. 初始化颜色
    let colors = this.initailizeColor();

    // 2. 创建队列
    let queue = new Queue();

    // 3. 将顶点加入到队列中
    queue.enQueue(initV);

    // 4. 循环从队列中取出元素
    while(!queue.isEmpty()) {
      // 4.1从队列中取出一个顶点
      let v = queue.deQueue();
      // 4.2 获取和顶点相连的另外顶点
      let vList = this.edges.get(v);

      // 4.3 将v的颜色设置为灰色
      colors[v] = 'gray';

      // 4.4 遍历所有顶点，循环加入队列中
      for(let i in vList) {
        let e = vList[i];
        if(colors[e] == 'white') {
          colors[e] = 'gray';
          queue.enQueue(e);
        }
      }

      // 4.5 访问顶点
      handler(v);

      // 4.6 将顶点设置为黑色
      colors[v] = 'black';
    }
  }

  //深度优先搜索
  DFS(initV, handler) {
    // 1.初始化颜色
    let colors = this.initailizeColor();

    // 2.从某个顶点依次递归访问
    this.dfsVisit(initV, colors, handler)
  }


  dfsVisit(v, colors, handler) {
    // 1.将颜色设置为灰色
    colors[v] = 'gray';

    // 2.处理v顶点
    handler(v);

    // 3.访问v相连的顶点
    let vList = this.edges.get(v);
    for(let i in vList) {
      let e = vList[i];
      if(colors[e] == 'white') {
        this.dfsVisit(e, colors, handler);
      }
    }
  }

  //toString
  toString() {
    //1. 定义字符串，保存最终结果
    let resultString = '';

    //2. 遍历所有的顶点，以及顶点对应的边
    for(let i in this.vertexes) {
      resultString += this.vertexes[i] + '->';
      let vEdges = this.edges.get(this.vertexes[i]);
      for(let j in vEdges) {
        resultString += vEdges[j] + " ";
      }
      resultString += '\n'
    }

    return resultString
  }
}

let graph = new Graph();

let myVertexes = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
for(let i = 0; i < myVertexes.length; i++) {
  graph.addVertexes(myVertexes[i]);
}

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("a", "d");
graph.addEdge("c", "d");
graph.addEdge("c", "g");
graph.addEdge("d", "g");
graph.addEdge("d", "h");
graph.addEdge("b", "e");
graph.addEdge("b", "f");
graph.addEdge("e", "i");

console.log(graph, 'graph');
console.log(graph.toString(), 'toString');
console.log('广度优先遍历');
graph.BFS(graph.vertexes[0], (result) => {
  console.log(result + '');
});
console.log('深度优先遍历');
graph.DFS(graph.vertexes[0], (result) => {
  console.log(result + '');
});