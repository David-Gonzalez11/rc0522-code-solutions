/* exported reverse */
// create a new varibale and set it equal to an empty array
// iterate over the array and set the starting index at the last index of the array
// decrement the value by 1 each iteration
// push the current value at index i to the newArray
// return the newArray

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
