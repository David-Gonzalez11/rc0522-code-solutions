/* exported pick */
/*
create an array and set it equal to an empty object literal
iterate over the keys in source
if keys included key and source at key is not equal to undefined
assign the variable we created(newObj) at key to the source object at key
return the newObj

*/
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if ((keys.includes(key)) && (source[key] !== undefined)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
