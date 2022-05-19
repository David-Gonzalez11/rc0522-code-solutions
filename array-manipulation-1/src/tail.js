/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    if (i > 0) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
