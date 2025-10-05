class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor(node) {
    this.root = node;
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
      return;
    }
    let y = null;
    let x = this.root;
    while (x) {
      y = x;
      if (node.value < x.value) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    if (y.value > node.value) {
      y.left = node;
    } else {
      y.right = node;
    }
  }
}

let node1 = new Node(10);
let node2 = new Node(2);
let b_tree = new binaryTree();
b_tree.insert(node1);
console.log(b_tree);
b_tree.insert(node2);
console.log(b_tree);
