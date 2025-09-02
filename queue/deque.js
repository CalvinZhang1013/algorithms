class deque {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("capacity must be a postive integer");
    }
    this._buf = new Array(capacity);
    this._head = 0;
    this._tail = 0;
    this._cap = capacity;
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  isFull() {
    return this._size === this._cap;
  }

  enqueue_front(value) {
    if (this.isFull()) {
      throw new Error("overflows");
    }
    this._head = (this._head - 1 + this._cap) % this._cap;
    this._buf[this._head] = value;
    this._size++;
  }

  enqueue_back(value) {
    if (this.isFull()) {
      throw new Error("overflows");
    }
    this._buf[this._tail] = value;
    this._tail++;
    this._size++;
  }

  dequeue_front() {
    if (this.isEmpty()) {
      throw new Error("underflow");
    }
    let x = this._buf[this._head];
    this._buf[this._head] = undefined;
    this._head = (this._head + 1) % this._cap;
    this._size--;
    return x;
  }

  dequeue_back() {
    if (this.isEmpty()) {
      throw new Error("underflow");
    }
    let x = this._buf[this._tail];
    this._buf[this._tail] = undefined;
    this._tail = (this._tail - 1 + this._cap) % this._cap;
    this._size--;
    return x;
  }
}

double_queue = new deque(5);
double_queue.enqueue_front(10);
console.log(double_queue);
console.log(double_queue.dequeue_front());
console.log(double_queue);
