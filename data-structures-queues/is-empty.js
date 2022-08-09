/* exported isEmpty */

function isEmpty(queue) {
  if (queue.peek() === undefined) {
    return true;
  }
  if (queue.peek() >= 0) { return false; }
}
