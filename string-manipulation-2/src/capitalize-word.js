/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizeWord = '';
  for (var i = 0; i < word.length; i++) {
    if (word.toLowerCase() === 'javascript') {
      if (i === 0 || i === 4) {
        capitalizeWord += word[i].toUpperCase();
      } else {
        capitalizeWord += word[i].toLowerCase();
      }
    } else {
      if (i === 0) {
        capitalizeWord += word[i].toUpperCase();
      } else {
        capitalizeWord += word[i].toLowerCase();
      }
    }
  }
  return capitalizeWord;
}
