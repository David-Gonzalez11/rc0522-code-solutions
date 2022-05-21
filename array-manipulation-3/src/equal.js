/* exported equal */
function equal(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (var i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}
