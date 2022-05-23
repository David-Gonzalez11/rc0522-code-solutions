/* exported zip */
function zip(arr1, arr2) {
  var worthless = [];
  var pairArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1.length[i] === arr2.length[i]) {
      var pairs = [arr1[i], arr2[i]];
      console.log(pairs);
      pairArr.push(pairs);
    } else if (arr1.length[i] > arr2.length[i] || arr2.length > arr1.length) {
      worthless.push(arr1[i], arr2[i]);
    }
  }
  return pairArr;

}
