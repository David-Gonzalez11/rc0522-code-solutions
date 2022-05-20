/* exported reverseWord */
/*
create a storage for the new String
iterate through each character one at a time
reassign the newString variable to the current chracter of string
return the newString

*/
function reverseWord(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
