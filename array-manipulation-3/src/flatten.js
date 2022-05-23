/* exported flatten */
// create a new variable as storage
// create a for loop that iterates over the array
// use the array.isArray method to check if array[i] is an array
// create another for loop to iterate over array[i].length
// push the values of array[i][x] to the newArray
// else push array[i] to the new array
// return the newArr
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
