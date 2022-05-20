/* exported toObject */
function toObject(keyValuePair) {
  var value = keyValuePair.pop();
  var key = keyValuePair.pop();
  var obj = {};
  obj[key] = value;
  return obj;
}
