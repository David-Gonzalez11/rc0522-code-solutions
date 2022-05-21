/* exported isPalindromic */
function isPalindromic(string) {
  var words = string.replaceAll(' ', '');
  if (words === words.split('').reverse().join('')) {
    return true;
  }
  return false;
}
