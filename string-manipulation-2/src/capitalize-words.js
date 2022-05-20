/* exported capitalizeWords */
// create a new varibale to split the string into indivisual characters
// create another variable to store the new capitalized words later on
// iterate over the words varibale which iterates over each word
// iterate over the words variable at i which iterates over every character in words
// if words at the first index is equal to zero then we call the uppercase method to capitalize it
// if it is not the first index then we make it lower case
// push the new characters to the capitalizedWordsArray to store them
// return the array and call the join method to make the characters into words
function capitalizeWords(string) {
  var words = string.split(' ');
  var capitalizeWordsArray = [];

  for (var i = 0; i < words.length; i++) {
    var capitalizeWord = '';

    for (var x = 0; x < words[i].length; x++) {
      if (x === 0) {
        capitalizeWord += words[i][x].toUpperCase();
      } else {
        capitalizeWord += words[i][x].toLowerCase();
      }
    }
    capitalizeWordsArray.push(capitalizeWord);
  }
  return capitalizeWordsArray.join(' ');
}
