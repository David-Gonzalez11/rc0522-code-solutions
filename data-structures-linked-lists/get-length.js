/* exported getLength */

function getLength(list) {
  let value = 1;
  while (list.next !== null) {
    value++;
    list = list.next;
  }
  return value;
}
