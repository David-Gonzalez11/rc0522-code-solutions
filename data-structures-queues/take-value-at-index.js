/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue === undefined) {
    return;
  }
  let front = null;
  for (var i = 0; i < index; i++) {

    front = queue.dequeue();
    queue.enqueue(front);

  }
  return queue.dequeue();
}
