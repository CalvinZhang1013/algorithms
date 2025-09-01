class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  stack_empty() {
    if (this.top === 0) {
      return true;
    }
    return false;
  }

  push(item) {
    this.items.push(item);
    this.top++;
  }

  pop() {
    if (this.top === 0) {
      return;
    } else {
      this.top--;
      return this.items[this.top];
    }
  }
}

stack = new Stack();
console.log(stack.stack_empty());
stack.push(1);
stack.push(2);

console.log(stack.stack_empty());
console.log(stack.top);
console.log(stack.pop());
console.log(stack.pop());
