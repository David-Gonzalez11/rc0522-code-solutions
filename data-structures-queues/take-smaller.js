/* exported takeSmaller */

function takeSmaller(queue) {
  const value = queue.dequeue();
  if (queue.peek() === undefined) {
    return value;
  }
  const second = queue.dequeue();
  if (value < second || value === second) {
    queue.enqueue(second);
    return value;
  } else {
    queue.enqueue(value);
    return second;
  }
}
