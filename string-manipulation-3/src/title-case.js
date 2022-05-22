/* exported titleCase */
function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var minorwordss = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

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
    } else if (minorwordss.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } else if (words[i - 1].includes(':')) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  var output = words.join(' ');
  return output;
}
