/* exported titleCase */
function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < words.length; i++) {
    if (words[i].includes('-')) {
      var splitHyphen = words[i].split('-');
      for (var j = 0; j < splitHyphen.length; j++) {
        splitHyphen[j] = splitHyphen[j].charAt(0).toUpperCase() + splitHyphen[j].slice(1);
        console.log(splitHyphen);
      }

      var hyphen = splitHyphen.join('-');
      console.log(hyphen);
      words[i] = hyphen;

    } else if (words[i] === 'api') {
      words[i] = 'API';
    } else if (words[i] === 'javascript:') {
      words[i] = 'JavaScript:';
    } else if (words[i] === 'javascript') {
      words[i] = 'JavaScript';
    } else if (words[i].length >= 4) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      console.log(words[i]);
    } else if (i === 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      console.log('if i === 0', words[i]);
    } else if (minor.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      console.log('lol'
        , words[i]);
    } else if (words[i - 1].includes(':')) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      console.log(words[i]);
    }
  }
  var output = words.join(' ');
  return output;
}
