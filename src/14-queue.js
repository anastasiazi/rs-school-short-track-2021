const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.listSize = 0;
  }

  get size() {
    return this.listSize;
  }

  enqueue(element) {
    const item = new ListNode(element);
    if (this.head === undefined) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
    this.listSize++;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }

    const result = this.head.value;
    this.head = this.head.next;
    this.listSize--;
    return result;
  }
}

module.exports = Queue;
