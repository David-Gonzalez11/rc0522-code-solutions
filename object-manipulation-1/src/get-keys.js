/* exported getKeys */
// create a new varibale to hold the keys
// iterate through the keys in the object
// push the key into the array created
// return the array
function getKeys(object) {
  var arr = [];
  for (var key in object) {
    arr.push(key);
  }
  return arr;
}
