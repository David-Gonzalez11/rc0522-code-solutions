/* exported getValues */
function getValues(object) {
  var value = [];
  for (var key in object) {
    value.push(object[key]);
  }
  return value;
}
