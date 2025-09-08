class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  append(node) {
    if (!this.getHead()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
  }
  search_list(value) {
    let current = this.head;
    while (current.next) {
      if (current.key === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.key = value;
    this.prev = null;
    this.next = null;
  }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let linkedlist = new LinkedList();
linkedlist.append(node1);
linkedlist.append(node2);
linkedlist.append(node3);
console.log(linkedlist.getHead().next);
console.log(linkedlist.search_list(2));
