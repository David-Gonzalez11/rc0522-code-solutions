/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const top = stack.pop();
    const secondValue = stack.peek();
    stack.push(top);
    return secondValue;
  }

}
