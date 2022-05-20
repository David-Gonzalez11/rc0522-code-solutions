/* exported swapChars */
/*
create a new varibale and set it equal to an empty string
create another variable and set it equal to the firstIndex of the string
create another variable and set it equal to the secondIndex of the string
iterate through the string
check if index at i is equal to the firstIndex
if it is then chars is equal to the second variable
check  if i is equal to the second index
if it is then chars is equal to first variable
if anythign else then chars is equal to the string at i index
return chars variable
*/
function swapChars(firstIndex, secondIndex, string) {
  var chars = '';
  var first = string[firstIndex];
  var second = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      chars += second;
    } else if (i === secondIndex) {
      chars += first;
    } else {
      chars += string[i];
    }
  }
  return chars;
}
