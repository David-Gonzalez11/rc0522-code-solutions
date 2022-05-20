/* exported invert */
/*
create a new variable and set it equal to an empty object literal
iterate over the key in source object
create a new variable and set it equal to source at key
use the newObj variable at invertedkey variable to assign the value of obj at inverted key to the the key
return obj variable

*/
function invert(source) {
  var obj = {};
  for (var key in source) {
    var invertedKey = source[key];
    obj[invertedKey] = key;
  }
  return obj;
}
