/* exported flatten */
function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var x = 0; x < array[i].length; x++) {
        newArr.push(array[i][x]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
