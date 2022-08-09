/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  } else {
    if (stack.peek() >= 0) {
      return false;
    }
  }
}
