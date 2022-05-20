/* exported getWords */
function getWords(string) {
  var list = [];
  var currentWord = '';
  if (string === '') {
    return list;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      list.push(currentWord);
      currentWord = '';
    }
  }
  list.push(currentWord);
  return list;
}
