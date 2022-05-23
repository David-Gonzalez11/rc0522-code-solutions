/* exported unique */
// create a new variable to store the new arr and set it equal to an empty array
// create a for loop to iterate over the arr parameter
// check if the newArr does not inclide arr at index i
// if it doesnt then push arr at index i to the newArr
// return the newArr
function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
