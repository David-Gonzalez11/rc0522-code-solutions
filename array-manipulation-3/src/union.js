/* exported union */
function union(firstArr, secondArr) {
  var newArr = [];
  for (var i = 0; i < firstArr.length; i++) {
    if (!newArr.includes(firstArr[i])) {
      newArr.push(firstArr[i]);
    }
  }

  for (var j = 0; j < secondArr.length; j++) {
    if (!newArr.includes(secondArr[j])) {
      newArr.push(secondArr[j]);
    }
  }
  return newArr;
}
