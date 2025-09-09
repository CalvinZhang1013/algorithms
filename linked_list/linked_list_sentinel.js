class Linkedlist {
  constructor(sentinel) {
    this.sentinel = sentinel;
  }
  search_list(value) {
    // if (!this.sentinel.next) {
    //   return false;
    // }
    current = this.sentinel.next;
    while (current.next) {
      if (current.key === value) {
        return current;
      }
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
