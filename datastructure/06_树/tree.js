class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * 二叉搜索/排序/查找树
 */
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //插入
  insert(key) {
    //1.根据key创建Node节点
    const newNode = new Node(key);

    //2.空树
    if(this.root === null)
    {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * 为了插入的时候递归
   * @param {object} node 往谁那里插入
   * @param {object} newNode 插入的新节点
   */
  insertNode(node, newNode) {
    //newNode键值大于根（node）节点时
    if(newNode.key > node.key) {
      //如果右节点不存在，直接插入
      if(node.right === null)
      {
        node.right = newNode;
      } else { //存在，递归
        this.insertNode(node.right, newNode);
      }
    } else {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }

  //查找
  //先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  preOrderTraverseNode(node) {
    if(node === null) return;

    console.log(node.key); //直接访问
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }

  //中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  inOrderTraverseNode(node) {
    if(node === null) return;

    this.inOrderTraverseNode(node.left);
    console.log(node.key);
    this.inOrderTraverseNode(node.right);
  }

  //后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  postOrderTraverseNode(node) {
    if(node === null) return;

    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.key);
  }

  //最大值
  max() {
    let node = this.root;

    while(node.right !== null) {
      node = node.right;
    }

    return node.key;
  }

  //最小值
  min() {
    let node = this.root;

    while(node.left !== null) {
      node = node.left;
    }

    return node.key;
  }

  //递归搜索——根据key查找，存在返回true，反之false
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    // 1.判断node有没有值
    if(node === null) return false;

    // 2.判断搜索的key和节点值的关系
    if(key < node.key) {
      return this.searchNode(node.left, key);
    } else if(key > node.key){
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  //非递归搜索
  search2(key) {
    let node = this.root;

    while(node !== null) {
      if( key < node.key) {
        node = node.left;
      } else if( key > node.key ) {
        node = node.right;
      } else return true;
    }

    return false;
  }

  //删除——最复杂
  remove(key) {
    //1.定义一些变量记录状态
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    //2.找到要删除的节点
    while(current.key !== key) {
      parent = current;

      if(key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      if(current === null) return false;
    }

    // 3. 找到了节点:current
    // 3.1 删除的节点是叶节点——可能只有根节点
    if(current.left === null && current.right === null) {
      if(current == this.root) {
        this.root = null;
      } else if(isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 3.2 删除的节点只有一个叶子节点    
    else if(current.right === null) {// 只有一个左子节点
      if(current == this.root) {
        this.root = current.left;
      } else if(isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if(current.left === null) { //只有一个右子节点
      if(current == this.root) {
        this.root = current.right;
      } else if(isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else { // 3.3 删除的节点有两个节点
      // 1. 获取后继节点
      let successer = this.getSuccessor(current);

      // 2. 是否是根节点
      if(this.root === current)
      {
        this.root = successer;
      } else if(isLeftChild) {
        parent.left = successer;        
      }

      successer.left = current.left;
    }

    

    return true;
  }

  //找到前驱、后继
  getSuccessor(delNode) {
    // 1. 找到后继、定义一些变量
    let successerParent = delNode; //后继的父节点
    let successer = delNode; //后继节点
    let current = delNode.right; //当前节点

    // 2. 寻找节点
    while(current !== null) {
      successerParent = successer;
      successer = current;
      current = current.left;
    }

    // 3. 如果替换节点不是 删除节点的右节点
    if(successer != delNode.right)
    {
      successerParent.left = successer.right;
      successer.right = delNode.right;
    }

    return successer;
  }
 }

let bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(15);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(20);
bst.insert(12);
bst.insert(14);
bst.insert(18);
bst.insert(25);

console.log(bst,'bst');
console.log('先序遍历');
bst.preOrderTraverse();
console.log('中序遍历');
bst.inOrderTraverse();
console.log('后序遍历');
bst.postOrderTraverse();
console.log('最小值');
console.log(bst.min());
console.log('最大值');
console.log(bst.max());
console.log('递归搜索');
console.log(bst.search(8), 8);
console.log(bst.search(99), 99);
console.log('非递归搜索');
console.log(bst.search2(8), 8);
console.log(bst.search2(99), 99);
