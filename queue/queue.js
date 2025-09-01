// class Queue {
//   constructor(limit) {
//     this.items = new Array(limit);
//     this.head = 0;
//     this.tail = 0;
//   }

//   is_empty() {
//     if (this.head === this.tail) {
//       return true;
//     }
//     return false;
//   }

//   is_full() {
//     if (this.tail + 1 === this.head) {
//       return true;
//     }
//     return false;
//   }

//   enqueue(item) {
//     if (this.is_full()) {
//       throw "queue is full";
//     }

//     if (this.is_empty()) {
//       this.items[this.head] = item;
//       this.tail++;
//     } else if (this.tail > this.head && this.tail < this.items.length) {
//       this.items[this.tail] = item;
//       this.tail++;
//     } else if (this.tail === this.items.length - 1) {
//       this.tail = 0;
//       this.items[this.tail] = item;
//     }
//   }

//   dequeue() {
//     if (this.is_empty()) {
//       throw "queue is empty";
//     } else if (this.tail === 0) {
//       this.tail = this.items.length - 1;
//       return this.items[0];
//     }
//     let value = this.items[this.tail];
//     this.tail--;
//     return value;
//   }
// }

class BoundedQueue {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("capacity must be a postive integer");
    }
    this._buf = new Array(capacity);
    this._cap = capacity;
    this._head = 0;
    this._tail = 0;
    this._count = 0;
  }
  get_capacity() {
    return this._cap;
  }

  get_size() {
    return this._count;
  }
  isEmpty() {
    return this._count === 0;
  }
  isFull() {
    return this._count === this._cap;
  }

  enqueue(value) {
    if (this.isFull()) {
      throw new Error("this queue is full");
    }
    this._buf[this._tail] = value;
    this._tail = (this._tail + 1) % this._cap; // wrap around
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const value = this._buf[this._head];
    this._buf[this._head] = undefined;
    this._head = (this._head + 1) % this._cap; // wrap around
    this._count--;
    return value;
  }
}

let queue = new BoundedQueue(5);
queue.enqueue(1);
console.log(queue._buf);
queue.enqueue(2);
console.log(queue._buf);
queue.enqueue(3);
console.log(queue._buf);
queue.enqueue(4);
console.log(queue._buf);
queue.enqueue(5);
console.log(queue._buf);
queue.dequeue();
console.log(queue._buf);
queue.dequeue();
console.log(queue._buf);
