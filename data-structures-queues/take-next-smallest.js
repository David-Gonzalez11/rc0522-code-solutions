/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const front = queue.dequeue();
    if (front <= queue.peek()) {
      return front;
    } else if (front > queue.peek()) {
      queue.enqueue(front);
    } else {
      return front;
    }
  }
}
