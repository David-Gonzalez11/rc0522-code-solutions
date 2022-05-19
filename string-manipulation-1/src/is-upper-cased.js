/* exported isUpperCased */
// check to see if the word is equal to word(with the toUpperCase method)
// if it is equal then return true
// otherwise return false
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
