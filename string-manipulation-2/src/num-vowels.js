/* exported numVowels */
function numVowels(string) {
  // create a new string to make all the letters in string lowercase
  // create a new variable called count and set it equal to 0
  // iterate over the string
  // check if the newString variable at i is equal to a vowel
  // if it is then increment the count variable by 1
  // return the count variable
  var newString = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (newString.charAt(i) === 'a' || newString.charAt(i) === 'e' || newString.charAt(i) === 'i' ||
newString.charAt(i) === 'o' || newString.charAt(i) === 'u') {
      count++;
    }
  }
  return count;

}
