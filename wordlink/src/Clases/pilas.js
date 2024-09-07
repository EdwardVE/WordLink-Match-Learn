class Stack {
  constructor() {
      this.items = []; // Array to store stack elements
  }

  // Check if the stack is empty
  isEmpty() {
      return this.items.length === 0;
  }

  // Add an element to the stack
  push(element) {
      this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
      if (!this.isEmpty()) {
          return this.items.pop();
      }
      return null; // If the stack is empty
  }

  // Return the top element without removing it
  peek() {
      if (!this.isEmpty()) {
          return this.items[this.items.length - 1];
      }
      return null; // If the stack is empty
  }

  // Get the size of the stack
  size() {
      return this.items.length;
  }
}

// Usage example
const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.pop());   // Output: 300
console.log(stack.peek());  // Output: 200
console.log(stack.size());  // Output: 2
