/* exported chunk */
/*
create a new variable and set it equal to an empty array
iterate over the array
if the array length is greater than size
use the slice method on the array and start at index i and end at i plus the size(chunk we want) and push the values to the new array variable
return the new array

*/
function chunk(array, size) {
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    if (array.length > size) {
      newArr.push(array.slice(i, i + size));
    }
  }
  return newArr;
}
