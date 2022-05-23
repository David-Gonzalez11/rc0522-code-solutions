/* exported difference */

// create a new storage space for the new arr
// create a for loop that iterates over the first array
// check if the second array at index i  does not incluide the first array at index i
// if it doesnt then oush the first array at index i to the new array
// create another for loop and check if the first array at index i does not include the second array [i]
// if it doesnt then push second array at i to the new array
// return the new Array
function difference(firstArr, secondArr) {
  var newArr = [];
  for (var i = 0; i < firstArr.length; i++) {
    if (!secondArr.includes(firstArr[i])) {
      newArr.push(firstArr[i]);
    }
  }
  for (var j = 0; j < secondArr.length; j++) {
    if (!firstArr.includes(secondArr[j])) {
      newArr.push(secondArr[j]);
    }
  }
  return newArr;
}
