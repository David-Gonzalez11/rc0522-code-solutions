/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var chars = '';
  var first = string[firstIndex];
  var second = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      chars += second;
    } else if (i === secondIndex) {
      chars += first;
    } else {
      chars += string[i];
    }
  }
  return chars;
}
