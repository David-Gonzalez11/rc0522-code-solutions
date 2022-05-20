/* exported compact */
function compact(array) {
  var falsyValues = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== '' && array[i] !== false && !Number.isNaN(array[i]) && array[i] !== 0 && array[i] !== undefined) {
      falsyValues.push(array[i]);
    }
  }
  return falsyValues;
}
