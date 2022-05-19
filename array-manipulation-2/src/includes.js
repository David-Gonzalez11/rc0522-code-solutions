/* exported includes */
// iterate through the array with a for loop
// check if array at its current index is equal to the value
// if it is return true
// else return false
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
