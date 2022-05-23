/* exported zip */
function zip(first, second) {
  var newArr = [];
  if (first.length > second.length) {
    first.pop();
  } else if (second.length > first.length) {
    second.pop();
  }
  for (var i = 0; i < first.length; i++) {
    newArr.push(Array.of(first[i], second[i]));
  }
  return newArr;
}
