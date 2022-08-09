/* exported maxValue */

function maxValue(stack) {
  let top = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      if (top < stack.peek()) {
        top = stack.peek();
      }
      stack.pop();
    }
  }
  return top;
}
