/* exported zip */
function zip(arr1, arr2) {
  const pairArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1.length[i] === arr2.length[i]) {
      const pairs = [arr1[i], arr2[i]];
      pairArr.push(pairs);
    }
  }
  return pairArr;

}
