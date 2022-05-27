/* exported titleCase */
// first create a new variable and set it equal to the title and use the lowerCase method and the split method to make the string lowercase and split the string into an array of indivisual words
// create another varibale to store all the minor words that should be lowercases if they are less than three letters
// create a for loop that iterates over the words variable at every index
// if the word at index i is equal to a dash then create another variable to split the words within the dash
// iterate over the splitHyphen variable so that we can make each character at index 0 uppercase and replace it as the first letter
// create a new variable for hyphen and set it equal to the splitHyphen variable to join the dashed word again with a dash
// set the word at index i equal to variable hyphen
// check if wordsa at index is equal to lower case 'api' and if it is then make it equal to 'API'
// check if words at index is equal to 'javascript:' if it is then replace it with 'JavaScript:'
// check if words at index is equal to 'javascript' if it is then replace it with 'JavaScript'
// check if words at index i is greater than or equal to 4
// if it is then words at index i is equal to words at index i (call the charAt method) to make the first letter uppercase and slice and start at 1 to continue the word all lowerCase
// check if words at index i is strictly equal to 0
// if it is then words at index i is equal to words at index i (call the charAt method) to make the first letter uppercase and slice and start at 1 to continue the word all lowerCase
// check if minorwords at indexOf words at i is strictly equal to -1
// if it is then words at index i is equal to words at index i (call the charAt method) to make the first letter uppercase and slice and start at 1 to continue the word all lowerCase
// check to see if words at index i -1 includes a colon
// if it is then words at index i is equal to words at index i (call the charAt method) to make the first letter uppercase and slice and start at 1 to continue the word all lowerCase

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
