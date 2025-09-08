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
        return current;
      }
      current = current.next;
    }
    return false;
  }
  insert_list(node) {
    node.next = this.head;
    if (this.head != null) {
      this.head.prev = node;
    }
    this.head = node;
    node.prev = null;
  }
  delete_list(value) {
    let node = this.search_list(value);
    if (node.prev != null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next != null) {
      node.next.prev = node.prev;
    }
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
linkedlist.delete_list(2);
console.log(linkedlist.getHead());
