/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const frontValue = queue.dequeue();
    return queue.enqueue(frontValue);
  }
}
