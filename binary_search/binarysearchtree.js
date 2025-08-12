class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    // if (!this.root.left && value < this.root.value){
    //     this.root.left = newNode;
    //     return this;
    // }
    // if (!this.root.right && value > this.root.value){
    //     this.root.right = newNode;
    //     return this;
    // }
    // let current = this.root;
  }

  lookup(value) {
    if (this.root.value === value) {
      return this.root;
    } else {
      let current = this.root;
      while (current) {
        if (current.value === value) {
          return current;
        }
        if (value < current.value) {
          if (!current.left) {
            return false;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  remove(value) {
    if (this.root.value === value) {
      let temp = this.root.left;
      this.root = this.root.right;
      this.root.left = temp;
    } else {
      let current = this.root;
      let parent = null;
      while (current) {
        if (current.value === value) {
        }
      }
    }
  }
  breathfirstsearch() {
    let list = [];
    let queue = [this.root];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breathfirstsearchR(node, list, queue) {
    if (queue.length == 0) {
      return list;
    }
    list.push(node.value);
    if (node.left) {
      queue.push(node.left);
      this.breathfirstsearchR(node.left, list, queue);
    }
    if (node.right) {
      queue.push(node.right);
      this.breathfirstsearchR(node.right, list, queue);
    }
    return list;
  }
  DFSInorder(list) {
    return traverseInorder(this.root, list);
  }
}

function traverseInorder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

let binaryTree = new BinarySearchTree();
binaryTree.insert(9);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(20);
binaryTree.insert(170);
binaryTree.insert(15);
binaryTree.insert(1);
let list = [];
let queue = [binaryTree.root];
// console.log(binaryTree.breathfirstsearch());
// console.log(binaryTree.breathfirstsearchR(binaryTree.root, list, queue));
console.log(binaryTree.DFSInorder(list));
console.log(list);
console.log(JSON.stringify(binaryTree.root));
// console.log(binaryTree.lookup(20));
// console.log(binaryTree.lookup(170));
// console.log(binaryTree.lookup(30));
console.log(binaryTree.remove(9));
console.log(JSON.stringify(binaryTree.root));
