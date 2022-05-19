/* exported capitalize */
// create a new variable to make the word lowercase by using the toLowerCase method
// return the newWord variable and use the charAt() method to make the first index of the newVariable uppercase
// by calling the toUpperCase method
// use string concatination to add the newWordVariable and slice the varibale at index 1 where the uppercase letter will be input
function capitalize(word) {
  var newWord = word.toLowerCase();
  return newWord.charAt(0).toUpperCase() + newWord.slice(1);

}
