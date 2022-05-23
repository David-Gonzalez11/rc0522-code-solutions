/* exported intersection */
function intersection(firstArr, secondArr) {
  var newArr = [];
  for (var i = 0; i < firstArr.length; i++) {
    if ((secondArr.includes(firstArr[i])) &&
      (!newArr.includes(firstArr[i]))) {
      newArr.push(firstArr[i]);
    }
  }

  for (var j = 0; j < secondArr.length; j++) {
    if ((firstArr.includes(secondArr[j])) &&
      (!newArr.includes(secondArr[j]))) {
      newArr.push(secondArr[j]);
    }
  }
  return newArr;
}
