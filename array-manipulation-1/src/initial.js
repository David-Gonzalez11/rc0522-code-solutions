/* exported initial */
// create a storage for all elements that are not the lat element
// iterate through all the elements in the array
// push the element at index of i to the storage
// return the storage which contains all elemnts without the last
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
