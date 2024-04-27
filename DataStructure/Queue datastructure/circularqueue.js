


class CircularQueue {
    constructor(k) {
      this.queue = [];
      this.size = k;
    }
  
    enqueue(value) {
      if (this.size === this.queue.length) {
        return false;
      }
      this.queue.push(value);
    }
  
    dequeue() {
      if (this.size === 0) {
        return false;
      }
      this.queue.shift(); // Added parentheses
    }
  
    front() {
      if (this.size === 0) {
        return false;
      }
      return this.queue[0]; // Added return statement
    }
  
    rear() {
      return this.queue[this.queue.length - 1];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    isFull() {
      return this.size === this.queue.length
      
  }
}
  const circular = new CircularQueue(4);
  circular.enqueue(10);
  circular.enqueue(20);
  circular.enqueue(30);
  circular.enqueue(40);
  circular.enqueue(50);
  console.log(circular.front(),circular.rear());
  console.log(circular.isFull())