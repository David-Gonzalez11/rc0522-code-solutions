/* exported equal */
// check if the length of the first array is not equal to the second array
// if its not then return false
// create another for loop nd check if the first array at index i is not equal to the second array at index i
// if it is not then return false
// else return true
function equal(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (var i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}
