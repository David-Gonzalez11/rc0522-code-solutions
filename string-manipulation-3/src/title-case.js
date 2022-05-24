/* exported titleCase */
// first create a new variable and set it equal to the title and use the lowerCase method and the split method to make the string lowercase and split the string into an array of indivisual words
// create another varibale to store all the minor words that should be lowercases if they are less than three letters
// create a for loop that iterates over the words variable at every index
// if the word at index i is equal to a dash then create another variable to split the words within the dash
// iterate over the splitHyphen variable son that we can make each character at index 0 uppercase and replace it
//
//
//
//
//
//
//
function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < words.length; i++) {
    if (words[i].includes('-')) {
      var splitHyphen = words[i].split('-');
      for (var j = 0; j < splitHyphen.length; j++) {
        splitHyphen[j] = splitHyphen[j].charAt(0).toUpperCase() + splitHyphen[j].slice(1);
      }
      var hyphen = splitHyphen.join('-');
      words[i] = hyphen;

    } else if (words[i] === 'api') {
      words[i] = 'API';
    } else if (words[i] === 'javascript:') {
      words[i] = 'JavaScript:';
    } else if (words[i] === 'javascript') {
      words[i] = 'JavaScript';

    } else if (words[i].length >= 4) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } else if (i === 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } else if (minor.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } else if (words[i - 1].includes(':')) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  var output = words.join(' ');
  return output;
}
