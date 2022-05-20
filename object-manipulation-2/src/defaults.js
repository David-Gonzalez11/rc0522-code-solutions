/* exported defaults */
// iterate over the properties of the source object
// if object at key equals undefined
// assign the other object the value of key to the new object at key
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
