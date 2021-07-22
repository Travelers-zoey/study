export class ArrayList {
  constructor() {
    this.array = [];
  }

  //插入
  insert(data) {
    this.array.push(data);
  }

  //toString
  toString() {
    return this.array.join("-");
  }

  //交换两个位置的数据
  swap(m, n) {
    let temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  }

  //冒泡排序
  bubbleSort() {
    let length = this.array.length;
    for (let j = length - 1; j > 0; j--) {
      //第一次：j=lengh - 1，比较到倒数第一个位置
      //第二次：j = length - 2,比较到倒数第二个位置
      //第lengh-1次：j = 1,
      for (let i = 0; i < j; i++) {
        //第一次进来：i=0，比较 0 和 1 位置的两个数据,如果0位置大于1位置数据
        //最后一次进来：i= length - 1,比较length - 2 和length - 1的两个数据，越界
        if (this.array[i] > this.array[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    }
    return this.array;
  }

  //选择排序
  selectionSort() {
    //1.获取数组长度
    let length = this.array.length;

    //2.外层循环：从0位置开始取数据
    for (let j = 0; j < length - 1; j++) {
      //内层循环：从i+1位置开始，和后面的数据进行比较
      let min = j;
      for (let i = min + 1; i < length; i++) {
        if (this.array[min] > this.array[i]) {
          min = i;
        }
      }

      this.swap(min, j);
    }

    return this.array;
  }

  //插入排序
  insertSort() {
    //1. 获取数组的长度
    let length = this.array.length;

    //2. 外层循环：从第i个位置开始获取数据，向前面局部有序进行插入
    for (let i = 1; i < length; i++) {
      //3. 内层循环：获取i位置的元素，和前面的数据一次进行比较
      let temp = this.array[i];
      let j = i;
      while (temp < this.array[j - 1] && j > 0) {
        this.array[j] = this.array[j - 1];
        j--;
      }

      //4.将当前j位置的数据，放入temp
      this.array[j] = temp;
    }

    return this.array;
  }

  //希尔排序
  shellSort() {
    let length = this.array.length;

    //2. 初始化增量
    let gap = Math.floor(length / 2);

    //3. while循环（gap不断减小）
    while (gap >= 1) {
      //4. 以gap作为间隔，进行分组，对分组进行插入排序
      for (let i = gap; i < length; i++) {
        let temp = this.array[i];
        let j = i;
        while (temp < this.array[j - gap] && j > gap - 1) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }

        //5. 将j位置的元素复制temp
        this.array[j] = temp;
      }

      gap = Math.floor(gap / 2);
    }
    return this.array;
  }

  //快速排序
  //1. 选择枢纽，并让3个数字有序
  medium(left, right) {
    //1. 取出中间的位置
    let center = Math.floor((left + right) / 2);

    //2.判断大小，并且进行交换
    if (this.array[left] > this.array[center]) {
      this.swap(left, center);
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center, right);
    }
    if (this.array[left] > this.array[center]) {
      this.swap(left, center);
    }

    //3.将center换到right-1位置
    this.swap(center, right - 1);

    return this.array[right - 1];
  }

  //2.快速排序的实现
  quickSort() {
    this.quick(0, this.array.length - 1);

    return this.array;
  }

  //递归函数
  quick(left, right) {
    // 1.递归结束
    if (left >= right) return;

    // 2.获取数据
    let pivot = this.medium(left, right);

    //3.定义变量，用于记录当前找到的位置
    let i = left;
    let j = right - 1;

    // 4. 开始进行交换
    while (i < j) {
      while (this.array[++i] < pivot) {}
      while (this.array[--j] > pivot) {}
      if (i < j) {
        this.swap(i, j);
      } else {
        break;
      }
    }

    //5.将枢纽放置在正确的位置，i的位置
    this.swap(i, right - 1);

    //6. 分而治之
    this.quick(left, i - 1);
    this.quick(i + 1, right);
  }
}

let list = new ArrayList();

list.insert(66);
list.insert(88);
list.insert(12);
list.insert(87);
list.insert(100);
list.insert(5);
list.insert(566);
list.insert(23);

console.log("fdsa");
console.log(list);
console.log(list.toString(), "toString");
// console.log(list.bubbleSort(), '冒泡');
// console.log(list.selectionSort(), '选择');
// console.log(list.insertSort(), '插入');
// console.log(list.shellSort(), '希尔');
console.log(list.quickSort(), "快速");
