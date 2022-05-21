/* exported isPalindromic */

// create a new variable to replace all spaces with no spaces
// check if words variable is equal to the reversed string
// if it is then return true
// if not return false
function isPalindromic(string) {
  var words = string.replaceAll(' ', '');
  if (words === words.split('').reverse().join('')) {
    return true;
  }
  return false;
}
