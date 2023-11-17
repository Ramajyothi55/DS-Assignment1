class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
  
      // Update the minStack with the current minimum value
      if (
        this.minStack.length === 0 ||
        value <= this.minStack[this.minStack.length - 1]
      ) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
  
      // If the popped element is the current minimum, update minStack
      if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return this.stack.pop();
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
  
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(1);
  minStack.push(77);
  minStack.push(-1);
  console.log("Current Minimum: " + minStack.getMin()); 
  minStack.pop();
//   console.log("Current Minimum: " + minStack.getMin()); 
