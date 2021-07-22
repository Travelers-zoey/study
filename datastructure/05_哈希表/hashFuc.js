const MAX_LOAD_FACTOR = 0.75;
const MIN_LOAD_FACTOR = 0.75;
/***
 * 哈希函数
 * @param src:要哈希化的字符串
 * @param max:哈希化的最大容量
 */
function hashFunc(str, max) {  
  //1.定义hashCode
  let hashCode = 0;

  //3.霍纳算法
  for(let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i);
  }

  hashCode = hashCode % max;

  return hashCode;
}

/***
 * 质数
 */
function isPrime (num) {
  //性能低
  // for(let i = 2; i < num; i++) {
  //   if(num % i ===0) {
  //     return false;
  //   }
  // }

  //1.获取num平方根
  let temp = Math.ceil(Math.sqrt(num));

  //2.循环判断
  for(let i = 2; i < temp; i++) {
    if(num % i === 0) return false;
    return true;
  }

  return true;
}

console.log(isPrime(3));

export class HashTable {
  constructor() {
    this.storage = []; //数组存储元素
    this.count = 0; //当前存放了多少个元素
    this.limit = 7; //总个数
  }

  //哈希函数
  hashFunc(str, max) {  
    //1.定义hashCode
    let hashCode = 0;
  
    //3.霍纳算法
    for(let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }
  
    hashCode = hashCode % max;
  
    return hashCode;
  }

  //判断质数
  isPrime (num) {
    //1.获取num平方根
    let temp = Math.ceil(Math.sqrt(num));
  
    //2.循环判断
    for(let i = 2; i < temp; i++) {
      if(num % i === 0) return false;
      return true;
    }
  
    return true;
  }

  getPrime(num) {
    // 初始8 9 10 11(容量)
    while(!isPrime(num)) {
      num++;
    }

    return num;
  }

  // 放入或修改元素:hashMap -> {key, value},3个数组
  put(key, value) {
    //1.根据key映射index
    const index = this.hashFunc(key, this.limit);

    //2.取出数组，bucket是桶
    let bucket = this.storage[index];
    if(bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    //3.判断是插入还是修改
    let overide = false;
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if(tuple[0] === key) {
        tuple[1] = value;
        overide = true;
      }
    }

    //4.如果没有覆盖，那么就是新增
    if(!overide) {
      bucket.push([key, value]);
      this.count++;
    }

    if(this.count > this.limit * MAX_LOAD_FACTOR) {
      let newLimit = this.limit * 2;
      newLimit = this.getPrime(newLimit)
      this.resize(newLimit);
    }
  }

  //获取元素：根据key获取value
  get(key) {
    // 1.根据key获取index
    const index = this.hashFunc(key, this.limit);

    // 2.获取bucket
    const bucket = this.storage[index];
    if(bucket === undefined)
    {
      return null;
    }

    //3.遍历bucket,一个个查找
    for(let i = 0; i< bucket.length; i++) {
      let tuple = bucket[i];
      if(tuple[0] === key) {
        return tuple[1]
      }
    }

    return null;
  }

  //删除元素:根据key删除元素
  remove(key) {
    //key获取index
    const index = this.hashFunc(key, this.limit);

    const bucket = this.storage[index];
    if(bucket === undefined) {
      return null;
    }
    //i是索引值
    for(let i in bucket) {
      let tuple =  bucket[i];
      if(tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        if(this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2);
          newLimit = this.getPrime(newLimit)
          this.resize(newLimit);
        }

        return tuple[1];
      }
    }
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  // 扩容、缩容函数
  resize(newLimit) {
    // 1.保存旧的数组中的内容
    let oldStorage = this.storage;

    // 2.重置属性
    this.limit = newLimit;
    this.storage = [];
    this.storage.count = 0;

    //取出oldStorage的所有元素，重新放到storage
    oldStorage.forEach(bucket => {
      if(bucket === null) {
        return
      }

      for(let i in bucket) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1])
      }
    })
  }
}

const hashT = new HashTable();
hashT.put("name", 10);
hashT.put("zoey", 25);
hashT.put("xuke", 9);
hashT.put("zhangyueke", 18);
hashT.put("mmm", 22);
hashT.put("nnn", 22);
hashT.put("111", 22);
console.log(hashT, 'hashT');
console.log(hashT.get('zhangyueke'));
console.log(hashT.get('aaa'));
hashT.remove("xuke")
console.log(hashT, 'hashT');